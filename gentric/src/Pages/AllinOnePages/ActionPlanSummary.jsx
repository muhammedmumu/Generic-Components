import React from 'react';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { rows } from '../../Mock/mock.js';
import { useTableConfig } from '../../Hooks/useTableConfig.jsx';
import Header from '../../Components/Header/Header.jsx';
import AllinOne from '../../Components/Gentric/AllinOne.jsx';
import GridTable from '../../Components/Tables/GridTable.jsx';
import Footer from '../../Components/Footer/Fotter.jsx';
import Buttons from '../../Components/Button/Button.jsx';

export default function ActionPlanSummary() {
  const { config, columns, actions } = useTableConfig(5);
  const fotter = (<Footer>
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
  </Footer>);

  if (!config) return null;

  return (
    <AllinOne fotter={fotter}>
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
    </AllinOne >
  );
}
