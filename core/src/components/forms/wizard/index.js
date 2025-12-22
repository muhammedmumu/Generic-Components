import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import WizardContext from "./internal/context";

import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Wizard from "./internal";

import WizardNav from "./wizard-nav";
import WizardStepButtons from "./step-buttons";
import selectNext from "./internal/select-next";

const useStyles = makeStyles((theme) => ({
  wizardBody: {
    padding: 24,
    margin: 0,
  },
}));

const WizardInternal = ({
  buttonLabels,
  stepsInfo,
  ButtonContainerProps,
  StepperProps,
  WizardBodyProps,
  WizardProps,
  WizardStepProps,
  defaultActiveStep
}) => {
  const {
    formOptions,
    currentStep,
    handlePrev,
    onKeyDown,
    handleNext,
    activeStepIndex,
    prevSteps,
  } = useContext(WizardContext);

  const { StepTemplate } = currentStep;

  const classes = useStyles();

  const buttonLabelsFinal = {
    next: "Continue",
    submit: "Submit",
    cancel: "Cancel",
    back: "Back",
    ...buttonLabels,
  };

  useEffect(() => {
  if(defaultActiveStep){
    setTimeout(() => {
    handleNext(selectNext(defaultActiveStep, formOptions?.getState)) 
    }, 500);
  }
  }, [])
  

  return (
    <Grid container {...WizardProps} onKeyDown={onKeyDown}>
      {stepsInfo && (
        <WizardNav
          StepperProps={StepperProps}
          stepsInfo={stepsInfo}
          activeStepIndex={activeStepIndex}
        />
      )}
      <Grid
        container
        spacing={2}
        {...WizardBodyProps}
        className={clsx(classes.wizardBody, WizardBodyProps.className)}
      >
        {currentStep.fields.map((item) =>
          formOptions.renderForm([item], formOptions)
        )}
        <StepTemplate WizardStepProps={WizardStepProps} />

        <WizardStepButtons
          {...currentStep}
          formOptions={formOptions}
          buttonLabels={buttonLabelsFinal}
          handleNext={handleNext}
          handlePrev={handlePrev}
          disableBack={
            // prevSteps.length === 0
            activeStepIndex === 0
          }
          ButtonContainerProps={ButtonContainerProps}
        />
      </Grid>
    </Grid>
  );
};

WizardInternal.propTypes = {
  buttonLabels: PropTypes.object,
  stepsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      label: PropTypes.node,
      StepLabelProps: PropTypes.object,
      StepProps: PropTypes.object,
    })
  ),
  ButtonContainerProps: PropTypes.object,
  StepperProps: PropTypes.object,
  WizardBodyProps: PropTypes.object,
  WizardProps: PropTypes.object,
  WizardStepProps: PropTypes.object,
};

WizardInternal.defaultProps = {
  WizardBodyProps: {},
  WizardStepProps: {},
};

const MuiWizard = (props) => <Wizard Wizard={WizardInternal} {...props} />;

export default MuiWizard;
