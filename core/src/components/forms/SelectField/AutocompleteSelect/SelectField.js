/* eslint-disable no-use-before-define */
import React, { useMemo, useRef } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import Popper from "@mui/material/Popper";
export default function AutoComplete(props) {
  const inputRef = useRef();
  const {
    options,
    selectedValues,
    defaultValue,
    preSelected,
    placeholder,
    width,
    maxWidth,
  } = props;

  const choiceList = useMemo(() => {
    return options?.filter((el) => {
      return !preSelected.find((element, f_index) => {
        return el.value == element.value;
      });
    });
  }, [options, preSelected]);
  const PopperMy = function (props) {
    return (
      <Popper
        {...props}
        sx={{
          width: "fit-content",
        }}
        placement="bottom-start"
      />
    );
  };
  return (
    <div>
      <Autocomplete
        multiple
        // freeSolo
        // limitTags={1}
        disableClearable
        options={choiceList || []}
        getOptionLabel={(option) => option?.value}
        defaultValue={defaultValue}
        value={preSelected}
        onChange={(e, data) => selectedValues(data)}
        style={{ width: width, maxWidth: maxWidth, fontSize: 12 }}
        placeholder="select msa"
        renderInput={(params) => {
          return (
            <div>
              <TextField
                fullWidth
                placeholder={placeholder}
                {...params}
              />
            </div>
          );
        }}
        slots={{
          popper: PopperMy
        }}
      />
    </div>
  );
}
AutoComplete.propTypes = {
  options: PropTypes.isRequired,
};

AutoComplete.defaultProps = {
  options: [],
  selectedValues: [],
  defaultValue: [],
  preSelected: [],
};
