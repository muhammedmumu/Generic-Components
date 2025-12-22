import * as React from "react";
import { styled,  } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { PropTypes } from "prop-types";
const drawerWidth = 240;
const openedMixin = (theme, bgColor) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: bgColor,
});

const closedMixin = (theme, bgColor) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: bgColor,

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({
  theme
}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [{
    props: (
      {
        open
      }
    ) => open,
    style: {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }
  }, {
    props: (
      {
        open
      }
    ) => !open,
    style: {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }
  }]
}));

export default function PresistantDrawerWithIcons(props) {
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
 
  // storing drawer state in local storage
  const drawerOpenKey = 'drawerOpen';
  const defaultOpen = localStorage.getItem(drawerOpenKey) === 'true';
  const [open, setOpen] = React.useState(defaultOpen);

  const Logo = styled("img")(({ theme }) => ({
    height: (props) => props.logoHeight,
    width: (props) => props.logoWidth,
    marginTop: theme.spacing(1),
  }));
  React.useEffect(() => {
    localStorage.setItem(drawerOpenKey, open);
  }, [open]);
  
  return (
    <Drawer
      variant={"permanent"}
      open={open}
      bgColor={bgColor}
      width={width}
      restStyles={restStyles}
      restOpenStyles={restOpenStyles}
      {...rest}
    >
      <DrawerHeader
        sx={theme => ({
          backgroundColor: theme.palette.black[400],
          pl: !open ? 2.5 : 1,
          minHeight: "78px !important"
        })}
      >
        {logoUrl && open && <Logo src={logoUrl} height={logoHeight} />}
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon
            sx={{
              ...menuStyles,
            }}
          />
        </IconButton>
      </DrawerHeader>
      {children({
        closeDrawer: () => setOpen(!open),
        open: open,
        openDrawer: () => setOpen(!open),
      })}
    </Drawer>
  );
}
PresistantDrawerWithIcons.propTypes = {
  logoUrl: PropTypes.string,
  logoHeight: PropTypes.number,
  logoWidth: PropTypes.number,
  bgColor: PropTypes.string,
  variant: PropTypes.string,
};
PresistantDrawerWithIcons.defaultProps = {
  width: 270,
  menuStyles: { color: "white" },
  variant: "permanent",
};