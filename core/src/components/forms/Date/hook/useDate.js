import { useState, useEffect } from "react";
import moment from "moment";

const useDateHook = ({ handleDateChange, defaultValue }) => {
  const [value, setvalue] = useState(defaultValue);

  const handleChange = (date) => {
    setvalue(date);
    var filteredDate = moment(date).format("MMM DD YYYY");
    handleDateChange(filteredDate);
  };

  return { handleChange, value, setvalue };
};

export default useDateHook;
