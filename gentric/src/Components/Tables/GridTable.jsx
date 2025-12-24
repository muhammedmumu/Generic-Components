// ...existing code...
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export default function Tables({ rows, columns, fields, paginationMode, checkBox, filtering = true, sorting = true }) {
    const selectedColumns = columns.filter(c => fields.includes(c.field));
    const gridColumns = selectedColumns.map(col => ({
        ...col,
        flex: 1,
        minWidth: 120,
        headerAlign: 'center',
        align: 'center',
        sortable: sorting,
        filterable: filtering
    }));
    const paginationProps = paginationMode
        ? {
            initialState: {
                pagination: { paginationModel: { page: 0, pageSize: 5 } },
            },
            pageSizeOptions: [5, 10],
        }
        : {
            hideFooterPagination: true,
        };


    return (
        <Box sx={{ width: '100%', height: '400px', overflow: 'hidden' }}>
            <DataGrid
                rows={rows}
                columns={gridColumns}
                {...paginationProps}
                checkboxSelection={checkBox}
                disableColumnFilter={!filtering}
                disableColumnMenu={!filtering && !sorting}

                sortingMode="client"
                columnHeaderHeight={56}
                slotProps={{
                    columnsPanel: {
                        disableHideAllButton: true,
                        disableShowAllButton: true,
                    },
                }}
            />
        </Box>
    );
}