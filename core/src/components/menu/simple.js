import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function SimpleMenu({
  className,
  Icon,
  options = [],
  onMenuClick,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={className}
        size="large">
        <Icon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options &&
          options.map((item) => (
            <MenuItem
              onClick={() => {
                handleClose();
                item.value && onMenuClick && onMenuClick(item);
                item.onClick && item.onClick(item);
              }}
            >
              <ListItemIcon>{<item.Icon />}</ListItemIcon>
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: { variant: "body2" }
                }}
              />
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}
