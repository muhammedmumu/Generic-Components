import React from 'react';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { rows } from '../Mock/mock.js';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import Header from '../Components/Header/Header.jsx';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import GridTable from '../Components/Tables/GridTable.jsx';
import Footer from '../Components/Footer/Fotter.jsx';
import Buttons from '../Components/Button/Button.jsx';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';


export default function TeamMemberRank() {
  const { config, columns, actions } = useTableConfig(1);
  const [textField1, setTextField1] = React.useState('');
  const [autocomplete1, setAutocomplete1] = React.useState('');
  const [textField3, setTextField3] = React.useState('');
  const [autocomplete2, setAutocomplete2] = React.useState('');

  const filterFields = [
    {
      // Date filter
      type: 'date',
      label: '',
      value: textField1,
      onChange: (e) => setTextField1(e.target.value),
      fullWidth: false,
    },

    // 🔹 Static label should NOT be part of input config
    {
      type: 'label',
      label: 'Response Cut-Off:',
    },

    {
      // Main response filter
      type: 'autocomplete',
      placeholder: 'All Responses',
      value: autocomplete1,
      onChange: (_, newValue) => setAutocomplete1(newValue),
      fullWidth: false,
    },

    {
      // Status filter
      type: 'autocomplete',
      placeholder: 'All',
      value: textField3,
      onChange: (_, newValue) => setTextField3(newValue),
      fullWidth: false,
    },

    {
      // Category filter
      type: 'autocomplete',
      placeholder: 'Leasing',
      value: autocomplete2,
      onChange: (_, newValue) => setAutocomplete2(newValue),
      fullWidth: false,
    },
  ];

  const footer = (
    <Footer>
      <Buttons
        label="Download all data"
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={() => console.log('Download all data')}
      />
      <Buttons
        label=">View all"
        variant="outlined"
        onClick={() => console.log('View all')}
        sx={{ color: 'primary.main', borderColor: 'primary.main' }}
      />
    </Footer>
  );

  if (!config) return null;

  return (
    <AllinOne footer={footer}>
      <Box className="gentric-header">
        <Header
          title={config?.title}
          titleIcon={<StarsOutlinedIcon />}
          textFields={filterFields}
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
        paginationMode={config?.pagination}
      />
    </AllinOne>
  );
}
