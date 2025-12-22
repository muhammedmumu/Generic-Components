import React, { useEffect } from "react";
import { TextButton, DangerButton, SuccessButton } from "../button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useFormApi from "../forms/hooks/use-form-api";
import FormRender from "../forms/render";
import { Grid, Fab, Typography } from "@mui/material";
import LoadingButtonComp from "../button/loadingButton";
import SaveIcon from "@mui/icons-material/Save";

function FormDialog({
  title,
  subTitle,
  helpText,
  cancelLabel = "Cancel",
  submitLabel = "Submit",
  handleCancel,
  children,
  loading,
  width,
  open = false,
  ButtonType = "ContainedButton",
  Icon,
  titleColor,
  hideSubmitButtons,
  iconBackgroundColor,
  titleStyles,
  subtitleStyles = {},
  dilogContentStyles,
  SuccessButtonStyles,
  disableBackdropClose,
  loadBtnText = "",
  customTitle,
  customPadding,
  maxWidth = "unset",
  hasTitleFullWidth,
  resetForm = false,
  onCloseCallback,
  cancelButtonStyles,
  customDisabled = false,
  dialogStyles 
}) {  
  const { handleSubmit, getState, reset } = useFormApi();
  const { submitting, valid } = getState();
  const onClickCancel = (e, reason) => {
    if (reason == "backdropClick" && disableBackdropClose) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    reset();
    handleCancel && handleCancel();
    onCloseCallback && onCloseCallback()
  };
  const onClickSubmit = () => {
    handleSubmit();
  };
  return (
    <div>
      <form>
        <Dialog
          open={open}
          onClose={onClickCancel}
          aria-labelledby="form-dialog-title"
          slotProps={{
            paper: {
              style: {
                width: width,
                maxWidth: maxWidth,
                ...dialogStyles
              },
            }
          }}
        >
          <DialogTitle
            id="form-dialog-title"
            sx={
              !Icon
                ? {
                    padding: customPadding ? customPadding :  "24px",
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
            {customTitle ? (
              customTitle
            ) : (
              <Grid container spacing={1} alignItems="center">
                {Icon && (
                  <Grid item xl={1.4} lg={1.4}>
                    <Fab
                      color="grey.500"
                      aria-label=""
                      size="medium"
                        sx={(theme) => ({
                          boxShadow: "none",
                          backgroundColor: iconBackgroundColor || theme.palette.grey[500],
                          "&:hover": {
                            backgroundColor: iconBackgroundColor || theme.palette.grey[500],
                          },
                        })}

                    >
                      <Icon />
                    </Fab>
                  </Grid>
                )}
                <Grid item xl={hasTitleFullWidth ? 12 : 10} lg={hasTitleFullWidth ? 12 : 10} xs={hasTitleFullWidth && 12}>
                  <Typography
                    fontWeight="fontWeightBold"
                    variant="subtitle2"
                    sx={{ textTransform: "uppercase", ...titleStyles }}
                  >
                    {title}
                  </Typography>
                </Grid>
                {subTitle && (
                  <Grid item sx={{ paddingTop: "0px !important" }}>
                    <Typography
                      fontWeight="fontWeightMedium"
                      variant="subtitle1"
                      sx={{ ...subtitleStyles }}
                    >
                      {subTitle}
                    </Typography>
                  </Grid>)
                }
              </Grid>
            )}
          </DialogTitle>
          <DialogContent dividers sx={{ ...dilogContentStyles }}>
            {helpText && <DialogContentText>{helpText}</DialogContentText>}
            {children}
          </DialogContent>
          <DialogActions
            sx={theme => ({
              padding: theme.spacing(1.5),
              paddingRight: theme.spacing(3)
            })}
          >
            <TextButton
              onClick={onClickCancel}
              label={cancelLabel}
              sx={theme => ({
                fontSize: 11,
                color: "#fff",
                "&:hover": {
                  backgroundColor: theme.palette.grey[500],
                  color: "#ffffff",
                },
                backgroundColor: theme.palette.grey[500],
                textTransform: "uppercase",
                ...cancelButtonStyles
              })}
            />
            {!hideSubmitButtons &&
              (loading ? (
                <LoadingButtonComp
                  loading
                  startIcon={<SaveIcon />}
                  variant="contained"
                  sx={{
                    height: 35,
                  }}
                  label={loadBtnText}
                />
              ) : ButtonType == "DangerButton" ? (
                <DangerButton
                  type="submit"
                  onClick={onClickSubmit}
                  disabled={submitting || !valid}
                  label={submitLabel}
                  sx={{ textTransform: "uppercase" }}
                />
              ) : (
                <SuccessButton
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                    resetForm && reset();
                  }}
                  disabled={submitting || loading || !valid || customDisabled}
                  label={submitLabel}
                  sx={{ textTransform: "uppercase", ...SuccessButtonStyles }}
                />
              ))}
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}

const FormDialogForm = ({
  initialValues,
  handleSubmit,
  clearOnUnmount,
  ...formDialogProps
}) => {
  return (
    <FormRender
      FormTemplate={FormDialog}
      FormTemplateProps={formDialogProps}
      initialValues={initialValues}
      // subscription={{ values: true }}
      onSubmit={(values) => handleSubmit(values)}
      clearOnUnmount={clearOnUnmount}
    />
  );
};

export default FormDialogForm;
