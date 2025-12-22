import {
  PrimaryMedium,
  PrimaryDark,
  PrimaryContrast,
  GreyDark,
  DrawerMainColor,
  Primary,
  PrimaryLight,
  Secondary,
  success,
  SecondaryDark,
  DataGridMain,
  DataGridAltRowColor,
} from "./constants";
import { grey } from "@mui/material/colors";
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
        900: "#6b6d821a",
      },
      Typography: {
        subtitle1: {
          fontSize: 20,
        },
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      root: {
        color: DataGridMain,
        "& .MuiDataGrid-cell:focus": {
          outline: " none !important",
        },
        "& .MuiDataGrid-cell:focus": {
          outline: " none !important",
        },
        "& .MuiTablePagination-selectLabel": {
          fontSize: "11px",
          fontWeight: 500,
        },
        "& .MuiTablePagination-select": {
          fontSize: "11px",
          fontWeight: 500,
        },
        "& .MuiTablePagination-displayedRows": {
          fontSize: "11px",
          fontFamily: "Poppins",
          fontWeight: 500,
        },
        "& .MuiDataGrid-cell--textCenter": {
          fontSize: "12px !important",
          fontFamily: "Poppins",
          fontWeight: 500,
        },
        "& .MuiDataGrid-cell": {
          textAlign: "center",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#eeeeee ",
          outline: "none",
          "&$focus": {
            outline: "none !important",
          },
        },
        "& .MuiDataGrid-columnHeader:focus-within": {
          outline: "none",
          "&$focus": {
            outline: "none !important",
          },
        },
        "& .MuiDataGrid-cell:focus-within": {
          outline: "none",
          "&$focus": {
            outline: "none !important",
          },
        },

        "& .MuiDataGrid-colCell:focus": {
          outline: "none",
        },

        "& .MuiDataGrid-row:nth-child(odd)": {
          backgroundColor: DataGridAltRowColor,
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "700",
          fontSize: 12,
          fontFamily: "Poppins",
          color: "black",
          textTransform: "uppercase",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: 0,
          fontWeight: 500,
          fontSize: "11px",
          color: "#666666",
          // borderRight: "1px solid #e4e4e4",
          borderLeft: "1px solid #e4e4e4",
        },
        "& .MuiDataGrid-cell:first-child  ": {
          borderLeft: "none",
        },

        "& .MuiDataGrid-footerContainer": {
          fontSize: 12,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 11,
        fontFamily: "Poppins",
        fontWeight: "500",
        borderRadius: theme.spacing(1.2),
        textTransform: "capitalize",
        color: grey[50],
        "&.Mui-disabled": {
          //write styles for disable button here //
          backgroundColor: "#f5f5f5 !important",
        },
      },
    },
    variants: [
      {
        props: { variant: "danger" },
        style: {
          color: grey[50],
          backgroundColor: Secondary,
          "&:hover": {
            backgroundColor: SecondaryDark,
          },
        },
      },
      {
        props: { variant: "text" },
        style: {
          color: Primary,
          ":hover": {
            color: Primary,
            backgroundColor: grey[50],
          },
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          color: Primary,
          ":hover": {
            color: Primary,
            backgroundColor: ` ${grey[50]} !important `,
          },
        },
      },
      {
        props: { variant: "contained" },
        style: {
          color: grey[50],
          backgroundColor: Primary,
          ":hover": {
            color: grey[50],
            backgroundColor: Primary,
          },
        },
      },
      {
        props: { variant: "primary" },
        style: {
          color: grey[50],
          backgroundColor: "#2196F3",
          ":hover": {
            color: grey[50],
            backgroundColor: "#0FA9DE",
          },
        },
      },
      {
        props: { variant: "success" },
        style: {
          color: grey[50],
          backgroundColor: "#218620",
          "&:hover": {
            color: grey[50],
            backgroundColor: "#388e3c",
          },
        },
      },
    ],
  },

  MuiInput: {
    styleOverrides: {
      root: {
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
        "& .MuiInputBase-input .Mui-disabled": {
          color: "#3E4953",
          WebkitTextFillColor: "#3E4953 !important",
        },
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        backgroundColor: "white",
        color: "#f44336 !important",
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      listbox: {
        fontSize: 11,
      },
      root: {
        "& input::placeholder": {
          fontSize: 11,
          fontWeight: 500,
          // paddingLeft: 10,
        },
        "& .MuiAutocomplete-listbox .MuiAutocomplete-option": {
          fontSize: 11,
        },
        "& .MuiAutocomplete-endAdornment": {
          backgroundColor: "inherit",
          height: 30,
          marginTop: -2,
          borderRadius: "8px",
          "& .MuiSvgIcon-root": {
            marginTop: 7,
          },
          "& input": {
            fontSize: 11,
          },
          "& .MuiInputBase-input": {
            fontSize: 11,
          },
          "& .MuiInputBase-input .Mui-disabled": {
            color: "#3E4953",
            WebkitTextFillColor: "#3E4953 !important",
          },
        },
        "& .MuiFormControl-root ": {
          borderRadius: 10,
        },
        "& > .MuiAutocomplete-root .MuiFormControl-root .MuiInputBase-root": {
          boxShadow: "none",
          flexWrap: "nowrap",
          overflowX: "scroll",
          cursor: "default",
          position: "initial",
          height: 44,
        },

        "& > .MuiAutocomplete-inputRoot ": {
          border: "0px",
          boxShadow: "none",
        },
        "& >": {
          // backgroundColor: "#f5f5f5",
          border: "0px",
          boxShadow: "none",
        },
        "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input  ": {
          border: "0px",
          width: "92%",
          boxShadow: "none",
          paddingLeft: 10,
          height: 23,
        },
      },
      tag: {
        fontSize: 11,
        fontWeight: 500,
      },
      popper: {
        width: "fit-content",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "standard",
      slotProps: {
        inputLabel: {
          shrink: true,
          fontSize: 11,
          fontFamily: "Poppins",
          fontWeight: 500,
          variant: "standard",
        }
      },
    },
    styleOverrides: {
      root: {
        fontSize: 11,
        fontFamily: "Poppins",
        fontWeight: 500,
        minWidth: 0,
        border: "0px",
        // backgroundColor: "#f5f5f5",
        boxShadow: "none",
        "&$focused": {
          borderColor: "green",
        },
        "&& .MuiInput-underline:before ": {
          borderBottom: "none",
        },
        "& .MuiInputBase-input .Mui-disabled": {
          color: "#3E4953",
          WebkitTextFillColor: "#3E4953 !important",
        },
      },
      input: {
        backgroundColor: "#f5f5f5",
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      shrink: {
        transform: "translate(14px, -8px) scale(1) !important",
      },
      outlined: {
        transform: "translate(14px, 16px) scale(1)",
      },
      root: {
        backgroundColor: "#f5f5f5",
        border: "none",
        borderRadius: "8px",
        inputMultiline: {
          fontSize: 11,
          fontWeight: 500,
          // background: PrimaryContrast,
          padding: theme.spacing(1),
          paddingLeft: 10,
          color: "#3E4953",
          borderRadius: 8,
        },
        input: {
          // background: PrimaryContrast,
          padding: theme.spacing(1),
          color: "#3E4953",
          fontSize: 11,
          fontWeight: 500,
          borderRadius: 8,
          paddingLeft: 10,
          "& .MuiInputBase-input .Mui-disabled": {
            color: "#3E4953",
            WebkitTextFillColor: "#3E4953 !important",
          },
          "&$disabled": {
            cursor: "not-allowed",
            color: "#3E4953",
            WebkitTextFillColor: "#3E4953 !important",
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: "3px",
        colorPrimary: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 16,
        // fontWeight: 500,
        fontFamily: "Poppins",
        marginLeft: 2,
      },
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        // fontSize: 16,
        // fontWeight: 500,
        marginLeft: 2,

        marginBottom: 0,
        // paddingLeft: 10,
        "&:hover": {
          color: PrimaryMedium,
        },
      },
    },
  },

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
    defaultProps: {
      variant: "standard",
    },
    styleOverrides: {
      root: {
        fontSize: 11,
        fontWeight: 500,
        borderRadius: 8,
        paddingLeft: 10,
        "& span.MuiTypography-root .MuiListItemText-primary .MuiTypography-body1 .MuiTypography-displayBlock":
          {
            // fontSize: 1,
          },
        "& .MuiListItem-root": {
          borderTop: "1px solid rgb(3,15,252)",
          borderRadius: 8,
        },
        "&:before": {
          borderBottom: "none",
        },
      },
    },
  },

  MuiStepper: {
    styleOverrides: {
      root: {
        padding: 15,
        "& .MuiStepConnector-line": {
          borderColor: "#bdbdbd",
        },
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: 11,
        borderRadius: 0,
        fontWeight: 500,
      },
    },
  },
  MuiSwitch: {},

  MuiAlert: {
    message: {
      fontSize: 11,
    },
  },

  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: DrawerMainColor,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        maxWidth: 500,
        fontSize: 11,
        fontWeight: 500,
        maxWidth: 302,
        backgroundColor: "white",
        color: "#383E4C",
        justifyContent: "center",
        padding: 10,
      },
    },
  },
});
export default Override;
