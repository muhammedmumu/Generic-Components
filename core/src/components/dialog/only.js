import React, { useEffect } from "react";
import { TextButton, ContainedButton } from "../button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


function FormDialog({
  title,
  helpText,
  cancelLabel = "Cancel",
  submitLabel = "Submit",
  handleCancel,
  children,
  isOpened = false,
}) {
  const [open, setOpen] = React.useState(isOpened);

  const onClickCancel = () => {
    setOpen(false);
    handleCancel && handleCancel();
  };

  useEffect(() => {
    setOpen(isOpened);
  }, [isOpened]);

  const onClickSubmit = () => {
    // handleSubmit();
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth={"true"}
      maxWidth={"lg"}
      open={open}
      onClose={onClickCancel}
      aria-labelledby="form-dialog-title"
      slotProps={{
        paper: {
          style: {},
        }
      }}
    >
      {title}
      {children}
    </Dialog>
  );
}

export default FormDialog;
