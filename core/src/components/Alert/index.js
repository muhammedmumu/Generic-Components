import React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function ActionAlerts({ message, ...props }) {
  return (
    <Box
      sx={theme => ({
        root: {
          width: "100%",
          "& > * + *": {
            marginTop: theme.spacing(2),
          },
        }
      })}
    >
      <Alert
       {...props}>{message}</Alert>
    </Box>
  );
}
