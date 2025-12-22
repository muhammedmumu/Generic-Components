import React from "react";
import Radio from "@mui/material/Radio";
import makeStyles from "@mui/styles/makeStyles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { Box, Typography } from "@mui/material";

export default function RadioButtonsGroup({
  options,
  label,
  helperText,
  labelStyles,
  onClick,
  margin,
  containerStyles,
  parentStyles,
  checked
}) {
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ display: "flex",...parentStyles }} onClick={(e) => e.stopPropagation()}>
      <FormControl
        component="fieldset"
        sx={[ margin ? {
          margin: margin
        } : {
          margin: (theme) => theme.spacing(3)
        },
        {
          ...containerStyles
        },
      ]}
      >
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={label}
          name={label}
          value={value}
          row
          onChange={handleChange}
        >
          {options.map((item) => {
            return (
              <FormControlLabel
                control={
                  <Radio
                    value={item.label}
                    onChange={handleChange}
                    name={item.label}
                    onClick={() => onClick(item)}
                    checked={item.value == checked}
                  />
                }
                label={
                  <Typography variant="subtitle3" sx={{ ...labelStyles }}>
                    {item.label}
                  </Typography>
                }
              />
            );
          })}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
