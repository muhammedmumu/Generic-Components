// ...existing code...
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export default function Tables({ rows, columns, fields, paginationMode, checkBox, filtering = true, sorting = true }) {
    const selectedColumns = columns.filter(c => fields.includes(c.field));

    const gridColumns = selectedColumns.map(col => ({ ...col, flex: 1, minWidth: 120, headerAlign: 'center', align: 'center' }));
    const paginationProps = paginationMode
        ? {
            initialState: {
                pagination: { paginationModel: { page: 0, pageSize: 5 } },
            },
            pageSizeOptions: [5, 10],
        }
        : null;


    return (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <DataGrid
                sx={{
                    width: '100%',
                    fontWeight: 500,
                    '& .MuiDataGrid-row:nth-of-type(odd)': {
                        backgroundColor: 'white',
                    },
                    '& .MuiDataGrid-row:nth-of-type(even)': {
                        backgroundColor: '#e3f2fd',
                    },
                    '& .MuiDataGrid-row.Mui-selected': {
                        backgroundColor: 'lavender !important',
                    },
                    '& .MuiDataGrid-row.Mui-selected:hover': {
                        backgroundColor: '#d8bfd8 !important',
                    },
                    '& .MuiDataGrid-cell': {
                        p: '4px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                    },
                    '& .MuiDataGrid-row:focus': {
                        backgroundColor: 'rgba(215, 167, 215, 1) !important',
                        color: 'white',
                        outline: 'none',
                    },
                    '& .MuiDataGrid-row:focus-within': {
                        backgroundColor: 'rgba(215, 167, 215, 1) !important',
                        color: 'white',
                        outline: 'none',
                    },
                    '& .MuiDataGrid-cellContent': {
                        justifyContent: 'flex-start',
                        textAlign: 'center',
                        width: '100%',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        fontWeight: 500,
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        textAlign: 'center',
                        fontWeight: 500,
                    },
                }}
                rows={rows}
                columns={gridColumns}
                {...paginationProps}
                checkboxSelection={checkBox}
                disableRowSelectionOnClick
                disableColumnFilter={!filtering}
                disableColumnMenu={!filtering && !sorting}
                disableColumnSort={!sorting}
            />
        </Box>
    );
}