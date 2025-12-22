import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { SelectAlertAction } from "./actions";
import { Box } from "@mui/material";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars() {
  const { message, severity, id } = SelectAlertAction();
  const [open, setOpen] = React.useState(false);
  let horizontal = "center";
  let vertical = "top";
  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [id]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Box>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Box>
      </Snackbar>
    </>
  );
}
