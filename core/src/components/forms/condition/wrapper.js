import React, { useEffect, useReducer } from "react";
import Condition from "./index";
import PropTypes from "prop-types";
import { FormSpy } from "react-final-form";

const FormConditionWrapper = ({ condition, children, field }) => {
  return condition ? (
    <FormSpy>
      {({ values }) => {
        return (
          <Condition condition={condition} values={values} field={field}>
            {children}
          </Condition>
        );
      }}
    </FormSpy>
  ) : (
    children
  );
};

FormConditionWrapper.propTypes = {
  condition: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // children: childrenPropTypes.isRequired,
  field: PropTypes.object,
};

export default FormConditionWrapper;
