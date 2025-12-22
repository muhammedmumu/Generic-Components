import React, { useEffect } from "react";
import {
  TextButton,
  ContainedButton,
  SuccessButton,
  DangerButton,
} from "../button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Grid, Fab, Typography } from "@mui/material";

export default function AlertDialog({
  onAccept,
  onReject,
  title,
  description,
  AgreeTitle = "Agree",
  DisAgreeTitle = "Disagree",
  isOpen = false,
  width = 1000,
  hideDisAgree = false,
  hideAgree = false,
  ButtonType = "Contained",
  Icon,
  titleColor,
}) {
  const [open, setOpen] = React.useState(isOpen);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    setOpen(false);
    onAccept && onAccept();
  };
  const handleDisAgree = () => {
    setOpen(false);
    onReject && onReject();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDisAgree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
          paper: {
            sx: {
              width: width,
            },
          }
        }}
      >
        <DialogTitle
          id="form-dialog-title"
          sx={
            !Icon
              ? {
                  padding: "24px",
                  color: (theme) =>
                    titleColor ? titleColor : theme.palette.danger.main,
                  backgroundColor: (theme) => theme.palette.grey[600],
                }
              : {
                  color: (theme) =>
                    titleColor ? titleColor : theme.palette.danger.main,
                  backgroundColor: (theme) => theme.palette.grey[600],
                }
          }
        >
          <Grid container spacing={1} alignItems="center">
            {Icon && (
              <Grid item>
                <Fab
                  color="grey.500"
                  aria-label=""
                  size="medium"
                  sx={theme => ({
                    backgroundColor: theme.palette.grey[500],
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: theme.palette.grey[500],
                    }
                  })}
                >
                  <Icon />
                </Fab>
              </Grid>
            )}
            <Grid item>
              <Typography variant="subtitle2" fontWeight={"fontWeightBold"}  sx={{ textTransform: "uppercase"}}>{title}</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions
          sx={theme => ({
            padding: theme.spacing(1.5),
            paddingRight: theme.spacing(3)
          })}
        >
          {!hideDisAgree && (
            <TextButton
              sx={theme => ({
                fontSize: 11,
                color: "#fff",
                "&:hover": {
                  backgroundColor: theme.palette.grey[500],
                  color: "#ffffff",
                },
                backgroundColor: theme.palette.grey[500],
                textTransform: "uppercase"
              })}
              onClick={handleDisAgree}
              label={DisAgreeTitle}
              
            />
          )}
          {!hideAgree && ButtonType == "Contained" ? (
            <ContainedButton
              onClick={handleAgree}
              label={AgreeTitle}
              autoFocus
            />
          ) : ButtonType == "Danger" ? (
            <DangerButton
              sx={theme => ({
                color: "white",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: theme.palette.danger.main,
                }
              })}
              onClick={handleAgree}
              label={AgreeTitle}
              autoFocus
            />
          ) : (
            ButtonType == "Success" && (
              <SuccessButton
                onClick={handleAgree}
                label={AgreeTitle}
                autoFocus
              />
            )
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
