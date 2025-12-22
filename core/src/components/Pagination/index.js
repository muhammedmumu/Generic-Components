import React from 'react'
import Pagination from '@mui/material/Pagination';

export default function index({Count,OnPageChange}) {
    return (
        <div>
             <Pagination
                count={Count}
                color="primary"
                onChange={(event, page) => OnPageChange(page)}
              />
        </div>
    )
}
