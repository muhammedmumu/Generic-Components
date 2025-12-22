import { Box, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Radio from "@mui/material/Radio";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.radio": {
      visibility: "hidden",
      width: -18,
      display: "none",
    },
    "& svg.MuiSvgIcon-root .MuiSvgIcon-fontSizeSmall": {
      fontSize: 10,
    },
  },
  label: {
    fontSize: 11,
    fontWeight: 400,
  },
}));

export default function RadioButton(props) {
  const classes = useStyles();
  const {
    label,
    value,
    isChecked,
    handleChange,
    additionalStyles,
    labelStyles,
    parentContainerLabelStyles,
    formFieldGridProps,
    parentContainerStyles,
    ...rest
  } = props;
  const [selectedValue, setSelectedValue] = React.useState("a");

  useEffect(() => {}, [isChecked]);
  return (
    <Grid xs={12} container direction="row" alignItems="center" style={{ ...parentContainerStyles }}>
      <Grid item xs={1} className={classes.root}>
        <Radio
          checked={isChecked}
          // onChange={handleChange}
          value={value}
          onClick={handleChange}
          classes={classes.root}
          style={{ ...additionalStyles }}
          size="small"
          {...rest}
        />
      </Grid>
      <Grid item xs={11} style={{paddingLeft:25, ...parentContainerLabelStyles  }} {...formFieldGridProps}>
        <Typography className={classes.label} style={{...labelStyles}}>{label}</Typography>
      </Grid>
    </Grid>
  );
}
