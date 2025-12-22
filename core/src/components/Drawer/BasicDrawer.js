import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import useDrawerHook from "./useDrawer";
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";
export default function MuiDrawer(props) {
  const { children, direction, label, maxHeight, externalOpen, externalState,childStyles, ...rest } = props;
  const { state, toggleDrawer } = useDrawerHook();
  return (
    <React.Fragment key={direction}>
      {!externalState && <Button onClick={toggleDrawer(direction, true)}>{label}</Button>}
      <Drawer
        anchor={direction}
        open={externalState ? externalOpen : state[direction]}
        onClose={toggleDrawer(direction, false)}
        {...rest}
      >
        <Box sx={{ maxHeight: maxHeight,...childStyles }}>
          {children({
            close: toggleDrawer(direction, false),
          })}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

MuiDrawer.propTypes = {
  direction: PropTypes.string,
  label: PropTypes.string,
  maxHeight: PropTypes.string,
  children: PropTypes.node,
};

MuiDrawer.defaultProps = {
  direction: "left",
  label: "Open Drawer",
  maxHeight: "100%",
};
