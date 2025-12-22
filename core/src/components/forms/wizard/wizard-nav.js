import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import makeStyles from '@mui/styles/makeStyles';
import { Stepper, Step, StepLabel } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  stepper: {
    width: "100%",
    borderTopRightRadius: theme.shape.borderRadius,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const WizardNav = ({ StepperProps, stepsInfo, activeStepIndex }) => {
  const classes = useStyles();

  return (
    <Stepper
      {...StepperProps}
      className={clsx(classes.stepper, StepperProps.className)}
      activeStep={activeStepIndex}
    >
      {stepsInfo.map(({ title, label, StepLabelProps, StepProps }, idx) => (
        <Step {...StepProps} key={idx}>
          <StepLabel style={{ fontSize: 20 }} {...StepLabelProps}>
            {title || label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

WizardNav.propTypes = {
  StepperProps: PropTypes.object,
  stepsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      label: PropTypes.node,
      StepLabelProps: PropTypes.object,
      StepProps: PropTypes.object,
    })
  ),
  activeStepIndex: PropTypes.number,
};

WizardNav.defaultProps = {
  StepperProps: {},
};

export default WizardNav;
