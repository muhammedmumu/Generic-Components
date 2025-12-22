import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PropTypes } from "prop-types";
import useDateHook from "../hook/useDate";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";

export default function MuiDatePicker(props) {
  const {
    locale = "en",
    MuiPickersUtilsProviderProps,
    selectedDate,
    handleDateChange,
    maxDate,
    minDate,
    defaultValue,
    label,
    isReadOnly,
    autoOk,
    maxDateMessage,
    closeOnDaySelect,
    inputFormat,
    placeholder,
    inputProps,
    margin,
    inputStyles,
    styles,
    invalidDateMessage,
    ...rest
  } = props;
  const { value, setvalue, handleChange } = useDateHook({
    selectedDate,
    handleDateChange,
    defaultValue,
  });

  // To Reset the date value on ui date picker
  React.useEffect(() => {
    selectedDate == null ? setvalue(null) : setvalue(moment(selectedDate));
  }, [selectedDate]);

  const normalize = (d) => {
    if (!d) return null;
    if (moment.isMoment(d)) return d;
    return moment(d);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        value={normalize(value)}
        onChange={(newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
        )}
        maxDate={normalize(maxDate)}
        minDate={normalize(minDate)}
        placeholder={placeholder}
        closeOnDaySelect={closeOnDaySelect}
        format={inputFormat}
        readOnly={isReadOnly}
        autoOk={autoOk}
        invalidDateMessage={invalidDateMessage}
        fullWidth
        margin={margin}
        maxDateMessage={maxDateMessage}
        inputProps={{
          readOnly: false,
          ...inputProps,
        }}
        inputStyles={{
          cursor: "pointer",
          ...inputStyles,
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
}

MuiDatePicker.propTypes = {
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.node,
  label: PropTypes.string,
  helperText: PropTypes.string,
  locale: PropTypes.string,
  description: PropTypes.node,
  handleDateChange: PropTypes.func,
  maxDate: PropTypes.string,
  closeOnDaySelect: PropTypes.bool,
};

MuiDatePicker.defaultProps = {
  maxDateMessage: null,
  closeOnDaySelect: true,
  autoOk: true,
  inputFormat: " MMM DD, YYYY",
  placeholder: "MMM DD YYYY",
  invalidDateMessage: "",
  margin: "normal",
  label: "Select Date",
};
