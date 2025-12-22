import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import overrides from "./overrides";
import {
  Primary,
  PrimaryLight,
  PrimaryDark,
  PrimaryMedium,
  PrimaryContrast,
  Secondary,
  success,
  DrawerMainColor,
  SecondaryDark,
  ProgressBgColor,
  darkBlue,
  adminDashIconBgColor,
} from "./constants";
import { grey } from "@mui/material/colors";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1000,
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
      dark: SecondaryDark,
    },
    success: {
      main: success,
      secondary: "#218620",
      [500]: "#2a9329",
      [700]: "#7BB42D",
      [100]: "#beecd9",
      [150]: "#5acf9e",
      [300]: "#388e3c",
      [800]: "#4caf50",
      [400]: "#80c128",
      [200]: "#01897B",
      [250]: "#71DA9D"
    },
    drawer: {
      main: DrawerMainColor,
    },
    linearprogress: {
      main: ProgressBgColor,
    },
    greyWithOpacity: {},
    grey: {
      [500]: "#8F95A3",
      [550]: "#8F95A324",
      [300]: "#EAEAED",
      [450]: "#6b6d828A",
      [400]: PrimaryContrast,
      [900]: "#6b6d8242",
      [700]: "#6B6D82",
      [200]: "#8f95a34d",
      [100]: "#d3d3d34e",
      [600]: "#6b6d821a",
      [150]: "#7c92aa",
      [250]: "#e2e2eb",
      [850]: "#6b6d82",
      [1000]: "#0000008a",
      [350]: "#6b6d8229",
      [50] : "#E4E4E4",
      [800]: "#bdbecc",
      [650]: "#e0e0e0",
    },
    black: {
      main: "black",
      [100]: "#787676",
      [150]: "#605f5f",
      [200]: "#666666",
      [250]: "#383e4c",
      [500]: "#2b3b5c",
      [400]: "#1e1e2c",
      [600]: "#383e4c",
      [300]: "#333333",
      [1000]: "#000000",
      [350]: "#9f9d9d"
    },
    blue: {
      [100]: "#d3e2f2",
      [500]: darkBlue,
      [300]: "#2196f3",
      [900]: "#0f5185",
      [1000]: "#007aff",
      [700]: "#374edd",
      [100]: "#D8EAFF",
    },
    lightBlue: {
      [100]: "#ECF5FF",
      [150]: "#f4f2ff",
      [300]: adminDashIconBgColor,
      [800]: "#0da9de",
      [200]: "#D9EDF7",
      [820]: "#0da9de0F",
      [250] : "#DDF3FA",
      [350]: "#0da9de40",
      [50]: "#037baf1A",
      [400]: "#99BBFF"

    },
    purple: {
      [100]: "#D9D5EC",
      [150]: "#f3f3fb",
      [200]: "#f2f2f9",
      [300]: "#edecf6",
    },
    lightgrey: {
      [100]: "#f3ebeb",
      [250]: "#f5f5f5",
      [150]: "#e7edf3",
      [200]: "#c0c0c0",
      [300]: "#3E4953",
      [500]: "#6b6b82",
      [600]: "#808080",
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
    graphFill: {
      main: grey[100],
    },
    SelecteMenu: {
      // main : SelectNav
    },
    warning: {
      main: "#ff9800",
      secondary: "#fda844",
      [100]: "#ff9800",
      [500]: "#663c00",
    },
    danger: {
      main: "#c2212a",
      [100]: "#e9cbcb",
      [300]: "#cf5a5a",
      [900]: "#a72928",
      [200]: "#9F2128"
    },
  },

  fontWeight: {
    Bold: 700,
    Medium: 500,
  },
  typography: {
    fontFamily: "Poppins",
    color: "black",
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightSimiBold: 600,

    button: {
      textTransform: "none",
    },
    h0: {
      fontSize: "2.3565rem", //37.704px
    },
    h1: {
      // fontSize: "2rem", //32px
      fontSize: "1.938rem", //31px
    },
    h2: {
      fontSize: "1.5rem", //24px
    },
    // h3: {
    //   fontSize: "1rem", //16px  (h3 & h6 are same and we are not using h3 in the project)
    // },
    h4: {
      fontSize: "1.25rem", //20px
    },
    h5: {
      fontSize: "1.125rem", //18px
    },
    h6: {
      fontSize: "1rem", //16px
    },

    subtitle2: {
      fontSize: "0.875rem", //14px
    },
    subtitle0: {
      fontSize: "0.813rem", //13px
    },
    subtitle3: {
      fontSize: "0.75rem", //12px
    },
    subtitle1: {
      fontSize: "0.6875rem", //11px
    },
  },
});

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  [theme.breakpoints.down("md")]: {
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
      variant: "standard",
    },
    InputProps: {
      input: {
        background: "#F5F5F5",
        fontSize: 11,
        fontFamily: "Poppins",
        fontWeight: 500,
        variant: "standard",
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

theme.components = overrides(theme);

export default responsiveFontSizes(theme);
