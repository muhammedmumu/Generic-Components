import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MUICheckbox, FormControl, FormControlLabel, FormHelperText, FormGroup, FormLabel } from '@mui/material';
import MultipleChoiceList from './multipleField';
import {meta,input} from "../prop-types-templates"
import useFieldApi from "../hooks/use-field-api";
import { validationError } from "../utils/helpers";
import FormFieldGrid from "../hoc/form-field-grid";

export const SingleCheckbox = (props) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    FormFieldGridProps,
    FormControlProps,
    FormGroupProps,
    FormControlLabelProps,
    CheckboxProps,
    FormLabelProps,
    FormHelperTextProps,
    inputProps,
    startIcon,
    ...rest
  } = useFieldApi({
    ...props,
    type: 'checkbox'
  });
  const invalid = validationError(meta, validateOnMount);
  const text = invalid || ((meta.touched || validateOnMount) && meta.warning) || helperText || description;

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <FormControl required={isRequired} error={!!invalid} component="fieldset" {...FormControlProps}>
        <FormGroup {...FormGroupProps}>
          <FormControlLabel
            {...FormControlLabelProps}
            control={
              <MUICheckbox
                {...input}
                {...CheckboxProps}
                disabled={isDisabled || isReadOnly}
                value={input.name}
                inputProps={{
                  readOnly: isReadOnly,
                  ...inputProps
                }}
                {...rest}
              />
            }
            disabled={isDisabled || isReadOnly}
            label={<FormLabel {...FormLabelProps}>{startIcon && startIcon}{label}</FormLabel>}
            // label="End"
            // labelPlacement="end"
          />
          {text && <FormHelperText {...FormHelperTextProps}>{text}</FormHelperText>}
        </FormGroup>
      </FormControl>
    </FormFieldGrid>
  );
};

SingleCheckbox.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  description: PropTypes.node,
  validateOnMount: PropTypes.bool,
  FormFieldGridProps: PropTypes.object,
  FormControlProps: PropTypes.object,
  FormGroupProps: PropTypes.object,
  FormControlLabelProps: PropTypes.object,
  CheckboxProps: PropTypes.object,
  FormLabelProps: PropTypes.object,
  FormHelperTextProps: PropTypes.object
};

SingleCheckbox.defaultProps = {
  FormFieldGridProps: {},
  FormControlProps: {},
  FormGroupProps: {},
  FormControlLabelProps: {},
  CheckboxProps: {},
  FormLabelProps: {},
  FormHelperTextProps: {}
};

const Checkbox = ({ options, ...props }) => (options ? <MultipleChoiceList options={options} {...props} /> : <SingleCheckbox {...props} />);

Checkbox.propTypes = {
  options: PropTypes.array
};

export default Checkbox;