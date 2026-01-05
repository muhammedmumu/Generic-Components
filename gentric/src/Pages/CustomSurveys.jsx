import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '../Layout/Container.jsx';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import useFetch from '../Hooks/Fetch.jsx';
import { rows as mockRows, columns as mockColumns, mockTables } from '../Mock/mock.js';

export default function CustomSurveys() {
    const { data, loading } = useFetch();

    // Use first mockTable config or default
    const tableConfig = (data.mockTables && data.mockTables[0]) || mockTables[0];
    const rows = data.rows || mockRows;
    const columns = data.columns || mockColumns;

    return (
        <Container>
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
        </Container>
    );
}
