import React, { useReducer, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  FormHelperText,
  IconButton,
  Paper,
} from "@mui/material";
import { ContainedButton } from "../../button";

import makeStyles from "@mui/styles/makeStyles";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";

import useFieldApi from "../hooks/use-field-api";
import { FieldArray } from "react-final-form-arrays";
import useFormApi from "../hooks/use-form-api";

import FormFieldGrid from "../hoc/form-field-grid";
import clsx from "clsx";
import TextField from "../TextField";
import List from "@mui/material/List";
import CustomModal from "../../dialog/index";
import DialogOnly from "../../dialog/only";

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
  // const { renderForm } = useFormApi();

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

  let Modal = only ? DialogOnly : CustomModal;

  const combinedButtonLabels = {
    ...defaultButtonLabels,
    ...buttonLabels,
  };

  const { dirty, submitFailed, error, submitError } = meta;
  const isError = (dirty || submitFailed) && error && typeof error === "string";
  const [openModal, SetOpenModal] = useState(false);

  const closeModal = () => {
    SetOpenModal(false);
  };

  return (
    <FormFieldGrid
      {...FormFieldGridProps}
      sx={{
        mb: 3.2,
      }}
      className={clsx(FormFieldGridProps.classname)}
    >
      <FormControl
        component="fieldset"
        error={isError || submitError}
        {...FormControlProps}
        sx={{
          mb: 3.2,
          width: "100%",
        }}
        className={clsx(FormControlProps.className)}
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
              <Paper
                variant="outlined"
                sx={{
                  marginTop: 3,
                  ml: 10,
                }}
              >
                <Grid container spacing={2} direction="column">
                  {description && (
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">{description}</Typography>
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    {label && (
                      <Typography
                        variant="h6"
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        {label}
                      </Typography>
                    )}
                    <ContainedButton
                      // color="primary"
                      onClick={() => SetOpenModal(true)}
                      disabled={value.length >= maxItems}
                      label={combinedButtonLabels.add}
                      sx={theme => ({
                        position: "relative",
                        transform: "translate(-50%,-50%)",
                        borderRadius: "4px",
                        color: "white",
                        backgroundColor: theme.palette.blue[900],
                        "&:hover": {
                          color: "white",
                          backgroundColor: theme.palette.primary.medium,
                        },
                        textTransform: "inherit"
                      })}
                    />
                  </Grid>

                  {value.length <= 0 ? (
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="fontWeightBold"
                        gutterBottom
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
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

                  {(isError || submitError) && (
                    <Grid item xs={12}>
                      <FormHelperText>{error || submitError}</FormHelperText>
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    <Modal
                      isOpened={openModal}
                      title={<Title handleClose={() => SetOpenModal(false)} />}
                      handleCancel={() => SetOpenModal(false)}
                      sx={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {children({
                        onAdd: (item, canClose) => {
                          push(item);
                          canClose && closeModal();
                        },
                        onRemove: (index) => remove(index),
                        disabled: value.length >= maxItems,
                        value,
                        closeModal,
                      })}
                    </Modal>
                  </Grid>
                </Grid>
              </Paper>
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
