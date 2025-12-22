import React from "react";
import PropTypes from "prop-types";
import MaterialBox from "@mui/material/Box";

const TabPanel = ({
  tabValue,
  currentValue,
  Component,
  componentProps,
  containerStyle,
  linking,
  tabRefs,
}) => {
  return (
    <>
      {linking ? (
        <MaterialBox {...containerStyle}>
          <div key={tabValue} ref={(el) => (tabRefs.current[tabValue] = el)}>
            <Component {...componentProps} />
          </div>
        </MaterialBox>
      ) : (
        tabValue === currentValue && (
          <MaterialBox {...containerStyle}>
            <Component {...componentProps} />
          </MaterialBox>
        )
      )}
    </>
  );
};

TabPanel.prototypes = {
  Component: PropTypes.elementType.isRequired,
  tabValue: PropTypes.any.isRequired,
  currentValue: PropTypes.any.isRequired,
  containerStyle: PropTypes.object,
};

TabPanel.defaultProps = {};

export default TabPanel;
