import React from "react";
import BaseButton from "@mui/material/Button";
import PropTypes from "prop-types";

const ContainedButton = (props) => {
  const { variant, label, color, ...rest } = props;
  return (
    <BaseButton variant={variant} color={color} {...rest}>
      {label}
    </BaseButton>
  );
};

ContainedButton.propTypes = {
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
};

ContainedButton.defaultProp = {
  variant: "contained",
  color: "primary",
};
export default ContainedButton;
