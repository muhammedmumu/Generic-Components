import React from "react";
import PropTypes from "prop-types";
import LoadingButton from "@mui/lab/LoadingButton";

const LoadingButtonComp = (props) => {
  const { variant, label, style, ...rest } = props;
  return (
    <LoadingButton
      loading
      loadingPosition={label ? "start" : "center"}
      variant={variant}
      sx={{
        ...style,
      }}
      {...rest}
    >
      {label}
    </LoadingButton>
  );
};

LoadingButtonComp.propTypes = {
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
};

LoadingButtonComp.defaultProp = {
  variant: "contained",
  color: "primary",
  style: {
    height: "30px",
  },
};
export default LoadingButtonComp;
