import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Buttons = ({
  label,
  onClick,
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  startIcon = null,
  endIcon = null,
  className = '',
  fieldColor,
  ...props
}) => {
  return (
    <Box sx={{ m: 1 }}>
      <Button
        className={className}
        variant={variant}
        size={size}
        onClick={onClick}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        sx={{
          textTransform: 'none',
          color: fieldColor,
        }}
        {...props}
      >
        {label}
      </Button>
    </Box>
  );
};

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  className: PropTypes.string,
  fieldColor: PropTypes.string,
};

export default Buttons;