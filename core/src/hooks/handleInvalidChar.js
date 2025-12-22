export const handleInvalidChar = (e) => {
  const invalidChars = ["E", "e", "+", "-"];
  invalidChars.includes(e.key) && e.preventDefault();
};

export const handleNumericValues = (e) => {
  let regex = /^[0-9]*$/;
  let validExp = !(
    e.key.match(regex) ||
    e.key === "Enter" ||
    ((e.keyCode == 86 || e.keyCode == 67 || e.keyCode == 65 || e.keyCode == 88) && e.ctrlKey === true) ||
    e.keyCode == 8
  );
  validExp && e.preventDefault();
};
