import { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TableHook from '../Tables/Hooks/Table';
export default function Tables({ rows = [], columns = [], fields = [], paginationMode = true, checkBox = false, filtering = true, sorting = true, ...rest }) {
    const { paginationProps, gridColumns } = TableHook({ columns, fields, sorting, filtering, paginationMode });
    return (
        <Box sx={{ width: '100%', height: 'fit-content', minHeight: 400 }}>
            <DataGrid
                rows={rows}
                columns={gridColumns}
                checkboxSelection={checkBox}
                disableColumnFilter={!filtering}
                disableColumnMenu={!(filtering || sorting)}
                sortingMode={sorting ? "client" : "none"}
                columnHeaderHeight={56}
                sx={{ '& .MuiDataGrid-columnHeaders': { backgroundColor: 'transparent', }, borderRadius: 0, }}
                {...paginationProps} />
        </Box>
    );
}
