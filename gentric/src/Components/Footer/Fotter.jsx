
import Box from '@mui/material/Box';


const Footer = ({ children }) => {


  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
      {children}
    </Box>
  );
};

export default Footer;