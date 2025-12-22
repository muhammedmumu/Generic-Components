import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/styles";

const StyledDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  minWidth: 20, // Minimum width for single-digit counts
  height: 20,
  padding: "0 6px", // Adds padding for multi-digit counts
  backgroundColor: theme.palette.danger[300],
  right: 10,
  top: 0,
  borderRadius: "12px", // Rounded edges for dynamic content
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "translateX(50%)", // Optional for better positioning
  boxSizing: "border-box", // Ensures padding doesn’t affect dimensions
}));

function Count({ count }) {
  return (
    <div style={{ position: "relative" }}>
      <StyledDiv>
        <Typography variant="subtitle3" color={"white"}>
          {count}
        </Typography>
      </StyledDiv>
    </div>
  );
}

export default Count;
