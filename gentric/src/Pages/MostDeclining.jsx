import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { rows as baseRows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import GentricCard from '../Components/Gentric/GentricCard';
import Headers from '../Components/Header/Header.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import TextField from '../Components/TextField/TextField.jsx';

export default function MostDeclining() {
    const { config, columns, buttons } = useTableConfig(4);

    const actions = (
        <Box display="flex" gap={1} alignItems="center">
            <TextField type="autocomplete" label="Months" />
            <TextField type="autocomplete" label="All" />
        </Box>
    );

    if (!config) return null;

    return (
        <GentricCard buttons={buttons} >
            <Box className="gentric-header">
                <Headers
                    title={config?.title || 'Most Declining'}
                    titleIcon={<TrendingDownIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
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

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={() => console.log('Download all data')}
                >
                    Download All Data
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                    onClick={() => console.log('View all')}
                    sx={{ color: 'primary.main', borderColor: 'primary.main' }}
                >
                    View All
                </Button>
            </Box>
        </GentricCard>
    );
}
