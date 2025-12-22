import React from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import Rating from '@mui/material/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
    "& span.MuiRating-icon.MuiRating-iconEmpty": {
      visibility: "hidden",

    },
  },
}));

const ReadOnlyRating = (props) => {
  const classes = useStyles();

  const { value, color, ...rest } = props;
  return (
    <div className={classes.root}>
      <Rating
        value={value}
        readOnly
        size="small"
        emptyIcon={null}
        style={{ color: color, fontWeight: "Bold" }}
        {...rest}
      />
    </div>
  );
};

ReadOnlyRating.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ReadOnlyRating;
