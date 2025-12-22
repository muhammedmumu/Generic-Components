import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "../forms/RadioButton/SimpleRadio";
import { Grid } from "@mui/material";
import Checkboxes from "../forms/checkbox/simpleCheckbox";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";

export default function Accordion(props) {
  const Accordion = styled(MuiAccordion)(({ theme, color }) => ({
    borderRadius: "0px !important",
    backgroundColor: color,
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme, color }) => ({
    backgroundColor: color,
  }));

  const {
    headerLabel,
    headerSelection,
    headerData,
    headerContainerStyles,
    headerSelected,
    handleHeaderSelection,
    CheckboxType,
    headerTextColor,
    headerTextProps,
    HideChild,
    childBgColor = "#ffffff",
    bgColor,
    children,
    handleOpenAccordian,
    expanded,
    ...rest
  } = props;

  const handleChange = (item) => {
    handleHeaderSelection(item);
  };

  const handleOpen = (item) => {
    if (item == expanded) {
      handleOpenAccordian(null);

    } else {
      handleOpenAccordian(item);
    }
  };
  return (
    <Accordion expanded={expanded == headerData?.id} {...rest}>
      <AccordionSummary

        expandIcon={
          !HideChild && (
            <ExpandMoreIcon
              onClick={() => handleOpen(headerData?.id)}
            />
          )
        }
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
        >
          {headerSelection && (
            <Grid item sx={{ ...headerContainerStyles }}>
              {CheckboxType == "radio" ? (
                <Radio
                  value={headerData?.id}
                  handleChange={() => {
                    handleChange(headerData);
                  }}
                  isChecked={headerSelected?.some((d) => d.id == headerData.id)}
                />
              ) : (
                <Checkboxes
                  value={headerData?.id}
                  handleChange={() => {
                    handleChange(headerData);
                  }}
                  isChecked={headerSelected?.some((d) => d.id == headerData.id)}
                />
              )}
            </Grid>
          )}
          <Grid item>
            <Typography
              variant="subtitle1"
              color={headerTextColor}
              {...headerTextProps}
            >
              {headerLabel}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      {!HideChild && (
        <AccordionDetails color={childBgColor}>{children}</AccordionDetails>
      )}
    </Accordion>
  );
}
Accordion.propTypes = {
  headerSelection: PropTypes.bool,
  CheckboxType: PropTypes.string,
  headerLabel: PropTypes.string,
  children: PropTypes.node,
  HideChild: PropTypes.bool,
  headerTextColor: PropTypes.string,
  headerProps: PropTypes.object,
};

Accordion.defaultProps = {
  headerSelection: false,
  CheckboxType: "radio",
  headerTextColor: "black",
  headerProps: {
    textTransform: "uppercase",
  },
};
