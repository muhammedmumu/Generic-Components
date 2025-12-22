import React from "react";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import DownloadIcon from "@mui/icons-material/Download";

const IconButtonBase = (props) => {
  const { variant, label, color, icon, ...rest } = props;
  return (
    <IconButton variant={variant} color={color} {...rest}>
      {icon ? (
        icon
      ) : (
        <DownloadIcon
          sx={theme => ({
            mt: 0,
            color: theme.palette.lightBlue[800]
          })}
        />
      )}
    </IconButton>
  );
};

IconButtonBase.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node
};

export default IconButtonBase;
