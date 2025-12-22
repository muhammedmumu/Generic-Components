import React from "react";
import makeStyles from "@mui/styles/makeStyles";
export default function DataGridStyles(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
        "& div.MuiDataGrid-row:nth-child(odd)": {
          backgroundColor: "#e7f8fe",
        },
    },
  }));
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}