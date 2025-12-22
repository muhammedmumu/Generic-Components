import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import selectNext from "./internal/select-next";
import { FormSpy } from "react-final-form";
import { Button, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Alert from "../../dialog/Alert";
const NextButton = ({
  nextStep,
  valid,
  handleNext,
  nextLabel,
  getState,
  handleSubmit,
  submitLabel,
}) => (
  <Button
    variant="contained"
    // color="primary"
    sx={theme => ({
      fontSize: 14,
      borderRadius: "4px",
      marginRight: "16px",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.lightgrey[250],
      "&:hover": {
        color: theme.palette.lightgrey[250],
        backgroundColor: theme.palette.primary.medium,
      }
    })}
    disabled={!valid || getState().validating || getState().submitting}
    onClick={() =>
      nextStep ? handleNext(selectNext(nextStep, getState)) : handleSubmit()
    }
  >
    {nextStep ? nextLabel : submitLabel}
  </Button>
);

NextButton.propTypes = {
  nextStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  handleSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.node.isRequired,
  valid: PropTypes.bool,
  handleNext: PropTypes.func.isRequired,
  nextLabel: PropTypes.node.isRequired,
  getState: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  wizardBody: {
    padding: 24,
    margin: 0,
  },
  // buttons: {
  //   display: "flex",
  //   justifyContent: "flex-end",
  // },
  // button: {
  //   marginRight: 16,
  // },
  // buttonsContainer: {
  //   marginTop: 36,
  // },
}));

const WizardStepButtons = ({ buttons: Buttons, ...props }) => {
  const classes = useStyles();
  const [isOpen, setisOpen] = useState(false);

  if (Buttons) {
    return <Buttons classes={classes} {...props} />;
  }

  const {
    disableBack,
    handlePrev,
    nextStep,
    handleNext,
    buttonLabels: { cancel, submit, back, next },
    formOptions,
    ButtonContainerProps,
  } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      {...ButtonContainerProps}
      sx={{ marginTop: "36px" }}
      className={clsx(classes.buttonsContainer, ButtonContainerProps.className)}
    >
      <FormSpy
        subscription={{ valid: true, validating: true, submitting: true }}
      >
        {() => (
          <React.Fragment>
            <Alert
              isOpen={isOpen}
              title="Cancel Action Plan Creation"
              description="Are you sure you want to cancel? All unsaved changes will be lost."
              ButtonType="Danger"
              AgreeTitle="Yes, Cancel"
              DisAgreeTitle="Go Back"
              onAccept={formOptions.onCancel}
              onReject={() => setisOpen(false)}
            />
            <Grid item md={2} xs={2}>
              <Button
                sx={theme => ({
                  fontSize: 14,
                  borderRadius: "4px",
                  color: theme.palette.black[200],
                  "&:hover": {
                    color: theme.palette.black[200],
                  }
                })}
                onClick={() => setisOpen(true)}
              >
                {cancel}
              </Button>
            </Grid>
            <Grid
              item
              md={10}
              xs={10}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                disabled={disableBack}
                onClick={handlePrev}
                sx={theme => ({
                  fontSize: 14,
                  borderRadius: "4px",
                  marginRight: "16px",
                  backgroundColor: "#fff !important",
                  color: theme.palette.black[200],
                  "&:hover": {
                    color: theme.palette.black[200],
                  }
                })}
                // className={classes.button}
              >
                {back}
              </Button>
              <NextButton
                {...formOptions}
                handleNext={handleNext}
                nextStep={nextStep}
                nextLabel={next}
                submitLabel={submit}
              />
            </Grid>
          </React.Fragment>
        )}
      </FormSpy>
    </Grid>
  );
};

WizardStepButtons.propTypes = {
  ButtonContainerProps: PropTypes.object,
  disableBack: PropTypes.bool,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  nextStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      when: PropTypes.string.isRequired,
      stepMapper: PropTypes.object.isRequired,
    }),
    PropTypes.func,
  ]),
  buttonLabels: PropTypes.shape({
    submit: PropTypes.node.isRequired,
    cancel: PropTypes.node.isRequired,
    back: PropTypes.node.isRequired,
    next: PropTypes.node.isRequired,
  }).isRequired,
  buttons: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  formOptions: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }),
};

WizardStepButtons.defaultProps = {
  ButtonContainerProps: {},
};

export default WizardStepButtons;
