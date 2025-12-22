import React, { memo } from "react";
import PropTypes from "prop-types";
import { areEqual } from "react-window";
import { Typography } from "@mui/material";

const Row = ({ index, style, data }) => {
  const {
    rows,
    columns,
    columnGroups,
    firstColumnWidth,
    columnWidth,
    colors,
    getRowBackgroundColor,
    renderCell,
    renderFirstColumn,
    emptyMessage
  } = data;

  const row = rows[index];
  const bgColor = getRowBackgroundColor(row, index);

  return (
    <div
      style={{
        ...style,
        display: "flex",
        boxSizing: "border-box",
        backgroundColor: bgColor,
      }}
    >
      {/* First Column - STICKY */}
      <div
        style={{
          width: firstColumnWidth,
          minWidth: firstColumnWidth,
          padding: "0 8px",
          borderRight: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          position: "sticky",
          left: 0,
          zIndex: 5,
          backgroundColor: bgColor,
        }}
      >
        {renderFirstColumn(row, index)}
      </div>

      {/* Dynamic Columns/Groups */}
      {columnGroups?.map((group) => {
        const groupColumns = columns.filter(col => col.groupId === group.id);
        const emptyColumnWidth = group.columnCount > 0 ? group.columnCount * columnWidth : columnWidth;
        
        return (
          <React.Fragment key={group.id}>
            {groupColumns.length > 0 ? (
              groupColumns.map((col) => (
                <div
                  key={`${row.id}-${col.id}`}
                  style={{
                    width: columnWidth,
                    minWidth: columnWidth,
                    padding: "0 8px",
                    borderRight: `1px solid ${colors.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    backgroundColor: bgColor,
                  }}
                >
                  {renderCell(row, col, index)}
                </div>
              ))
            ) : (
              // Render empty placeholder with proper width for groups with no columns
              <div
                style={{
                  width: emptyColumnWidth,
                  minWidth: emptyColumnWidth,
                  padding: "0 8px",
                  borderRight: `1px solid ${colors.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  backgroundColor: bgColor,
                }}
              >
                <Typography variant="subtitle1" textAlign={"center"}>{emptyMessage || "—"}</Typography>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

Row.displayName = "TableRow";

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default memo(Row, areEqual);
