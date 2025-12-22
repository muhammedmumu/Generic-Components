import React, {
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import DefaultFirstColumn from "../VirtualisedTable/DefaultFirstColumn";
import useContainerDimensions from "./useContainerDimensions";
import {
  DEFAULT_COLORS,
  DEFAULT_DIMENSIONS,
} from "../VirtualisedTable/constants";
import { SimpleCheckBox } from "../../..";

// Lightweight memoized checkbox cell for matrix body
const CheckboxCell = React.memo(function CheckboxCell({
  checked,
  disabled,
  onChange,
  color,
  disabledColor,
}) {
  return (
    <SimpleCheckBox
      isChecked={checked}
      disabled={disabled}
      handleChange={onChange}
      labelStyles={{ display: "none" }}
      containerStyles={{ justifyContent: "center" }}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      sx={{
        padding: 0,
        color,
        "&.Mui-disabled": {
          color: disabledColor,
        },
      }}
    />
  );
});

const useVirtualizedTableLogic = ({
  rows,
  columns,
  columnGroups,
  selectedData,
  selectedIds,
  isEditMode,
  loading,
  onCheckboxChange,
  onRowSelection,
  colors,
  badges,
  dimensions,
  getRowBackgroundColor,
  getQuestionColor,
  renderCell,
  renderFirstColumn,
  emptyMessage
}) => {
  // 1. Merge configuration with defaults
  const finalColors = useMemo(
    () => ({ ...DEFAULT_COLORS, ...colors }),
    [colors]
  );
  const finalDim = useMemo(
    () => ({ ...DEFAULT_DIMENSIONS, ...dimensions }),
    [dimensions]
  );

  // 2. Measure container (auto-sizing)
  const [containerRef, containerSize] = useContainerDimensions();
  const { width: availableWidth, height: availableHeight } = containerSize;

  // 3. Refs for scroll synchronization
  const headerRef = useRef(null);
  const listOuterRef = useRef(null);

  // 4. Precompute badges and freeze row data as much as possible
  const processedRows = useMemo(() => {
    if (!rows || rows.length === 0) return [];
    if (!badges || badges.length === 0) return rows;

    return rows.map((row) => {
      const visibleBadges = badges
        .filter((b) => (b.condition ? b.condition(row) : true))
        .map((b) => ({
          label: b.label(row),
          backgroundColor: b.backgroundColor(row),
          color: b.color,
        }));

      // attach a derived _badges field
      return {
        ...row,
        _badges: visibleBadges,
      };
    });
  }, [rows, badges]);

  // 5. Dynamic column width calculation (auto-grow)
  const calculatedColumnWidth = useMemo(() => {
    if (!columnGroups || columnGroups.length === 0 || columns.length === 0) return finalDim.columnWidth;

    let totalGroupsColumnCount = 0;
    columnGroups.forEach((group) => {
      totalGroupsColumnCount += group.columnCount;
    });

    if (totalGroupsColumnCount === 0) return finalDim.columnWidth;

    const emptyGroupsCount = columnGroups.filter(g => g.columnCount === 0).length;
    const emptyGroupsWidth = emptyGroupsCount * 120;
    const remainingSpace =
      availableWidth - finalDim.firstColumnWidth - emptyGroupsWidth;
  
    if (remainingSpace > totalGroupsColumnCount * DEFAULT_DIMENSIONS.columnWidth) {
      const newWidth = Math.floor(remainingSpace / totalGroupsColumnCount);
      return newWidth;
    }
    return DEFAULT_DIMENSIONS.columnWidth;
  }, [
    availableWidth,
    columnGroups,
    columns.length,
    finalDim.columnWidth,
    finalDim.firstColumnWidth,
  ]);

  const totalContentWidth = useMemo(() => {
    if (!columnGroups || columnGroups.length === 0) {
      return finalDim.firstColumnWidth + columns.length * calculatedColumnWidth;
    }

    let totalWidth = finalDim.firstColumnWidth;
    columnGroups.forEach((group) => {
      if (group.columnCount > 0) {
        totalWidth += group.columnCount * calculatedColumnWidth;
      } else {
        totalWidth += 120;
      }
    });
    return totalWidth;
  }, [columnGroups, columns.length, finalDim.firstColumnWidth, calculatedColumnWidth]);

  const allSelected = useMemo(() => {
    return rows.length > 0 && selectedIds.length === rows.length;
  }, [rows.length, selectedIds.length]);

  const selectedIdSet = useMemo(
    () => new Set(selectedIds),
    [selectedIds]
  );

  // 6. Scroll sync – optimized with rAF + passive listeners
  useEffect(() => {
    const listNode = listOuterRef.current;
    let animationFrameId;

    const handleNativeScroll = (e) => {
      if (!headerRef.current) return;
      const scrollLeft = e.target.scrollLeft;

      if (headerRef.current.scrollLeft !== scrollLeft) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        animationFrameId = requestAnimationFrame(() => {
          if (headerRef.current) {
            headerRef.current.scrollLeft = scrollLeft;
          }
        });
      }
    };

    if (listNode) {
      listNode.addEventListener("scroll", handleNativeScroll, {
        passive: true,
      });
    }

    return () => {
      if (listNode) {
        listNode.removeEventListener("scroll", handleNativeScroll);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [loading, availableWidth]);

  // 7. Default First Column rendering (memoized, uses precomputed badges)
  const defaultRenderFirstColumn = useCallback(
    (row) => {
      const isSelected = selectedIdSet.has(row.id);

      return (
        <DefaultFirstColumn
          row={row}
          isSelected={isSelected}
          onToggle={onRowSelection}
          badges={row._badges}
          textColor={getQuestionColor(row)}
          checkboxColor={finalColors.checkbox}
        />
      );
    },
    [selectedIdSet, onRowSelection, getQuestionColor, finalColors.checkbox]
  );

  // 8. Default matrix cell rendering (memoized, uses CheckboxCell)
  const defaultRenderCell = useCallback(
    (row, col,) => {
       const localValue = selectedData[row.id]?.[col.focusAreaId];
       const checked =
         localValue !== undefined
           ? localValue
           : row?.selected_areas?.[col.focusAreaId] === true;

      const handleChange = () => {
        onCheckboxChange?.(row.id, col.focusAreaId,row?.selected_areas?.[col.focusAreaId],row);
      };

      return (
        <CheckboxCell
          checked={checked}
          disabled={row?.is_ignored || !isEditMode}
          onChange={handleChange}
          color={finalColors.checkbox}
          disabledColor={finalColors.disabledCheckbox}
        />
      );
    },
    [
      selectedData,
      isEditMode,
      onCheckboxChange,
      finalColors.checkbox,
      finalColors.disabledCheckbox,
    ]
  );

  const activeRenderFirstColumn = renderFirstColumn || defaultRenderFirstColumn;
  const activeRenderCell = renderCell || defaultRenderCell;

  // 9. itemData passed to react-window rows
  const itemData = useMemo(
    () => ({
      rows: processedRows,
      columns,
      columnGroups,
      colors: finalColors,
      firstColumnWidth: finalDim.firstColumnWidth,
      columnWidth: calculatedColumnWidth,
      getRowBackgroundColor,
      renderFirstColumn: activeRenderFirstColumn,
      renderCell: activeRenderCell,
      emptyMessage
    }),
    [
      processedRows,
      columns,
      columnGroups,
      finalColors,
      finalDim.firstColumnWidth,
      calculatedColumnWidth,
      getRowBackgroundColor,
      activeRenderFirstColumn,
      activeRenderCell,
      emptyMessage
    ]
  );

  return {
    // Refs
    containerRef,
    headerRef,
    listOuterRef,
    
    // Dimensions
    availableWidth,
    availableHeight,
    calculatedColumnWidth,
    totalContentWidth,
    
    // Config & Data
    finalColors,
    finalDim,
    itemData,
    allSelected,
  };
};

export default useVirtualizedTableLogic;
