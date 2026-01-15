import React from 'react'
import { useMemo } from 'react';
export default function TableHook({ columns, fields, sorting, filtering, paginationMode, resize }) {
    // Filter columns only once
    const gridColumns = useMemo(() => {
        return columns.filter(col => fields.includes(col.field)).map(col => ({
            ...col, flex: 1, minWidth: 120, headerAlign: 'center', align: 'center', sortable: sorting, filterable: filtering, resizable: resize
        }));
    }, [columns, fields, sorting, filtering, resize]);


    // Pagination props clean
    const paginationProps = useMemo(() => {
        return paginationMode ? {
            initialState: {
                pagination: {
                    paginationModel:
                        { page: 0, pageSize: 5 },
                },
            }, pageSizeOptions: [5, 10],
        }
            : { hideFooterPagination: true };
    }, [paginationMode]);
    return { paginationProps, gridColumns };


}
