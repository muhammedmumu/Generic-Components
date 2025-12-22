import { useEffect, useContext, useRef, useReducer, useState } from "react";
import { useField } from "react-final-form";
import composeValidators from "../validate/compose-validators"
import { getValidate } from "../validate/helpers.js";
import RendererContext from "../render/context";
const calculateValidate = (
  props,
  validate,
  component,
  validatorMapper,
  setWarning,
  useWarnings
) => {
  if ((validate || props.dataType) && "field-array" !== component) {
    const validateFn = composeValidators(
      getValidate(validate, props.dataType, validatorMapper)
    );

    if (useWarnings) {
      return async (...args) => {
        setWarning(undefined);

        const result = await validateFn(...args);

        if (result?.type === "warning") {
          setWarning(result.error);

          return;
        }

        return result;
      };
    }

    return validateFn;
  }
};

const init = ({
  props,
  validate,
  component,
  validatorMapper,
  setWarning,
  useWarnings,
}) => ({
  // initialValue: calculateInitialValue(props),
  // arrayValidator: calculateArrayValidator(props, validate, component, validatorMapper),
  validate: calculateValidate(
    props,
    validate,
    component,
    validatorMapper,
    setWarning,
    useWarnings
  ),
  // type: assignSpecialType(component)
});

const reducer = (
  state,
  { type, specialType, validate, arrayValidator, initialValue }
) => {
  switch (type) {
    case "setType":
      return {
        ...state,
        type: specialType,
      };
    case "setValidators":
      return {
        ...state,
        validate,
        arrayValidator,
      };
    case "setInitialValue":
      return {
        ...state,
        initialValue,
      };
    default:
      return state;
  }
};

const useFieldApi = ({
  name,
  initializeOnMount,
  component,
  render,
  validate,
  resolveProps,
  useWarnings,
  ...props
}) => {
  const { validatorMapper, formOptions } = useContext(RendererContext);
  const [warning, setWarning] = useState();
  const resolvedProps = {};
  const finalValidate = validate;
  const [
    { type, initialValue, validate: stateValidate, arrayValidator },
    dispatch,
  ] = useReducer(
    reducer,
    {
      props: { ...props, ...resolvedProps },
      validate: finalValidate,
      component,
      validatorMapper,
      setWarning,
      useWarnings,
    },
    init
  );

  const mounted = useRef(false);

  const enhancedProps = {
    type,
    ...props,
    ...(stateValidate ? { validate: stateValidate } : {}),
  };

  const fieldProps = useField(name, enhancedProps);

  const fieldClearedValue = Object.prototype.hasOwnProperty.call(
    props,
    "clearedValue"
  )
    ? props.clearedValue
    : formOptions.clearedValue;

  useEffect(
    () => {
      mounted.current = true;
      if (fieldProps.input.type === "file") {
        formOptions.registerInputFile(fieldProps.input.name);
      }

      return () => {
        mounted.current = false;
        /**
         * Delete the value from form state when field is inmounted
         */
        if (
          (formOptions.clearOnUnmount || props.clearOnUnmount) &&
          props.clearOnUnmount !== false
        ) {
          fieldProps.input.onChange(fieldClearedValue);
        }

        if (fieldProps.input.type === "file") {
          formOptions.unRegisterInputFile(fieldProps.input.name);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const {
    clearOnUnmount,
    dataType,
    clearedValue,
    type: _type,
    ...cleanProps
  } = enhancedProps;

  return {
    ...cleanProps,
    ...fieldProps,
    ...(true && {
      meta: {
        ...fieldProps.meta,
        //   warning
      },
    }),
    input: {
      ...fieldProps.input,
      value:
        fieldProps.input.type === "file" &&
        typeof fieldProps.input.value === "object"
          ? fieldProps.input.value.inputValue
          : fieldProps.input.value,
    },
  };
};

export default useFieldApi;
