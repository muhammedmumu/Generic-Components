import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  const { textStyles, hidePercentage } = props;
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        {...props}
        value={100}
        sx={theme => ({
          position: "absolute",
          color: theme.palette.grey[100]
        })}
        color="secondary"
      />
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{ transform: "rotate(-350deg)" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="body2"
          // fontWeight="bold"
          component="div"
          color="textSecondary"
          sx={{
            ...textStyles,
          }}
        >
          {hidePercentage
            ? `${props.innerCircleValue}`
            : `${props.innerCircleValue}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic({ data, size, thickness, ...props }) {
  return (
    <CircularProgressWithLabel
      value={data}
      size={size}
      thickness={thickness}
      {...props}
    />
  );
}
CircularStatic.propTypes = {
  data: PropTypes.number.isRequired,
  size: PropTypes.number,
  thickness: PropTypes.number,
  innerCircleValue: PropTypes.number.isRequired,
};

CircularStatic.defaultProps = {};
