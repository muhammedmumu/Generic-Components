import React from "react";
import PropTypes from "prop-types";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

import { meta, input } from "../../prop-types-templates";
import useFieldApi from "../../hooks/use-field-api";
import { validationError } from "../../utils/helpers";
import FormFieldGrid from "../../hoc/form-field-grid";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";

const DatePicker = (props) => {
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
    disableFuture,
    formateDateOnClick,
    dateFormat,
    disablePortal,
    minDate,
    ...DatePickerProps
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount); 

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MUIDatePicker
          margin="normal"
          label={label}
          disabled={isDisabled || isReadOnly}
          placeholder={placeholder}
          required={isRequired}
          readOnly={isReadOnly}
          disablePast={disablePast}
          disableFuture={disableFuture}
          sx={{
            color: "red",
          }}
          renderInput={(params) => (
            <TextField
              {...input}
              {...params}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              variant={variant}
              autoComplete="off"
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
                borderRadius: 0,
                height: 35,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3px",
                },
                ...inputStyles,
              }}
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                  placeholder: placeholder,
                }
              }}
            />
          )}
          onChange={(date) => {
            if (formateDateOnClick) {
              const formattedDate = moment(date).format(dateFormat);
              input.onChange(formattedDate);
              return;
            }
            input.onChange(date);
          }}
         value={input.value ? moment(input.value) : null}
         minDate={moment(minDate)}
          closeOnDaySelect={true}
          inputFormat={inputFormat}
          keyboard={true}
          clearable={false}
          PopperProps={{
            disablePortal: disablePortal,
          }}
          {...DatePickerProps}
        />
      </LocalizationProvider>
    </FormFieldGrid>
  );
};

DatePicker.propTypes = {
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
  disablePortal: PropTypes.bool,
  minDate: PropTypes.string
};

DatePicker.defaultProps = {
  FormFieldGridProps: {},
  MuiPickersUtilsProviderProps: {},
  DatePickerProps: {},
  closeOnDaySelect: true,
  autoOk: true,
  clearable: true,
  inputFormat: " MMM DD, YYYY",
  placeholder: "MM DD YYYY",
  variant: "outlined",
  formateDateOnClick: false,
  dateFormat: "YYYY-MM-DD",
  disablePortal: false,
  minDate: "1900-01-01"
};

export default DatePicker;
