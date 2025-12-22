import React from "react";
import PropTypes from "prop-types";

import { validationError } from "../utils/helpers";
import FormFieldGrid from "../hoc/form-field-grid";
import SelectDrop from "./select";
import parseInternalValue from "./select/parse-internal-value";
import useFieldApi from "../hooks/use-field-api";
import { TextField, CircularProgress } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Autocomplete from '@mui/material/Autocomplete';
import { meta } from "../prop-types-templates";

export const getOptionLabel = (option, options) => {
  if (typeof option === "undefined") {
    return "";
  }

  if (option === "") {
    return "";
  }

  if (Array.isArray(option) && option.length === 0) {
    return "";
  }

  if (typeof option === "object") {
    return option.label;
  }

  const item = options.find(({ value }) => value === option);
  return (item && item.label) || "";
};

/**
 * Function that creates correct DDF select value format
 * @param {Object|Array} option currently selected values
 * @param {Boolean} isMulti multiple select flag
 * @returns {Object|Array<Object>}
 */
export const createValue = (option, isMulti) => {
  if (isMulti) {
    return Array.isArray(option)
      ? option.map((item) =>
          typeof item === "object" ? item : { value: item }
        )
      : option;
  }

  return option;
};

const InternalSelect = ({
  value,
  options,
  label,
  helperText,
  validateOnMount,
  meta,
  isSearchable,
  description,
  classNamePrefix,
  isMulti,
  placeholder,
  onInputChange,
  isFetching,
  noOptionsMessage,
  hideSelectedOptions,
  closeMenuOnSelect,
  required,
  onChange,
  onFocus,
  onBlur,
  FormFieldGridProps,
  TextFieldProps: { inputProps: textFieldInputProps, ...TextFieldProps },
  inputProps,
  isClearable,
  isDisabled,
  hideOptions,
  disablePortal,
  variant,
  ...rest
}) => {
  const invalid = validationError(meta, validateOnMount);
  const internalValue = parseInternalValue(value, isMulti);

  // remove selected value from dropdown option 
  const filteredList = React.useMemo(() => {
    if (!options) return [];
  
    return Array.isArray(internalValue) 
      ? options.filter(
          (property) => !internalValue?.includes(property.value)
        )
      : options;
  }, [options, internalValue]);

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <Autocomplete
        filterSelectedOptions={hideSelectedOptions}
        disabled={isDisabled}
        disableClearable={isClearable}
        disablePortal={disablePortal}
        popupIcon={
          isFetching ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <ArrowDropDownIcon />
          )
        }

        fullWidth
        {...rest}
        renderInput={(params) => (
          <TextField
            variant={variant}
            onFocus={onFocus}
            onBlur={onBlur}
            {...params}
            required={required}
            error={!!invalid}
            helperText={
              invalid ||
              ((meta.touched || validateOnMount) && meta.warning) ||
              helperText ||
              description
            }
            label={label}
            {...TextFieldProps}
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                ...textFieldInputProps,
                ...inputProps,
                readOnly: !isSearchable,

                placeholder:
                  !internalValue || internalValue.length === 0
                    ? placeholder
                    : undefined,            },

              inputLabel: {
                shrink: true,
              }
            }} />
        )}
        noOptionsText={noOptionsMessage()}
        onInputChange={(_event, value) => onInputChange(value)}
        options={hideOptions ? filteredList : options}
        multiple={isMulti}
        getOptionLabel={(option) => getOptionLabel(option, options)}
        value={typeof internalValue === "undefined" ? null : internalValue}
        onChange={(_event, option) => {
          onChange(createValue(option, isMulti));
        }}
        loading={isFetching}
      />
    </FormFieldGrid>
  );
};

InternalSelect.propTypes = {
  meta,
  placeholder: PropTypes.node,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  isSearchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.node.isRequired,
    })
  ).isRequired,
  description: PropTypes.node,
  FormFieldGridProps: PropTypes.object,
  value: PropTypes.any,
  isClearable: PropTypes.bool,
  classNamePrefix: PropTypes.string,
  isMulti: PropTypes.bool,
  loadingMessage: PropTypes.node,
  onInputChange: PropTypes.func,
  isFetching: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  hideSelectedOptions: PropTypes.bool,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  TextFieldProps: PropTypes.object,
  inputProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  variant: PropTypes.string
};

InternalSelect.defaultProps = {
  placeholder: "Please choose",
  FormFieldGridProps: {},
  TextFieldProps: {},
  inputProps: {},
  loadingText: "Loading...",
  variant: "standard"
};

const Select = (props) => {
  const {
    input,
    isRequired,
    isDisabled,
    isReadOnly,
    disabled,
    multiple,
    isMulti,
    isClearable,
    disableClearable,
    loadingMessage,
    loadingText,
    noOptionsMessage,
    noOptionsText,
    closeMenuOnSelect,
    ...rest
  } = useFieldApi(props);
  return (
    <SelectDrop
      {...input}
      isMulti={multiple || isMulti}
      required={isRequired}
      disabled={isDisabled || isReadOnly || disabled}
      disableClearable={!isClearable || disableClearable}
      loadingText={loadingMessage || loadingText}
      noOptionsMessage={noOptionsMessage || noOptionsText}
      {...rest}
      SelectComponent={InternalSelect}
    />
  );
};

export default Select;
