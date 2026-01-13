import React from 'react';
import Box from '@mui/material/Box';
import { rows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';

import Header from '../Components/Header/Header.jsx';
import GentricCard from '../Components/Gentric/GentricCard.jsx';
import GridTable from '../Components/Tables/GridTable.jsx';

export default function ActionPlanSummary() {
    const { config, columns, actions, buttons } = useTableConfig(5);

    if (!config) return null;

    return (
        <GentricCard buttons={buttons} showFooter={!!buttons?.length}>
            <Box className="gentric-header">
                <Header
                    title={config?.title}
                    titleIcon={null}
                    textFields={[]}
                    actions={actions}
                />
            </Box>
            <GridTable
                rows={rows}
                columns={columns}
                fields={config?.fields}
                checkBox={config?.checkbox}
                filtering={config?.filtering}
                sorting={config?.sorting}
                paginationMode={config?.pagination ? 'server' : 'client'}
            />
        </GentricCard>
    );
}
