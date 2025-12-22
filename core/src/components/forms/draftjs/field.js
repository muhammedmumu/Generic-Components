import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import useFieldApi from "components/forms/hooks/use-field-api";
import { validationError } from "components/forms/utils/helpers";
import FormFieldGrid from "components/forms/hoc/form-field-grid";
import Draftjs from "./index";

const useStyles = makeStyles((theme) => ({
  helpTextEditor: {
    color: "rgba(0, 0, 0, 0.54)",
    margin: "0",
    fontSize: "0.75rem",
    marginTop: "3px",
    textAlign: "left",
    fontFamily: "inherit",
    fontWeight: "400",
    lineHeight: "1.66",
  },
  error: {
    color: "#f44336",
  },
}));

export default function TextFields({
  defaultHtmlValue,
  element,
  placeholder,
  ...props
}) {
  const { input, meta, validateOnMount, FormFieldGridProps } = useFieldApi(
    props
  );
  const invalid = validationError(meta, validateOnMount);

  const classes = useStyles();

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <Draftjs
        input={input}
        defaultHtmlValue={defaultHtmlValue}
        element={element}
        error={!!invalid}
        placeholder={placeholder}
      />
      {invalid && (
        <p className={classes.helpTextEditor + " " + classes.error}>
          {meta.error}
        </p>
      )}
    </FormFieldGrid>
  );
}
