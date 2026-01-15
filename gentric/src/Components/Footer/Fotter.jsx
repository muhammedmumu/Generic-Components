import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Footer = ({ children }) => {
  return (
    <Box
      className="gentric-footer"
    >
      {children}
    </Box >
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;