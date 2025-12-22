import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";

export default function ProgressBarColored(props) {
  const { dataValue, color, height, restStyles } = props;

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: height,
      borderRadius: 5,
      // width : '112%',
      color: "red",
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: color,
    },

    ...restStyles,
  }))(LinearProgress);

  return <BorderLinearProgress variant="determinate" value={dataValue} />;
}
ProgressBarColored.propTypes = {};

ProgressBarColored.defaultProps = {
  dataValue: "0",
  color: "#46D479",
  height: 13,
};
