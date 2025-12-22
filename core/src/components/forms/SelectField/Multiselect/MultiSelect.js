import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import useSelectHook from "../hook/useSelect";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  getContentAnchorEl: () => null,
  PaperProps: {
    style: {
      marginTop: "0%",
      borderRadius: 0,
      maxHeight: "30%",
      overflowY: "scroll",
    },
  },
};

export default function MultipleSelect(props) {
  const {
    options,
    id,
    labelName,
    selectedValues,
    placeHolder,
    preSelected,
    handleOnReset,
    color,
    fontWeight,
    fontSize,
    ...rest
  } = props;

  const { handleChange, getRenderValue } = useSelectHook({
    selectedValues,
    preSelected,
  });

  return (
    <div>
      <InputLabel>{labelName}</InputLabel>
      <Select
        labelId={id}
        id={id}
        multiple
        value={preSelected}
        onChange={handleChange}
        renderValue={(selected) => getRenderValue(options, selected)}
        MenuProps={MenuProps}
        {...rest}
      >
        {options?.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              <FiberManualRecordRoundedIcon
                sx={{ color: item.color, fontSize: fontSize }}
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

MultipleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  labelName: PropTypes.string,
  placeHolder: PropTypes.string,
  color: PropTypes.string,
};

MultipleSelect.defaultProps = {
  fontWeight: 400,
  fontSize: 13,
};
