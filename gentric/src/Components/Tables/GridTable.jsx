// import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TableHook from '../Tables/Hooks/Table';

function Tables({ rows, columns, fields, paginationMode, checkBox, filtering, sorting, ...rest }) {
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

Tables.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    fields: PropTypes.array,
    paginationMode: PropTypes.bool,
    checkBox: PropTypes.bool,
    filtering: PropTypes.bool,
    sorting: PropTypes.bool,
};

Tables.defaultProps = {
    rows: [],
    columns: [],
    fields: [],
    paginationMode: true,
    checkBox: false,
    filtering: true,
    sorting: true,
};

export default Tables;
