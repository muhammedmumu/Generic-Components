import React from "react";
import { Grid, Typography, Box, CircularProgress, Divider } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles((theme) => ({
  root: {
    // height: 200,
    // width: "100%",
    // maxWidth: 100,
    backgroundColor: "white",
    border: "1px solid",
    overflow: "scroll",
    paddingTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 3,
    paddingLeft: 14,
  },
  value: {
    fontSize: 12,
    fontWeight: 700,
    marginTop: "2%",
    paddingLeft: 14,
  },
  grid: {
    marginBottom: 20,
  },
}));
export default function Tooltip({
  active,
  payload,
  label,
  preLabeltext,
  PostlabelText,
  maxTooltipWidth,
  hideTItle
}) {
  const classes = useStyles();

  if (active) {
    return (
      <Grid
        xs={12}
        style={{ maxWidth: maxTooltipWidth }}
        className={classes.root}
      >
        {
          !hideTItle && 
        <>
          <Grid className={classes.label}>{label}</Grid>
          <Divider />
          </>
          }
       
        <Grid container xs={12} className={classes.grid}>
          {payload?.map((item) => (
            <Grid
              xs={12}
              className={classes.value}
              style={{
                color: item?.fill,
                textTransform: "capitalize",
              }}
            >
              {`${preLabeltext ? preLabeltext : ""} ${item?.name} : ${
                item?.value
              } ${PostlabelText ? PostlabelText : " "}`}
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }

  return null;
}
