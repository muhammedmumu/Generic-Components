import React, { useState } from "react";
import PropTypes from "prop-types";
import { DEFAULT_CONVERTER, converters } from "./transformers";
import PickerDialog from "./PickerDialog";
import makeStyles from '@mui/styles/makeStyles';
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const useStyles = makeStyles((theme) => ({
  palette: {
    padding: theme.spacing(1),
    border: `1px solid #707070`,
    borderRadius: theme.spacing(0.5),
  },
}));

const Palette = ({ value }) => {
  const classes = useStyles();
  return (
    <span className={classes.palette} style={{ backgroundColor: value }}></span>
  );
};

const ColorPicker = ({
  convert,
  value = "#fff",
  onChange,
  label,
  helperText,
  id,
  name,
  error,
  required,
  color,
  variant,
  ...custom
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const classes = useStyles();

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  return <>
    <FormControl
      fullWidth
      error={error}
      required={required}
      color={color}
      variant={variant}
    >
      {label && (
        <InputLabel
          htmlFor={id}
          id={inputLabelId}
          shrink={true}
          variant="standard"
        >
          {label}
        </InputLabel>
      )}
      <Input
        id={`color-picker-${name}`}
        // type={"password"}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={() => setShowPicker(true)}

        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="color picker"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
              onClick={() => setShowPicker(true)}
              edge="end"
              size="large">
              <Palette value={value} />
            </IconButton>
          </InputAdornment>
        }
      />
      {helperText && (
        <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
      )}
    </FormControl>

    {showPicker && (
      <PickerDialog
        value={value}
        onClick={() => {
          setShowPicker(false);
          onChange(value);
        }}
        onChange={(c) => {
          const newValue = converters[convert](c);
          onChange(newValue);
        }}
      />
    )}
  </>;
};

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  convert: PropTypes.oneOf(Object.keys(converters)),
  name: PropTypes.string,
  id: PropTypes.string,
  hintText: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  floatingLabelText: PropTypes.string,
};

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER,
};

export default ColorPicker;
