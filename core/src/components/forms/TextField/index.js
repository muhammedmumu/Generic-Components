import React from "react";
import useFieldApi from "../hooks/use-field-api";
import MuiTextField from "@mui/material/TextField";
import { validationError } from "../utils/helpers";
import FormFieldGrid from "../hoc/form-field-grid";

export default function TextFields(props) {
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
    meta,
    inputProps,
    focused = "false",
    FormFieldGridProps,
    endAdornment,
    styles,
    ...rest
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <MuiTextField
        {...input}
        fullWidth
        error={!!invalid}
        helperText={
          invalid ||
          ((meta.touched || validateOnMount) && meta.warning) ||
          helperText ||
          description
        }
        disabled={isDisabled}
        autoFocus={focused}
        label={label}
        placeholder={placeholder}
        required={isRequired}
        {...rest}
        slotProps={{
          input: {
            readOnly: isReadOnly,
            ...inputProps,
          }
        }} />
    </FormFieldGrid>
  );
}
