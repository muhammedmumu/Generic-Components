import React from 'react';
import Box from '@mui/material/Box';
import Buttons from '../Button/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Footer = ({ children }) => {
  // // Icon mapping for dynamic rendering
  // const iconMap = {
  //   Download: <DownloadIcon />,
  //   Print: <PrintIcon />,
  //   Share: <ShareIcon />,
  //   Save: <SaveIcon />,
  //   Delete: <DeleteIcon />,
  //   Send: <SendIcon />,
  //   Edit: <EditIcon />,
  //   View: <VisibilityIcon />,
  // };

  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', padding: 2 }}>
      {children}
    </Box>
  );
};

export default Footer;