import React, { useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export default function SimpleModal(props) {
  const {
    children,
    isOpen,
    handleClose,
    width,
    height,
    applyModelPadding,
    topValue,
    borderRadius,
    maxHeight,
    backgroundColor,
    styles,
    childStyles,

    ...rest
  } = props;
  function getModalStyle() {
    const top = topValue != "" ? topValue : 10;
    const left = window.innerWidth - 900;
    return {
      top: `${top}%`,
      maxHeight: maxHeight,
      borderRadius: borderRadius,
      backgroundColor: "red",
      
    };
  }

  const top = topValue != "" ? topValue : 10;
  const StylesDiv = styled(Box)(({
    theme
  }) => ({
    // paper: {
    position: "absolute",
    backgroundColor: backgroundColor || theme?.palette?.background?.paper,
    padding: applyModelPadding && theme?.spacing(2, 4, 3),
    width: width,
    height: height,
    top: `${top}%`,
    maxHeight: maxHeight,
    borderRadius: borderRadius ,
    ...childStyles,
    // },
  }));
  // const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
      {...rest}
    >
      <StylesDiv>{children}</StylesDiv>
    </Modal>
  );
}
SimpleModal.defaultProps = {
  isOpen: false,
  applyModelPadding: true,
  borderRadius: 0,
  maxHeight: 500,
};