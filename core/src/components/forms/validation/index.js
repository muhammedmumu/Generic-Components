// import { isArray } from "@material-ui/data-grid";

const stringValidation = (value) => {
  if (value && value.trim()) {
    return undefined;
  }
  return "Required";
};

export const required = (value) => {
  if (typeof value === "string") {
    return stringValidation(value);
  } else if (value) {
    return undefined;
  }
  return "Required";
};

export const requiredArray = () => (items) => {
  if (Array.isArray(items) && items.length > 0) {
    return undefined;
  }
  return "Atleast 1 item is required";
};

export const ItemArrayLength = (min, max) => (items) => {
  if (items && Array.isArray(items) && items.length < min) {
    return `Must have min ${min} items`;
  }
  if (items && Array.isArray(items) && items.length > max) {
    return `Must have max ${max} items`;
  }
  return undefined;
};

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const maxEqualValue = (max, msg) => (value) =>
  value && value > max
    ? msg
      ? msg
      : `Must be at less than ${max}`
    : undefined;

const minValue18 = minValue(18);
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooOld = (value) =>
  value && value > 65 ? "You might be too old for this" : undefined;
const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

export const validateZipCode = (value) => {
  const validZipCode = value && !/^[0-9\- ]*$/i.test(value)
  ? "Invalid Zip Code"
  : undefined;

  return validZipCode;
};

export const phoneNumberWithChar = (value) => {
  const validPhoneNumber = value && !/^[0-9()\- ]*$/i.test(value)
  ? "Invalid Phone Number"
  : undefined;

  return validPhoneNumber;
};