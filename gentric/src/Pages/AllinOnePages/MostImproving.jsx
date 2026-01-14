import React from 'react';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { rows as baseRows } from '../../Mock/mock.js';
import { useTableConfig } from '../../Hooks/useTableConfig.jsx';
import MovingIcon from '@mui/icons-material/Moving';
import AllinOne from '../../Components/Gentric/AllinOne';
import Headers from '../../Components/Header/Header.jsx';
import Tables from '../../Components/Tables/GridTable.jsx';
import Footer from '../../Components/Footer/Fotter.jsx';
import Buttons from '../../Components/Button/Button.jsx';

export default function MostImproving() {
  const { config, columns, actions, titleIcon } = useTableConfig(3);

  if (!config) return null;

  const buttons = [
    {
      label: 'Download All Data',
      variant: 'contained',
      startIcon: <DownloadIcon />,
      onClick: () => console.log('Download all data')
    },
    {
      label: 'View All',
      variant: 'outlined',
      startIcon: <VisibilityIcon />,
      onClick: () => console.log('View all'),
      sx: { color: 'primary.main', borderColor: 'primary.main' }
    }
  ];

  return (
    <AllinOne buttons={buttons}>
      <Box className="gentric-header">
        <Headers
          title={config?.title || 'Most Improving'}
          titleIcon={<MovingIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
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
      <Box sx={{ mt: 2 }}>
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
      </Box>
    </AllinOne>
  );
}
