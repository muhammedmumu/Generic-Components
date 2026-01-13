import React from 'react';
import Box from '@mui/material/Box';
import { rows as baseRows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import GentricCard from '../Components/Gentric/GentricCard';
import Headers from '../Components/Header/Header.jsx';
import Tables from '../Components/Tables/GridTable.jsx';

export default function FullFeaturedTable() {
    const { config, columns, actions, buttons, titleIcon } = useTableConfig(0);

    if (!config) return null;

    return (
        <GentricCard buttons={buttons}>
            <Box className="gentric-header">
                <Headers
                    title={config?.title || 'Table'}
                    titleIcon={titleIcon}
                    actions={actions}
                    textFields={[]}
                />
            </Box>

            <Tables
                rows={baseRows}
                columns={columns}
                fields={config?.fields}
                checkBox={!!config?.checkbox}
                filtering={!!config?.filtering}
                sorting={!!config?.sorting}
                paginationMode={!!config?.pagination}
            />
        </GentricCard>
    );
}
