import React from "react";
import useFieldApi from "../../hooks/use-field-api";
import MuiTextField from "@mui/material/TextField";
import { validationError } from "../../utils/helpers";
import FormFieldGrid from "../../hoc/form-field-grid";
import Editor from "./Editor";

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
    styles,
    ...rest
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);

  // toolbar customisation options
  const toolbarOptions = [
    ["bold", "italic", "strike", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, "blockquote"],
    ["image", "link"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ align: [] }],
  ];

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <Editor
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
        inputProps={{
          readOnly: isReadOnly,
          ...inputProps,
        }}
        modules={{
          toolbar: toolbarOptions,
        }}
        {...rest}
      />
    </FormFieldGrid>
  );
}
