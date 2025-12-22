
  const checkValidators = (validate, fieldName, validatorTypes, validatorMapper = {}) => {
    if (validate === undefined) {
      return;
    }

    validate.forEach((validator, index) => {
      if (typeof validator !== 'function') {
        if (validatorMapper.hasOwnProperty(validator.type)) {
          validatorMapper[validator.type](validator, fieldName);
        }
      }
    });
  };


const iterateOverFields = (fields, componentMapper, validatorTypes, actionTypes, schemaValidatorMapper, parent = {}) => {
    fields.forEach((field) => {
      if (Array.isArray(field)) {
        return iterateOverFields(field, componentMapper, validatorTypes, actionTypes, schemaValidatorMapper);
      }
  
  
      if (field.hasOwnProperty('validate')) {
        checkValidators(field.validate, field.name, validatorTypes, schemaValidatorMapper.validators);
      }
  

    });
  };
      

const defaultSchemaValidator = (schema, componentMapper, validatorTypes = [], actionTypes = [], schemaValidatorMapper = {}) => {
    iterateOverFields(schema.fields, componentMapper, validatorTypes, actionTypes, schemaValidatorMapper);
  };
  
  export default defaultSchemaValidator;