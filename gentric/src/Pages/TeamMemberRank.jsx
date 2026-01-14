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

  const textFields = [
    {
      type: 'date',
      label: "",
      value: textField1,
      onChange: (e) => setTextField1(e.target.value),


    },
    {
      type: 'label',
      label: 'Response Cut-Off:',
      sx: {
        fontWeight: 600,
        fontSize: '0.95rem',
        color: '#667085',
        display: 'flex',
        alignItems: 'center'
      }
    },
    {
      type: 'autocomplete',
      label: 'All Responses',
      placeholder: 'All Responses',
      value: autocomplete1,
      onChange: (event, newValue) => setAutocomplete1(newValue),
      fullWidth: true,
    },
    {
      type: 'autocomplete',
      label: 'All',
      placeholder: 'All',
      value: textField3,
      onChange: (event, newValue) => setTextField3(newValue),
      fullWidth: true,

    },
    {
      type: 'autocomplete',
      label: 'Leasing',
      placeholder: 'Leasing',
      value: autocomplete2,
      onChange: (event, newValue) => setAutocomplete2(newValue),
      fullWidth: true,
    }
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
        label="View all"
        variant="outlined"
        onClick={() => console.log('View all')}
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
          textFields={textFields}
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
    </AllinOne>
  );
}
