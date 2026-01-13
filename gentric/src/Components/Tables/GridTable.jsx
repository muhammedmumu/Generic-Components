import { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TableHook from '../Tables/Hooks/Table';
export default function Tables({ rows = [], columns = [], fields = [], paginationMode = true, checkBox = false, filtering = true, sorting = true, ...rest }) {
    const { paginationProps, gridColumns } = TableHook({ columns, fields, sorting, filtering, paginationMode });

    const tableHeight = paginationMode ? 'fit-content' : 'auto';
    const maxHeight = paginationMode ? 'none' : '500px';

    return (
        <Box sx={{ width: '100%', height: tableHeight, maxHeight: maxHeight, overflowY: 'auto' }}>
            <DataGrid
                rows={rows}
                columns={gridColumns}
                checkboxSelection={checkBox}
                disableColumnFilter={!filtering}
                disableColumnMenu={!(filtering || sorting)}
                sortingMode={sorting ? "client" : "server"}
                disableColumnSorting={!sorting}
                columnHeaderHeight={56}
                {...paginationProps} />
        </Box>
    );
}
