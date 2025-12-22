import React from "react";
import PropTypes from "prop-types";

function GraphGradient(props) {
  const { stopColor, datakey, ...rest } = props;
  return (
    <linearGradient id={datakey} {...rest}>
      <stop offset="0%" stopColor={stopColor} stopOpacity="1" />
      <stop offset="100%" stopColor="white" stopOpacity="1" />
    </linearGradient>
  );
}

GraphGradient.propTypes = {
  coordinates: PropTypes.object,
};

GraphGradient.defaultProps = {
  coordinates: {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
  },
};

export default GraphGradient;
