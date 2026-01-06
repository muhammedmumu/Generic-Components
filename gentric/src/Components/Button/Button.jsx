import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
const Buttons = ({
  label,
  onClick,
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  startIcon = null,
  endIcon = null,
  className = '',
  ...props
}) => {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {label}
    </Button>
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
};

export default Buttons;