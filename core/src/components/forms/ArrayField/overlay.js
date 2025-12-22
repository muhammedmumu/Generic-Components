import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, FormControl, FormHelperText } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

import useFieldApi from "../hooks/use-is-mounted";
import { FieldArray } from "react-final-form-arrays";

import FormFieldGrid from "../hoc/form-field-grid";
import clsx from "clsx";

const useFielArrayStyles = makeStyles({
  formControl: {
    width: "100%",
  },
  centerText: {
    display: "flex",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  buttonsToEnd: {
    display: "flex",
    justifyContent: "flex-end",
  },
  header: {},
  mainContainer: {
    marginTop: '16px',
  },
  buttonTransform: {
    position: "relative",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#0F5185",
    color: "white",
    textTransform: "inherit",
  },
  label: {
    flexGrow: 1,
  },
  fieldArrayGroup: {
    marginBottom: 32,
  },
  paper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    marginTop: "1rem",
  },
});

const ArrayItem = ({
  fields,
  fieldIndex,
  name,
  remove,
  length,
  minItems,
  removeLabel,
  Component,
  ...rest
}) => {
  const classes = useFielArrayStyles();

  return (
    <Component
      name={name}
      fields={fields}
      index={fieldIndex}
      length={length}
      remove={remove}
      disabled={length <= minItems}
      {...rest}
    />
  );
};

ArrayItem.propTypes = {
  name: PropTypes.string,
  fieldIndex: PropTypes.number.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object),
  remove: PropTypes.func.isRequired,
  length: PropTypes.number,
  minItems: PropTypes.number,
  removeLabel: PropTypes.node.isRequired,
};

const defaultButtonLabels = {
  add: "ADD",
  remove: "REMOVE",
};

const initialState = {
  index: 0,
  history: [],
};

export const reducer = (state, { type, action }) => {
  switch (type) {
    case "redo":
      return {
        ...state,
        index: state.index + 1,
      };
    case "action":
      return {
        index: state.index + 1,
        history: [...state.history.slice(0, state.index), action],
      };
    case "undo":
      return {
        ...state,
        index: state.index - 1,
      };
    case "resetHistory":
      return {
        ...state,
        history: state.history.slice(0, state.index),
      };
    default:
      return state;
  }
};

const DynamicArray = ({ ...props }) => {
  const {
    arrayValidator,
    label,
    description,
    fields: formFields,
    defaultItem,
    meta,
    minItems,
    maxItems,
    noItemsMessage,
    FormFieldGridProps,
    FormControlProps,
    buttonLabels,
    Component,
    input,
    Title,
    children,
    CompProps,
    only = false,

    ...rest
  } = useFieldApi(props);
  const [state, dispatch] = useReducer(reducer, initialState);

  const combinedButtonLabels = {
    ...defaultButtonLabels,
    ...buttonLabels,
  };

  const classes = useFielArrayStyles();

  const { dirty, submitFailed, error, submitError } = meta;
  const isError = (dirty || submitFailed) && error && typeof error === "string";

  return (
    <FormFieldGrid
      {...FormFieldGridProps}
      className={clsx(classes.fieldArrayGroup, FormFieldGridProps.classname)}
    >
      <FormControl
        component="fieldset"
        error={isError || submitError}
        {...FormControlProps}
        className={clsx(classes.formControl, FormControlProps.className)}
      >
        <FieldArray
          key={input.name}
          name={input.name}
          validate={arrayValidator}
        >
          {({ fields, ...rest }) => {
            const { map, value = [], push, remove } = fields;
            const pushWrapper = () => {
              dispatch({ type: "resetHistory" });
              push(defaultItem);
            };

            const removeWrapper = (index) => {
              dispatch({
                type: "action",
                action: { action: "remove", value: value[index] },
              });
              remove(index);
            };

            const undo = () => {
              push(state.history[state.index - 1].value);
              dispatch({ type: "undo" });
            };

            const redo = () => {
              remove(value.length - 1);
              dispatch({ type: "redo" });
            };

            return (
              <Grid container direction="column" spacing={0}>
                <Grid item>
                  {label && <Typography variant="h6">{label}</Typography>}
                </Grid>

                {value.length <= 0 ? (
                  <Grid item xs={12}>
                    <Typography gutterBottom className={classes.centerText}>
                      {noItemsMessage}
                    </Typography>
                  </Grid>
                ) : (
                  <>
                    {map((name, index) => (
                      <ArrayItem
                        key={name}
                        fields={formFields}
                        name={name}
                        fieldIndex={index}
                        remove={removeWrapper}
                        length={value.length}
                        Component={Component}
                        minItems={minItems}
                        value={value}
                        removeLabel={combinedButtonLabels.remove}
                        {...CompProps}
                      />
                    ))}
                  </>
                )}
                <Grid item className={classes.menuButton}>
                  {children &&
                    children({
                      onAdd: (item) => {
                        push(item);
                      },
                      onRemove: (index) => remove(index),
                      disabled: value.length >= maxItems,
                      value: value,
                    })}
                </Grid>

                {(isError || submitError) && (
                  <Grid item xs={12}>
                    <FormHelperText>{error || submitError}</FormHelperText>
                  </Grid>
                )}
              </Grid>
            );
          }}
        </FieldArray>
      </FormControl>
    </FormFieldGrid>
  );
};

DynamicArray.propTypes = {
  label: PropTypes.node,
  description: PropTypes.node,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultItem: PropTypes.any,
  minItems: PropTypes.number,
  maxItems: PropTypes.number,
  noItemsMessage: PropTypes.node,
  FormControlProps: PropTypes.object,
  FormFieldGridProps: PropTypes.object,
  buttonLabels: PropTypes.object,
};

DynamicArray.defaultProps = {
  maxItems: Infinity,
  minItems: 0,
  noItemsMessage: "No items added",
  FormControlProps: {},
  FormFieldGridProps: {},
};

export default DynamicArray;
