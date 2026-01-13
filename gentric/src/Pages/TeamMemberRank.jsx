import React from 'react';
import Box from '@mui/material/Box';
import { rows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';

import Header from '../Components/Header/Header.jsx';
import GentricCard from '../Components/Gentric/GentricCard.jsx';
import GridTable from '../Components/Tables/GridTable.jsx';

/**
 * TeamMemberRank - Table #7
 *
 * Displays team member ranking with full-featured interactions:
 * - Pagination: ON (multi-page view for large teams)
 * - Filtering: ON (search by name, role, department)
 * - Sorting: ON (rank order, performance metrics)
 * - Checkbox: OFF (single selection only)
 * - Header Icon: Filter (focused search)
 * - Buttons: Download, Print (export & physical copy)
 *
 * Design rationale:
 * - Single row selection for focused comparison/inspection
 * - Full pagination + filter + sort enables exploration of large teams
 * - Download + Print support both digital and physical distribution
 * - Minimal header (Filter only) maintains focus on ranking data
 * - No checkbox selection keeps UI clean for ranking context
 */

export default function TeamMemberRank() {
    const { config, columns, actions, buttons } = useTableConfig(6);

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
