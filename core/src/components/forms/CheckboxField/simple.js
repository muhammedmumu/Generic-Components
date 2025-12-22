import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

export default function CheckboxesGroup({
  options,
  label,
  helperText,
  labelStyles,
}) {
  const [state, setState] = React.useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const is_checked = event.target.checked;
    const name = event.target.name;
    if (is_checked) {
      const c_state = [...state, name];
      setState([...c_state, name]);
    } else {
      const un_state = state.filter((item) => item != name);
      setState([...un_state]);
    }
  };

  return (
    <div
      sx={{
        display: "flex",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <FormControl
        component="fieldset"
        sx={theme => ({
          margin: theme.spacing(3)
        })}
      >
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup>
          {options.map((item) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.indexOf(item.label) >= 0}
                    onChange={handleChange}
                    name={item.label}
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
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}
