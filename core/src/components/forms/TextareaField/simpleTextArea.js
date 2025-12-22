import * as React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

export default function TextFieldArea(props) {
  const { label, variant, helperText, placeHolder, ...rest } = props;
  return (
    <TextField
      label={label}
      variant={variant}
      helperText={helperText}
      placeholder={placeHolder}
      fullWidth
      multiline
      {...rest}
    />
  );
}
TextFieldArea.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  helperText: PropTypes.string,
  placeHolder: PropTypes.string,
};
