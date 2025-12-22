import React, { useEffect, useRef } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const useStyles = makeStyles({
  root: {
    width: 70,
    alignItems: "center",
    marginLeft: 10,
    marginTop: 3,
  },
});
const StyledSlide = styled(Slider)({
  width: 70,
  alignItems: "center",
  marginLeft: 2.5,
  marginTop: 0,
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#0FA9DE",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function RangeSlider({
  minRange,
  maxRange,
  onChangeValue,
  initialStartValue,
  initialEndValue,
  ResetOn,
  orientation,
  step,
  ...props
}) {
  const isInitialMount = useRef(true);

  const classes = useStyles();
  const [value, setValue] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChangeValue(newValue);
  };

  useEffect(() => {
    let data = [];
    if (minRange && maxRange) {
      data.push(initialStartValue);
      data.push(initialEndValue);
    }
    setValue(data);
  }, [minRange, maxRange]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else resetValue();
  }, [ResetOn]);

  const resetValue = (val) => {
    let data = [];
    data.push(initialStartValue);
    data.push(initialEndValue);
    setValue(data);
  };

  return (
    <StyledSlide
      value={value}
      min={minRange}
      step={step}
      max={maxRange}
      onChange={handleChange}
      valueLabelDisplay="auto"
      orientation={orientation}
      sx={{}}
      {...props}
    />
  );
}
