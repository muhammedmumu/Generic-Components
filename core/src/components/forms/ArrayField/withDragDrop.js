import React, { useReducer } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import makeStyles from '@mui/styles/makeStyles';
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";

import useFieldApi from "../hooks/use-field-api";
import { FieldArray } from "react-final-form-arrays";
import useFormApi from "../hooks/use-form-api";

import FormFieldGrid from "../hoc/form-field-grid";
import clsx from "clsx";
import TextField from "../TextField";

const useFielArrayStyles = makeStyles({
  formControl: {
    width: "100%",
  },
  centerText: {
    display: "flex",
    justifyContent: "center",
  },
  buttonsToEnd: {
    display: "flex",
    justifyContent: "flex-end",
  },
  header: {
    display: "flex",
  },
  label: {
    flexGrow: 1,
  },
  fieldArrayGroup: {
    marginBottom: 32,
    marginTop: 32,
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
  compProps,
  ...rest
}) => {
  // const { renderForm } = useFormApi();
  const classes = useFielArrayStyles();

  // const editedFields = fields.map((field, index) => {
  //   const computedName = field.name ? `${name}.${field.name}` : name;
  //   return { ...field, name: computedName, key: `${computedName}-${index}` };
  // });

  return (
    <Component
      name={name}
      fields={fields}
      index={fieldIndex}
      length={length}
      remove={remove}
      disabled={length <= minItems}
      {...compProps}
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

const makeOnDragEndFunction = (fields) => (result) => {
  // dropped outside the list
  if (!result.destination) {
    return;
  }
  fields.swap(result.source.index, result.destination.index);
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
    compProps,
    addButtonStyles,
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
          key={rest.input.name}
          name={rest.input.name}
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
              <Grid container spacing={2} direction="column">
                {description && (
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">{description}</Typography>
                  </Grid>
                )}

                {value.length <= 0 ? (
                  <Grid item xs={12}>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className={classes.centerText}
                    >
                      {noItemsMessage}
                    </Typography>
                  </Grid>
                ) : (
                  <DragDropContext onDragEnd={makeOnDragEndFunction(fields)}>
                    <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          // style={getListStyle(snapshot.isDraggingOver)}
                          style={{ width: "100%" }}
                        >
                          {map((name, index) => (
                            <Draggable
                              key={name}
                              draggableId={name}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                >
                                  <ArrayItem
                                    key={name}
                                    fields={formFields}
                                    name={name}
                                    fieldIndex={index}
                                    remove={removeWrapper}
                                    length={value.length}
                                    Component={Component}
                                    minItems={minItems}
                                    provided={provided}
                                    removeLabel={combinedButtonLabels.remove}
                                    compProps={compProps}
                                  />
                                  {/* <BranchComp
                                      provided={provided}
                                      name={name}
                                      index={index}
                                      fields={fields}
                                      length={value.length}
                                    /> */}
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                )}

                {(isError || submitError) && (
                  <Grid item xs={12}>
                    <FormHelperText>{error || submitError}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12} className={classes.header}>
                  {label && (
                    <Typography variant="h6" className={classes.label}>
                      {label}
                    </Typography>
                  )}
                  {/* <IconButton
                    color="primary"
                    aria-label="undo"
                    component="span"
                    disabled={state.index === 0}
                    onClick={undo}
                  >
                    <UndoIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="redo"
                    component="span"
                    disabled={state.index === state.history.length}
                    onClick={redo}
                  >
                    <RedoIcon />
                  </IconButton> */}
                  <Button
                    color="primary"
                    onClick={pushWrapper}
                    disabled={value.length >= maxItems}
                    sx={{...addButtonStyles}}
                  >
                    {combinedButtonLabels.add}
                  </Button>
                </Grid>
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
