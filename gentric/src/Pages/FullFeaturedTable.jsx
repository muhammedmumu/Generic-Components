import React from 'react';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { rows as baseRows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Headers from '../Components/Header/Header.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import Footer from '../Components/Footer/Fotter.jsx';
import Buttons from '../Components/Button/Button.jsx';

export default function FullFeaturedTable() {
  const { config, columns, actions, } = useTableConfig(0);

  if (!config) return null;
  const footer = (<Footer className="gentric-footer">
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

  return (
    <AllinOne footer={footer}>
      <Box>
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
    </AllinOne>
  );
}
