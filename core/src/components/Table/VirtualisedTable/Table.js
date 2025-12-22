import React from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";

import TableRow from "./TableRow";
import useVirtualizedTableLogic from "../hook/useVirtualisedTable";
import { DEFAULT_COLORS, DEFAULT_DIMENSIONS, MatrixPropTypes } from "./constants";
import { SimpleCheckBox } from "../../..";

const VirtualizedTable = (props) => {
  const {
    rows,
    columnGroups,
    columns,
    loading,
    onSelectAll,
    firstColumnHeader,
    firstColumnSubHeader,
  } = props;

  const {
    containerRef,
    headerRef,
    listOuterRef,
    availableWidth,
    availableHeight,
    calculatedColumnWidth,
    totalContentWidth,
    finalColors,
    finalDim,
    itemData,
    allSelected,
  } = useVirtualizedTableLogic(props);

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#fff",
        border: `1px solid ${finalColors.border}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {availableWidth > 0 && availableHeight > 0 && (
        <>
          {/* HEADER */}
          <div
            ref={headerRef}
            style={{
              width: availableWidth,
              overflow: "hidden",
              flexShrink: 0,
              borderBottom: `1px solid ${finalColors.border}`,
              position: "relative",
              zIndex: 2,
            }}
          >
            <div style={{ minWidth: totalContentWidth, width: "fit-content" }}>
              {/* Group Headers */}
              <div style={{ display: "flex", backgroundColor:finalColors.groupHeaderBg, borderBottom: `1px solid ${finalColors.border}` }}>
                {/* Fixed Column */}
                <div style={{
                  width: finalDim.firstColumnWidth,
                  minWidth: finalDim.firstColumnWidth,
                  paddingInline: "8px",
                  backgroundColor: finalColors.headerBg,
                  borderRight: `1px solid ${finalColors.border}`,
                  display: "flex", alignItems: "center",
                  position: "sticky", left: 0, zIndex: 10
                }}>
                  <Box display="flex" alignItems="center" gap="4px">
                    <SimpleCheckBox
                      isChecked={allSelected}
                      handleChange={onSelectAll}
                      sx={{ padding: "4px", color: finalColors.checkbox }}
                    />
                    <Typography sx={{ fontWeight: 500 }} variant="subtitle3">
                      {firstColumnHeader}
                    </Typography>
                  </Box>
                </div>

                {/* Dynamic Groups */}
                {columnGroups?.map((group) => (
                  <div
                    key={group.id}
                    style={{
                      width: group.columnCount > 0 ? group.columnCount * calculatedColumnWidth : calculatedColumnWidth,
                      minWidth: group.columnCount > 0 ? group.columnCount * calculatedColumnWidth : calculatedColumnWidth,
                      padding: "12px",
                      textAlign: "center",
                      backgroundColor: finalColors.groupHeaderBg,
                      borderRight: `1px solid ${finalColors.border}`,
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#333",
                    }}
                  >
                    {group.label}
                  </div>
                ))}
              </div>

              {/* Sub Headers */}
              <div style={{ display: "flex", backgroundColor: finalColors.subHeaderBg }}>
                {/* Fixed Column */}
                <div style={{
                  width: finalDim.firstColumnWidth,
                  minWidth: finalDim.firstColumnWidth,
                  padding: "8px 12px",
                  backgroundColor: finalColors.subHeaderBg,
                  display:"flex", alignItems:"center",
                  borderRight: `1px solid ${finalColors.border}`,
                  fontSize: "12px", fontWeight: 400, color: finalColors.subText,
                  position: "sticky", left: 0, zIndex: 10
                }}>
                  {firstColumnSubHeader}
                </div>

                {/* Dynamic Columns/Groups */}
                {columnGroups?.map((group) => {
                  const groupColumns = columns?.filter(col => col.groupId === group.id) || [];
                  const emptyColumnWidth = group.columnCount > 0 ? group.columnCount * calculatedColumnWidth : calculatedColumnWidth;
                  
                  return (
                    <React.Fragment key={group.id}>
                      {groupColumns.length > 0 ? (
                        groupColumns.map((col) => (
                          <div key={col.id} style={{
                            width: calculatedColumnWidth,
                            minWidth: calculatedColumnWidth,
                            padding: "8px 4px",
                            textAlign: "center",
                            display:"flex", alignItems:"center", justifyContent:"center",
                            backgroundColor: finalColors.subHeaderBg,
                            borderRight: `1px solid ${finalColors.border}`,
                            fontSize: "10px", fontWeight: 400, color: "#333",
                            whiteSpace: "pre-wrap",
                          }}>
                            {col.name}
                          </div>
                        ))
                      ) : (
                        // Render empty placeholder with proper width for groups with no columns
                        <div style={{
                          width: emptyColumnWidth,
                          minWidth: emptyColumnWidth,
                          padding: "8px 4px",
                          textAlign: "center",
                          display:"flex", alignItems:"center", justifyContent:"center",
                          backgroundColor: finalColors.subHeaderBg,
                          borderRight: `1px solid ${finalColors.border}`,
                          fontSize: "10px", fontWeight: 400, color: "#999",
                        }}>
                          —
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- BODY --- */}
          <List
            outerRef={listOuterRef}
            height={availableHeight - finalDim.headerHeight}
            itemCount={rows.length}
            itemSize={finalDim.rowHeight}
            width={availableWidth}
            itemData={itemData}
            overscanCount={10}
          >
            {TableRow}
          </List>
        </>
      )}
    </Box>
  );
};

VirtualizedTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  columnGroups: PropTypes.array,
  selectedData: PropTypes.object,
  selectedIds: PropTypes.array,
  isEditMode: PropTypes.bool,
  loading: PropTypes.bool,
  onCheckboxChange: PropTypes.func,
  onRowSelection: PropTypes.func,
  onSelectAll: PropTypes.func,
  colors: MatrixPropTypes.colors,
  badges: PropTypes.array,
  dimensions: PropTypes.object,
  getRowBackgroundColor: PropTypes.func,
  getQuestionColor: PropTypes.func,
  renderCell: MatrixPropTypes.renderCell,
  renderFirstColumn: MatrixPropTypes.renderFirstColumn,
  firstColumnHeader: PropTypes.string,
  firstColumnSubHeader: PropTypes.string,
};

VirtualizedTable.defaultProps = {
  rows: [],
  columns: [],
  columnGroups: [],
  selectedData: {},
  selectedIds: [],
  isEditMode: false,
  loading: false,
  badges: [],
  colors: DEFAULT_COLORS,
  dimensions: DEFAULT_DIMENSIONS,
  getRowBackgroundColor: (row, index) =>
    index % 2 === 0 ? "#ffffff" : "#fafafa",
  getQuestionColor: () => "#000000",
  renderCell: null,
  renderFirstColumn: null,
  firstColumnHeader: "QUESTIONS/CATEGORIES",
  firstColumnSubHeader: "SERVICE | CONTENT",
};

export default VirtualizedTable;
