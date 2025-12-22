import * as React from "react";
import PropTypes from "prop-types";
// import { DataGrid, NoRowsOverlay } from "@material-ui/data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
import useTableHook from "../hook/useTable";
import CustomNoRowsOverlay from "./CustomOverlay";

export default function DataTable({
  columns,
  data,
  ToolBar,
  onSort,
  onFilter,
  onChecked,
  loading,
  onPageChange,
  pagination,
  rowLimit,
  rowCount,
  onChangeNoOfRows,
  onRowSelected,
  handleCheckBoxChange,
  // CustomNoRowsOverlay,
  CustomFooter,
  height,
  AllowPagination,
  rowHeight,
  showCellRightBorder,
  showColumnRightBorder,
  disableColumnFilter,
  disableColumnMenu,
  rowsPerPageOptions,
  sortingOrder,
  sortingMode,
  paginationMode,
  outerDivStyles,
  page,
  onSelectionModelChange,
  ...props
}) {
  const { handleSortModelChange, handleFilterModelChange, handlePageChange, columnVisibilityModel } =
    useTableHook({ onSort, onFilter, onPageChange, sortingMode,columns });

  return (
    <div
      style={{
        height: height || 600,
        width: "100%",
        ...outerDivStyles
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        disableColumnReorder
        pagination
        sortingMode={sortingMode}
        disableRowSelectionOnClick
        filterMode="server"
        paginationMode={paginationMode}
        pageSizeOptions={rowsPerPageOptions}
        // onPageSizeChange={onChangeNoOfRows}
        onRowSelected={onRowSelected}
        // pageSize={rowLimit}
        showCellVerticalBorder={showCellRightBorder}
        showColumnVerticalBorder={showColumnRightBorder}
        rowCount={paginationMode === "client" ? data?.length || 0 : loading && rowCount === 0 ? undefined : rowCount}
        onSortModelChange={handleSortModelChange}
        onFilterModelChange={handleFilterModelChange}
        paginationModel={{ page: page || 0, pageSize:rowLimit || 10}}
        onPaginationModelChange={
          paginationMode == "server" || onPageChange
            ? handlePageChange
            : () => {}
        }
        onRowSelectionModelChange={typeof onSelectionModelChange === "function" ? onSelectionModelChange : handleCheckBoxChange}
        disableColumnFilter={disableColumnFilter}
        disableColumnMenu={disableColumnMenu}
        rowHeight={rowHeight}
        loading={loading}
        sortingOrder={sortingOrder}
        columnVisibilityModel={columnVisibilityModel}
        disableVirtualization
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          footer: CustomFooter,
          toolbar: ToolBar ? ToolBar : null,
        }}
        {...props}
      />
    </div>
  );
}
DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array,
  rowCount: PropTypes.number,
  rowLimit: PropTypes.number,
  rowHeight: PropTypes.number,
  showCellRightBorder: PropTypes.bool,
  showColumnRightBorder: PropTypes.bool,
  disableColumnFilter: PropTypes.bool,
  disableColumnMenu: PropTypes.bool,
  loading: PropTypes.bool,
};
DataTable.defaultProps = {
  rowsPerPageOptions: [10, 25, 50],
  sortingOrder: ["asc", "desc"],
  rowHeight: 32,
  sortingMode: "server",
  disableColumnMenu: true,
  paginationMode: "server",
  showColumnRightBorder:true
};
