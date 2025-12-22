import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box, Divider, Typography } from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import useSelectHook from "../hook/useSelect";
const MenuProps = {
  getContentAnchorEl: () => null,
  PaperProps: {
    style: {
      // marginTop: "2.5%",
      borderRadius: 0,
      // maxHeight: "30%",
      // overflowY: "scroll",
    },
  },
};

export default function SimpleSelect(props) {
  const {
    options,
    id,
    labelName,
    selectedValues,
    placeHolder,
    preSelected,
    handleOnReset,
    color,
    fontSize,
    fontWeight,
    styles,
    ...rest
  } = props;
  const theme = useTheme();

  const {
    handleChange,
    valueSelected,
    setValueSelected,
    simpleSelectRenderValue,
  } = useSelectHook({
    selectedValues,
    preSelected,
  });

  return (
    <div>
      <InputLabel>{labelName}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={preSelected}
        onChange={handleChange}
        renderValue={(selected) => simpleSelectRenderValue(options, selected)}
        MenuProps={MenuProps}
        style={{ ...styles }}
        {...rest}
      >
        {options?.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              <FiberManualRecordRoundedIcon
                style={{ color: item.color, fontSize: fontSize }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: fontWeight,
                  ml: 1,
                  textTransform: "capitalize",
                }}
              >
                {item.value}
              </Typography>
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

SimpleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  labelName: PropTypes.string,
  placeHolder: PropTypes.string,
  preSelected: PropTypes.array,
  color: PropTypes.string,
};

SimpleSelect.defaultProps = {
  fontWeight: 400,
  fontSize: 13,
};
