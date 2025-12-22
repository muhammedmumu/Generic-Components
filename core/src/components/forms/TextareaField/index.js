import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@mui/material';

import {meta,input} from "../prop-types-templates"
import useFieldApi from "../hooks/use-field-api";
import { validationError } from "../utils/helpers";
import FormFieldGrid from "../hoc/form-field-grid";

const Textarea = (props) => {
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
    FormFieldGridProps,
    inputProps,
    ...rest
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <MuiTextField
        {...input}
        fullWidth
        error={!!invalid}
        helperText={invalid || ((meta.touched || validateOnMount) && meta.warning) || helperText || description}
        disabled={isDisabled}
        label={label}
        placeholder={placeholder}
        required={isRequired}
        {...rest}
        multiline
        slotProps={{
          htmlInput: {
            readOnly: isReadOnly,
            ...inputProps
          }
        }} />
    </FormFieldGrid>
  );
};

Textarea.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.node,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  description: PropTypes.node,
  FormFieldGridProps: PropTypes.object,
  inputProps: PropTypes.object
};

Textarea.defaultProps = {
  FormFieldGridProps: {},
  inputProps: {}
};

export default Textarea;
