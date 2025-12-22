import { useState, useEffect } from "react";

const useSelectHook = ({ selectedValues, preSelected, onChange, options }) => {
  const [valueSelected, setValueSelected] = useState([]);
  const [OptionSelected, setOptionSelected] = useState();

  const handleSearchSelectChange = (value) => {
    setOptionSelected(value);
    onChange(value);
  };

  const handleChange = (event) => {
    selectedValues(event.target.value);
  };

  const getRenderValue = (options, selected) => {
    return options?.map((item) => {
      if (selected.includes(item.id)) {
        if (selected.length > 1) {
          return `${item.value},`;
        }
        return `${item.value}`;
      }
    });
  };

  const simpleSelectRenderValue = (options, selected) => {
    return options?.map((item) => {
      if (selected == item.id) {
        return `${item.value}`;
      }
    });
  };
  const getValue = (value) => {
    if (Array.isArray(value) || typeof value == "object") {
      return value;
    } else {
      return options?.filter((item) => item?.value == value);
    }
  };

  return {
    handleChange,
    valueSelected,
    setValueSelected,
    getRenderValue,
    simpleSelectRenderValue,
    OptionSelected,
    handleSearchSelectChange,
    getValue,
  };
};
export default useSelectHook;
