import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const GenericDataTable = ({
  rows,
  columns,
  loading = false,
  pageSize = 5,
  pagination = true,
  checkbox = false,
  sorting = true,
  filtering = false,
  rowSelection = "none",
  sortingMode = "client",
  onRowSelectionChange,
}) => {
  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        autoHeight
        pagination={pagination}
        pageSizeOptions={pagination ? [5, 10, 25] : []}
        initialState={{
          pagination: {
            paginationModel: { pageSize },
          },
        }}
        checkboxSelection={checkbox}
        disableRowSelectionOnClick={rowSelection === "none"}
        onRowSelectionModelChange={onRowSelectionChange}
        sortingMode={sorting ? sortingMode : undefined}
        disableColumnSorting={!sorting}
        disableColumnFilter={!filtering}
        sx={{ border: "none", width: "100%" }}
      />
    </Box>
  );
};

export default GenericDataTable;
