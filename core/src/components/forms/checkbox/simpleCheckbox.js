import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import { Box, Grid, Typography } from "@mui/material";

import useCheckboxHook from "./useCheckbox";
export default function Checkboxes(props) {
  const {
    label,
    value,
    isChecked,
    handleChange,
    additionalStyles,
    labelStyles,
    LabelfontSize,
    size,
    whiteSpace,
    LabelfontWeight,
    containerStyles,
    ...rest
  } = props;
  const {} = useCheckboxHook({ isChecked });
  return (
    <Grid xs={12} container direction="row" spacing={0} alignItems="center" sx={{...containerStyles}}>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={isChecked}
          value={value}
          onClick={handleChange}
          style={{ ...additionalStyles }}
          size={size}
          {...rest}
        />
        <Typography
          fontWeight={LabelfontWeight}
          sx={{
            fontSize: LabelfontSize,
            whiteSpace: whiteSpace,
            ...labelStyles,
          }}
        >
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
}

Checkboxes.propTypes = {
  label: PropTypes.string,
  LabelfontSize: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
Checkboxes.defaultProps = {
  whiteSpace: "unset",
  LabelfontWeight: "fontWeightMedium",
  LabelfontSize: 12,
};
