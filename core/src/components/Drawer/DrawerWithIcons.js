import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { PropTypes } from "prop-types";
import useToggleHook from "../hooks/use-toggle-state";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const openedMixin = (theme, bgColor, width) => ({
  width: width,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: bgColor,
  overflowX: "hidden",
});

const closedMixin = (theme, bgColor) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: bgColor,
  overflowX: "hidden",

  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Logo = styled("img")(({ theme }) => ({
  height: (props) => props.logoHeight,
  width: (props) => props.logoWidth,
  marginTop: theme.spacing(1),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, bgColor, width, border, restStyles , restOpenStyles }) => ({
  width: width,
  flexShrink: 0,
  whiteSpace: "nowrap",
  "& .MuiDrawer-root": {
    "& .MuiPaper-root": {
      borderRight: "2px solid red",
    },
  },
  variants: [{
    props: (
      {
        open
      }
    ) => open,
    style: {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme, bgColor, width),
      ...restOpenStyles,
    }
  }, {
    props: (
      {
        open
      }
    ) => !open,
    style: {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme, bgColor, width, border),
      ...restStyles,
    }
  }]
}));

export default function DrawerWithIcons(props) {
  const {
    children,
    logoUrl,
    bgColor,
    width,
    menuStyles,
    variant,
    logoHeight,
    logoWidth,
    userName,
    restStyles,
    restOpenStyles,
    ...rest
  } = props;
  const { state, toggleComponent, setOpen } = useToggleHook();
  return (
    <Box>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Drawer
          variant={variant}
          open={state}
          bgColor={bgColor}
          width={width}
          restStyles={restStyles}
          restOpenStyles={restOpenStyles}
          {...rest}
        >
          <DrawerHeader
            sx={theme => ({
              backgroundColor: theme.palette.black[400]
            })}
          >
            <Box>
              {logoUrl && state && <Logo src={logoUrl} height={logoHeight} />}
            </Box>

            <IconButton onClick={toggleComponent}>
              <MenuIcon
                sx={{
                  ...menuStyles,
                }}
              />
            </IconButton>
          </DrawerHeader>
          {children({
            closeDrawer: toggleComponent,
            open: state,
            openDrawer: toggleComponent,
          })}
        </Drawer>
      </ClickAwayListener>
    </Box>
  );
}

DrawerWithIcons.propTypes = {
  logoUrl: PropTypes.string,
  logoHeight: PropTypes.number,
  logoWidth: PropTypes.number,
  bgColor: PropTypes.string,
  variant: PropTypes.string,
};

DrawerWithIcons.defaultProps = {
  width: 270,
  menuStyles: { color: "white" },
  variant: "permanent",
};
