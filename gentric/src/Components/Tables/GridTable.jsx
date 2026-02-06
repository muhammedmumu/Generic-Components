// import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TableHook from '../Tables/Hooks/Table';

function Tables({
    rows,
    columns,
    fields,
    paginationMode,
    checkBox,
    filtering,
    sorting,
    resizable,
    sortMode,
    virtualization,
    ...rest }) {
    const { paginationProps, gridColumns } =
        TableHook({
            columns,
            fields,
            sorting,
            filtering,
            paginationMode,
            resizable,
        });
    const handleOn = () => (console.log(sortMode))


    const tableHeight = virtualization ? '600px' : (paginationMode ? 'fit-content' : 'auto');
    const maxHeight = paginationMode ? 'none' : '500px';

    return (
        <Box sx={{
            width: '100%',
            height: tableHeight,
            maxHeight: virtualization ? 'none' : maxHeight,
            overflowY: virtualization ? 'hidden' : 'auto'
        }}>
            <DataGrid
                rows={rows}
                columns={gridColumns}
                checkboxSelection={checkBox}
                disableColumnFilter={!filtering}
                disableColumnMenu={!(filtering || sorting)}
                disableColumnSorting={sorting}
                disableColumnResizing={!resizable}
                sortingMode={sortMode}
                onSortModelChange={handleOn}
                {...paginationProps} />
        </Box>
    );
}

Tables.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    fields: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    paginationMode: PropTypes.bool,
    checkBox: PropTypes.bool,
    filtering: PropTypes.bool,
    sorting: PropTypes.bool,
    virtualization: PropTypes.bool,
    sortMode: PropTypes.string,
    resizable: PropTypes.bool,
};

Tables.defaultProps = {
    rows: [],
    columns: [],
    fields: [],
    paginationMode: true,
    checkBox: false,
    filtering: true,
    sorting: false,
    virtualization: false,
    sortMode: 'client',
    resizable: false,
};

export default Tables;
