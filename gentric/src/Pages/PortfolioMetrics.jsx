import React from 'react';
import Box from '@mui/material/Box';
import { rows as baseRows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import GentricCard from '../Components/Gentric/GentricCard.jsx';
import Headers from '../Components/Header/Header.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import Footer from '../Components/Footer/Fotter.jsx';
import Buttons from '../Components/Button/Button.jsx';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DownloadIcon from '@mui/icons-material/Download';

export default function PortfolioMetrics() {
    const { config, columns } = useTableConfig(1);

    if (!config) return null;

    return (
        <GentricCard>
            <Box className="gentric-header">
                <Headers
                    title={config?.title || 'Portfolio Metrics'}
                    titleIcon={<CorporateFareIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
                    actions={[]}
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

            <Box className="gentric-footer">
                <Footer>
                    <Buttons label="Download all data" variant="outlined" startIcon={<DownloadIcon />} />
                    <Buttons label="View Receive analyst" variant="outlined" sx={{ color: 'primary.main' }} />
                </Footer>
            </Box>
        </GentricCard>
    );
}
