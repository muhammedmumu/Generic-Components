import React from "react";
import useFieldApi from "../hooks/use-field-api";
import MuiTextField from "@mui/material/TextField";
import { validationError } from "../utils/helpers";
import FormFieldGrid from "../hoc/form-field-grid";
import Editor from "./editor";

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
  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'},
      {label: 'Strikethrough', style: 'STRIKETHROUGH'},
      {label: 'Monospace', style: 'CODE'},
      {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'},
      {label: 'Blockquote', style: 'blockquote'}
    ]
  };

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
        {...rest}
        toolbarConfig={toolbarConfig}
      />
    </FormFieldGrid>
  );
}
