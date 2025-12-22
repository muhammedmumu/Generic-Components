import React from "react";
import PropTypes from "prop-types";
import { TimePicker as MUITimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { meta, input } from "../../prop-types-templates";
import useFieldApi from "../../hooks/use-field-api";
import { validationError } from "../../utils/helpers";
import FormFieldGrid from "../../hoc/form-field-grid";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";

const TimePicker = (props) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    disablePast,
    meta,
    FormFieldGridProps,
    closeOnDaySelect,
    clearable,
    inputStyles,
    autoOk,
    inputFormat,
    variant,
    ...TimePickerProps
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MUITimePicker
          margin="normal"
          label={label}
          disabled={isDisabled || isReadOnly}
          placeholder={placeholder}
          required={isRequired}
          readOnly={isReadOnly}
          renderInput={(params) => (
            <TextField
              {...input}
              {...params}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              autoComplete="off"
              variant={variant}
              error={!!invalid}
              helperText={
                invalid ||
                ((meta.touched || validateOnMount) && meta.warning) ||
                helperText ||
                description
              }
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 1,
                height: 35,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3px",
                },
                ...inputStyles,
              }}
              {...TimePickerProps}
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                  placeholder: placeholder,
                }
              }} />
          )}
          onChange={(time) => {
            console.log('asdf' , time)
            input.onChange(time);
          }}
          value={moment(input.value) || null}
          {...TimePickerProps}
        />
      </LocalizationProvider>
    </FormFieldGrid>
  );
};

TimePicker.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.node,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  locale: PropTypes.string,
  description: PropTypes.node,
  FormFieldGridProps: PropTypes.object,
  MuiPickersUtilsProviderProps: PropTypes.object,
  DatePickerProps: PropTypes.object,
  variant: PropTypes.string,
};

TimePicker.defaultProps = {
  FormFieldGridProps: {},
  MuiPickersUtilsProviderProps: {},
  DatePickerProps: {},
  closeOnDaySelect: true,
  autoOk: true,
  clearable: true,
  variant: "outlined",
};

export default TimePicker;
