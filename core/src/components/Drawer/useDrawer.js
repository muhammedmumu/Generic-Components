import React, { useState } from "react";

const useDrawerHook = () => {
  const [state, setAnchor] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAnchor({ ...state, [anchor]: open });
  };

  return { state, toggleDrawer };
};

export default useDrawerHook;
