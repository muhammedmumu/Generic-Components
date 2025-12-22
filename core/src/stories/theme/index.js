import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import overrides from "./overrides";
import { grey } from "@mui/material/colors";
import {
  Primary,
  PrimaryLight,
  PrimaryDark,
  PrimaryMedium,
  PrimaryContrast,
  Secondary,
  success,
  DrawerMainColor,
  ProgressBgColor,
} from "./constants";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: grey[50],
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1320,
      lg: 1550,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 16,
  },

  palette: {
    primary: {
      main: Primary,
      light: PrimaryLight,
      medium: PrimaryMedium,
      dark: PrimaryDark,
      contrastText: PrimaryContrast,
    },
    secondary: {
      main: Secondary,
    },
    success: {
      main: success,
    },
    drawer: {
      main: DrawerMainColor,
    },
    linearprogress: {
      main: ProgressBgColor,
    },
    grey: {
      [500]: "#8F95A3",
      [300]: "#EAEAED",
    },
    action: {
      disabledBackground: PrimaryContrast,
    },
    background: {
      default: "#eff4f7",
    },
    text: {
      primary: "#666",
    },
  },

  typography: {
    fontFamily: "Poppins",
    color: "black",
    button: {
      textTransform: "none",
    },

    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1.125",
    },
    h6: {
      fontSize: "1rem",
    },

    subtitle2: {
      fontSize: "0.875rem",
    },
    subtitle1: {
      fontSize: "0.6875rem",
    },
  },
});

theme.typography.h6 = {
  ...theme.typography.h6,
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.6rem",
  },
};
theme.props = {
  MuiButton: {
    disableRipple: true,
    disableFocusRipple: true,
    disableElevation: true,
  },
  MuiIconButton: {
    disableRipple: true,
    disableFocusRipple: true,
    disableElevation: true,
    size: "small",
  },
  MuiTextField: {
    InputLabelProps: {
      shrink: true,
      fontSize: 11,
      fontFamily: "Poppins",
      fontWeight: 500,
    },
    InputProps: {
      input: {
        background: "#F5F5F5",
        fontSize: 11,
        fontFamily: "Poppins",
        fontWeight: 500,
      },
    },
  },
  MuiCheckbox: {
    disableRipple: true,
    color: "primary",
  },
  MuiRadio: {
    disableRipple: true,
    color: "primary",
  },
  MuiSwitch: {
    color: "primary",
    disableRipple: true,
  },
};

theme.overrides = overrides(theme);

export default responsiveFontSizes(theme);
