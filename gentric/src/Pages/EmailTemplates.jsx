import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import useFetch from '../Hooks/Fetch.jsx';
import { rows as mockRows, columns as mockColumns, mockTables } from '../Mock/mock.js';

export default function EmailTemplates() {
    const { data, loading } = useFetch();

    // Use fourth mockTable config or default
    const tableConfig = (data.mockTables && data.mockTables[3]) || mockTables[3];
    const rows = data.rows || mockRows;
    const columns = data.columns || mockColumns;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Email Templates
            </Typography>

            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <AllinOne
                    title={tableConfig.title}
                    titleIcons={tableConfig.titleIcons}
                    button={tableConfig.button}
                >
                    <Tables
                        rows={rows}
                        columns={columns}
                        fields={tableConfig.fields}
                        paginationMode={tableConfig.pagination}
                        checkBox={tableConfig.checkbox}
                        filtering={tableConfig.filtering}
                        sorting={tableConfig.sorting}
                    />
                </AllinOne>
            )}
        </Box>
    );
}
