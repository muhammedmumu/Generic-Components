import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Count from "./Count";

export default function TabWithRoute({
  data,
  preUrl,
  postUrl,
  Link,
  elevation,
  customTabStyles,
  childStyles,
  pathname,
  // navigate,
  redirectTo,
  indicatorProps,
  Outlet,
  icon,
  iconPosition,
  sideElement,
  sideElementId,
  searchParams,
  sideElementCustomStyle = {},
  ...props
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      (pathname == preUrl || pathname.slice(0, -1) == preUrl) &&
      redirectTo &&
      data != ""
    ) {
      navigate(`${preUrl}/${data[0]?.value}/`);
    }
  }, [data]);
  return (
    <>
      <Tabs
        value={pathname}
        {...props}
        slotProps={{
          indicator: { ...indicatorProps }
        }}>
        {data?.map((items, index) => {
          return [
            <Tab
              icon={icon}
              key={index}
              iconPosition={iconPosition}
              label={items.label}
              value={`${preUrl}/${items.value}/`}
              component={Link}
              to={`${preUrl}/${items.value}/${postUrl}${searchParams}`} // searchParams are retained values
              sx={{ ...customTabStyles }}
              onClick={(e) => {
                if (pathname === `${preUrl}/${items.value}/${postUrl}`) {
                  e.preventDefault();
                }
              }}
            />,
            items?.count && <Count count={items.count} />,
          ];
        })}
        {sideElement && (
          <Box width="100%" sx={{...sideElementCustomStyle}}>
            <div id={sideElementId}></div>
          </Box>
        )}
      </Tabs>
      <Paper elevation={elevation} sx={{ ...childStyles }}>
        <Outlet  context={props?.outletContext}/>
      </Paper>
    </>
  );
}
TabWithRoute.propTypes = {
  data: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  customTabStyles: PropTypes.object,
  childStyles: PropTypes.object,
  indicatorProps: PropTypes.object,
  sideElement: PropTypes.bool,
  outletContext: PropTypes.object
};

TabWithRoute.defaultProps = {
  searchParams: "",
};
