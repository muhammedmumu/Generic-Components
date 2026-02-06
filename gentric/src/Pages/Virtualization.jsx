import React from 'react';
import Box from '@mui/material/Box';
import { rows, columns } from '../Mock/mock.js';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Headers from '../Components/Header/Header.jsx';
import Tables from '../Components/Tables/GridTable.jsx';
import StorageIcon from '@mui/icons-material/Storage';

export default function VirtualizationPage() {
  return (
    <AllinOne>
      <Box className="gentric-header">
        <Headers
          title="Virtualization Table"
          actions={[]}
          textFields={[]}
          titleIcon={<StorageIcon />}
        />
      </Box>

      <Tables
        rows={rows}
        columns={columns}
        fields="All"
        paginationMode={false}
        checkBox={true}
        filtering={false}
        virtualization={true}
        sorting={true}
        sortMode="server"
      />
    </AllinOne>
  );
}
