import {
  Primary,
  PrimaryLight,
  PrimaryMedium,
  PrimaryDark,
  PrimaryContrast,
  GreyDark,
  ThemeBg,
  ThemePrimary,
  BodyGrey,
  ProgressBgColor,
} from "./constants";
import { borders } from "@mui/system";
import { orange, pink, green, red, grey } from "@mui/material/colors";

const Override = (theme) => ({
  MuiCssBaseline: {
    "@global": {
      "*": {
        "scrollbar-width": "thin",
      },
      "*::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
      },
      ul: {
        marginTop: "revert",
        marginBottom: "revert",
      },
      label: {
        marginBottom: "unset",
      },
      grey: {
        500: "#2b3b5c",
        300: "#EAEAED",
        600: "#CCCDD3",
      },
      Typography: {
        subtitle1: {
          fontSize: 20,
        },
      },
    },
  },
  MuiButton: {
    root: {
      borderRadius: theme.spacing(0.5),
      textTransform: "capitalize",
      fontSize: 11,
      fontFamily: "Poppins",
      fontWeight: "500",
    },
    contained: {
      boxShadow: "none",
      "&:hover,&:focus": {
        boxShadow: "none",
      },
    },
    textPrimary: {
      border: "1px solid transparent",
      "&:focus": {
        border: "1px solid currentColor",
      },
      "&:hover": {
        backgroundColor: PrimaryContrast,
      },
      "&:active": {
        backgroundColor: GreyDark,
        border: "1px solid transparent",
      },
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: PrimaryMedium,
      },
      "&:active": {
        backgroundColor: PrimaryDark,
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        height: 13,
        borderRadius: 5,
        color: "red",
      },
      bar: {
        borderRadius: 5,
        backgroundColor: ProgressBgColor,
      },
      colorPrimary: {
        backgroundColor: grey[theme.palette.mode === "light" ? 200 : 700],
      },
    },
  },
  MuiInputBase: {
    input: {
      background: PrimaryContrast,
      padding: theme.spacing(1),
      color: "#3E4953",
      fontSize: 11,
      fontWeight: 500,
      fontFamily: "Poppins",
      borderRadius: 8,
      "&$disabled": {
        cursor: "not-allowed",
      },
    },
    inputMultiline: {
      fontSize: 11,
      fontWeight: 500,
      fontFamily: "Poppins",
      background: PrimaryContrast,
      padding: theme.spacing(1),
      color: "#3E4953",
      borderRadius: 8,
    },
  },
  MuiInput: {
    fontSize: 11,
    fontWeight: 500,
    fontFamily: "Poppins",
    underline: {
      "&:before": {
        borderBottom: "none",
      },
      "&$disabled:before": {
        borderBottomStyle: "none",
      },
    },
  },
  MuiInputLabel: {
    fontSize: 11,
    fontWeight: 500,
    fontFamily: "Poppins",
  },

  MuiAutocomplete: {
    inputRoot: {
      background: PrimaryContrast,
      padding: theme.spacing(1),
      borderRadius: 8,
      fontSize: 11,
      fontWeight: 500,
      fontFamily: "Poppins",
    },
    input: {
      // leftPadding: theme.spacing(1),
    },

    paper: {
      fontSize: 11,
      fontWeight: 500,
      fontFamily: "Poppins",
      "& > *::-webkit-scrollbar": {
        width: "5px",
        height: "5px",
      },
      "& > *::-webkit-scrollbar-track": {
        background: "#ffffff",
      },
      "& > *::-webkit-scrollbar-thumb": {
        backgroundColor: "#6b6d82",
        borderRadius: "4px",
        border: "1px solid #ffffff",
      },
    },
    option: {
      fontSize: 11,
    },
  },
  MuiIconButton: {
    colorPrimary: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },

  MuiFormLabel: {
    root: {
      // color: "red"
      root: {
        fontSize: 11,
        fontFamily: "Poppins",
        fontWeight: 500,
        marginBottom: 0,
      },

      "&:hover": {
        color: PrimaryMedium,
      },
    },
  },
  // MuiMenuItem : {
  //   root : {
  //     fontSize : 11,
  //     fontFamily : "Poppins",
  //     fontWeight :500,
  //   }
  // },

  MuiListItem: {
    root: {
      "&.active": {
        position: "relative",
      },
    },
  },
  MuiListItemIcon: {
    fontSize: 11,
    fontFamily: "Poppins",
    fontWeight: 500,
    root: {
      marginLeft: theme.spacing(2),
      minWidth: theme.spacing(4),
    },
  },
  MuiMenuItem: {
    root: {
      borderRadius: 10,
      fontSize: 14,
      fontFamily: "Poppins",
      fontWeight: 500,
      "&$selected": {
        backgroundColor: "transparent",
      },
    },
  },
  MuiTabs: {
    color: "white",
    indicator: {
      backgroundColor: "white",
    },
  },
  MuiTab: {
    // color: "white",
    textTransform: "uppercase",
    fontFamily: "Poppins",
    fontWeight: 700,
    root: {
      "& a:hover .a:focus": {
        textDecoration: "none",
      },

      backgroundColor: "#c2212a",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      fontFamily: "Poppins",
      textTransform: "capitalize",
      // color: "white",
      fontWeight: 600,
      fontSize: 12,
      "&$selected": {
        backgroundColor: "white",
        color: "#c2212a",
        outline: "white",

        "&:hover": {
          textDecoration: "none",
          color: "#c2212a",
        },

        "& a": {
          "&:focus": {
            outline: "white",
          },
        },
      },
    },
  },
  MuiSelect: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 300,
    selectMenu: {
      borderRadius: 10,
      fontSize: 11,
      fontFamily: "Poppins",
      fontWeight: 300,
    },
  },
  MuiSwitch: {},

  MuiDataGrid: {
    root: {
      borderRadius: 0,
    },
  },
  MuiAlert: {
    message: {
      fontSize: 11,
    },
  },
  MuiDrawer: {
    root: {
      background: "red",
    },
  },
  MuiTooltip: {
    tooltip: {
      maxWidth: 500,
      fontSize: 11,
      fontWeight: 500,
      maxWidth: 302,
      backgroundColor: "white",
      color: "#383E4C",
      justifyContent: "center",
      padding: 10,
      fontFamily: "Poppins",
    },
  },
});
export default Override;
