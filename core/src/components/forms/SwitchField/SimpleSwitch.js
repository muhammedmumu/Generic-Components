import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";

export default function MuiSwitch({
  isChecked,
  onChange,
  defaultState,
  disabled,
  value,
  inputProps,
  onText,
  offText,
  textStyles,
  spacing,
  ...rest
}) {
  return (
    <Box
      sx={{
        paddingRight: 1,
        "& div.checker ": {
          display: "none",
        },
      }}
    >
      <Stack direction="row" spacing={spacing} alignItems="center" >
        {offText && (
          <Typography
            fontWeight={!isChecked ? "fontWeightBold" : "fontWeightMedium"}
            sx={{
              ...textStyles,
            }}
          >
            {offText}
          </Typography>
        )}
        <Switch
          defaultValue={isChecked}
          onChange={onChange}
          disabled={disabled}
          inputProps={{ ...inputProps }}
          {...rest}
        />
        {onText && (
          <Typography
            fontWeight={isChecked ? "fontWeightBold" : "fontWeightMedium"}
            sx={{ ...textStyles }}
          >
            {onText}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

MuiSwitch.prototype = {
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onText: PropTypes.string,
  offText: PropTypes.string,
  onChange: PropTypes.func,
};
MuiSwitch.defaultProps = {
  disabled: false,
  spacing: 1
};
