import { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export default function Tables({
    rows = [],
    columns = [],
    fields = [],
    paginationMode = true,
    checkBox = false,
    filtering = true,
    sorting = true
}) {

    // Filter columns only once
    const gridColumns = useMemo(() => {
        return columns
            .filter(col => fields.includes(col.field))
            .map(col => ({
                ...col,
                flex: 1,
                minWidth: 120,
                headerAlign: 'center',
                align: 'center',
                sortable: sorting,
                filterable: filtering
            }));
    }, [columns, fields, sorting, filtering]);


    // Pagination props clean
    const paginationProps = useMemo(() => {
        return paginationMode
            ? {
                initialState: {
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                },
                pageSizeOptions: [5, 10],
            }
            : { hideFooterPagination: true };
    }, [paginationMode]);

    return (
        <Box sx={{ width: '100%', height: 450 }}>
            <DataGrid
                rows={rows}
                columns={gridColumns}
                checkboxSelection={checkBox}

                disableColumnFilter={!filtering}
                disableColumnMenu={!(filtering || sorting)}

                sortingMode={sorting ? "client" : "none"}
                columnHeaderHeight={56}

                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: 'transparent',
                    },
                    borderRadius: 0,
                }}

                {...paginationProps}
            />
        </Box>
    );
}
