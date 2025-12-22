import React, { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import MaterialTabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import * as tabBarUtils from "./utils";
import { makeStyles } from "@mui/styles";
export { tabBarUtils };

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
    // fontWeight: "bold",
    marginLeft: 0,
    maxWidth: "none",
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
}));

const TabBar = (props) => {
  const [currentTab, setCurrentTab] = React.useState(props.defaultValue);
  const {
    indicatorColor,
    textColor,
    ariaLabel,
    onChange = setCurrentTab,
    value = currentTab,
    tabs,
    children,
    TabComponent,
    classes,
    mainLabel,
    orientation,
    tabLabelStyles,
    customTabStyles,
    icon,
    iconPosition,
    linking,
    customContainerStyles,
    ...rest
  } = props;

  // for scrolling purpose
  const tabRefs = useRef({});
  const handleTabClick = (value) => {
    tabRefs.current[value]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleTabChange = (event, newValue) => {
    onChange(newValue);
    if (linking) {
      handleTabClick(newValue);
    }
  };
  const style = useStyles();

  const tabItems = useMemo(() => {
    const mainTabs = [];
    if (mainLabel) {
      mainTabs.push(
        <Tab
          label={mainLabel}
          value={"main-item"}
          key={"main-item"}
          component={TabComponent}
          disabled={true}
          wrapped={true}
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            maxWidth: "none",
            ...tabLabelStyles,
          }}
        />
      );
    }
    const tabItems = tabs.map(
      ({ label, value, disabled = false, tabProps = {} }, index) => (
        <Tab
          icon={icon}
          iconPosition={iconPosition}
          label={label}
          value={value}
          disabled={disabled}
          key={index}
          component={TabComponent}
          classes={classes}
          {...tabProps}
          {...a11yProps(index)}
        />
      )
    );
    return [mainTabs, ...tabItems];
  }, [tabs, TabComponent, classes, mainLabel]);

  const tabPanels = useMemo(
    () =>
      tabs.map(({ Component, componentProps, value: tabValue }, index) => (
        <TabPanel
          Component={Component}
          componentProps={componentProps}
          currentValue={value}
          tabValue={tabValue}
          key={index}
          linking={linking}
          tabRefs={tabRefs}
        />
      )),
    [tabs, value]
  );

  return (
    <React.Fragment>
      <Box
        sx={{
          ...customContainerStyles
        }}
      >
        <MaterialTabs
          value={value}
          indicatorColor={indicatorColor}
          textColor={textColor}
          onChange={handleTabChange}
          aria-label={ariaLabel}
          orientation={orientation}
          {...rest}
          sx={{
            ...customTabStyles,
          }}
        >
          {tabItems}
        </MaterialTabs>

        <div id="tabarActions"></div>
      </Box>

      {tabPanels}
    </React.Fragment>
  );
};

TabBar.propTypes = {
  indicatorColor: PropTypes.oneOf(["primary", "secondary"]),
  textColor: PropTypes.oneOf(["primary", "secondary", "inherit"]),
  ariaLabel: PropTypes.string,
  defaultValue: PropTypes.any,
  orientation: PropTypes.string,
  customTabStyles: PropTypes.object,
  tabs: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.node.isRequired,
      value: PropTypes.any.isRequired,
      Component: PropTypes.elementType.isRequired,
      componentProps: PropTypes.object,
      tabProps: PropTypes.object,
    })
  ),
};

TabBar.defaultProps = {
  indicatorColor: "primary",
  textColor: "inherit",
  ariaLabel: "tab bar",
  defaultValue: false,
  tabs: [],
  orientation: "horizontal",
  linking: false,
};

export default TabBar;
