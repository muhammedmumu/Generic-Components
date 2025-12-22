import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function CustomNoRowsOverlay(props) {
  const { message } = props;
  return (
    <Grid container alignItems="center" direction="row" justifyContent="center">
      <Typography variant="subtitle1" fontWeight="fontWeightBold" mt={10} textAlign={"center"}>
        {message ? message : "No Matching Records Found"} 
      </Typography>
    </Grid>
  );
}
