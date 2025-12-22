import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar(props) {
  const { dataValue, variant } = props;

  return <LinearProgress variant={variant} value={dataValue} />;
}
ProgressBar.propTypes = {
  dataValue: PropTypes.number,
  variant: PropTypes.oneOf(["determinate", "indeterminate", "query"]),
};

ProgressBar.defaultProps = {};
