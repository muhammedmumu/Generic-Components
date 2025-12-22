import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import ColorPicker from "./index";
import useFieldApi from "../hooks/use-field-api";
import { validationError } from "../utils/helpers";
import FormFieldGrid from "../hoc/form-field-grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ColorField(props) {
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
    FormFieldGridProps,
    ...rest
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);

  const classes = useStyles();

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <ColorPicker
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
        label={label}
        placeholder={placeholder}
        required={isRequired}
        inputProps={{
          readOnly: isReadOnly,
          ...inputProps,
        }}
        {...rest}
      />
    </FormFieldGrid>
  );
}
