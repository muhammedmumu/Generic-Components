import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import overrides from "./overrides";
import {
    Primary,
    PrimaryLight,
    PrimaryDark,
    Secondary,
    success,
} from "./constants";

const theme = createTheme({

    shape: {
        borderRadius: 8,
    },
    palette: {
        primary: {
            main: Primary,
            light: PrimaryLight,
            dark: PrimaryDark,
        },
        secondary: {
            main: Secondary,
        },
        success: {
            main: success,
        },
        background: {
            default: "#f5f5f5",
        },
        text: {
            primary: "#333",
            secondary: "#666",
        },
    },
    typography: {
        fontWeightBold: 700,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        button: {
            textTransform: "none",
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem",
        },
        body2: {
            fontSize: "0.875rem",
        },
    },
});

theme.components = overrides(theme);

export default responsiveFontSizes(theme);
