import React from 'react';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { rows as baseRows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Headers from '../Components/Header/Header.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Footer from '../Components/Footer/Fotter.jsx';
import Buttons from '../Components/Button/Button.jsx';

export default function PortfolioMetrics() {
  const { config, columns } = useTableConfig(1);
  const footer = (
    <Footer>
      <Buttons
        label="Download all data"
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={() => console.log('Download all data')}
      />
      <Buttons
        label="View all"
        variant="outlined"
        sx={{ color: 'primary.main', borderColor: 'primary.main' }}
        startIcon={<VisibilityIcon />}
        onClick={() => console.log('View all')}
      />
    </Footer>
  );

  if (!config) return null;



  return (
    <AllinOne footer={footer}>
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
    </AllinOne>
  );
}
