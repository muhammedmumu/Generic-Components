import {
    Primary,
    DataGridMain,

} from "./constants";


const Override = (theme) => ({
    MuiCssBaseline: {
        styleOverrides: {
            "*": {
                scrollbarWidth: "thin",
            },
            "*::-webkit-scrollbar": {
                width: "4px",
                height: "4px",
            },
        },
    },

    MuiDataGrid: {
        styleOverrides: {
            root: {
                color: DataGridMain,
                "& .MuiDataGrid-cell:focus": {
                    // outline: "none !important",
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
                    fontWeight: 500,
                },
                "& .MuiDataGrid-cell": {
                    fontWeight: 500,
                    fontSize: "11px",
                    color: "#666666",
                    border: "none",


                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#eeeeee",
                    outline: "none",
                },
                "& .MuiDataGrid-columnHeader:focus-within": {
                    outline: "none",
                },
                "& .MuiDataGrid-row:nth-of-type(odd)": {
                    backgroundColor: "#e7f8fe",
                },
                "& .MuiDataGrid-row:nth-of-type(even)": {
                    backgroundColor: "#ffffff",
                },
                "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#d4d4f7 !important",
                },
                "& .MuiDataGrid-row.Mui-selected": {
                    backgroundColor: "#e6e6fa !important",
                },
                "& .MuiDataGrid-row.Mui-selected:hover": {
                    backgroundColor: "#c9c9ef !important",
                },
                "& .MuiDataGrid-cell--withRenderer.Mui-selected": {
                    backgroundColor: "transparent",
                },
                "& .MuiDataGrid-row:focus, & .MuiDataGrid-row:focus-within": {
                    outline: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                    fontWeight: "700",
                    fontSize: 12,
                    color: "black",
                    textTransform: "uppercase",
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
                fontWeight: "500",
                borderRadius: theme.spacing(0.5),
                textTransform: "capitalize",
            },
            contained: {
                color: "#fff",
                backgroundColor: Primary,
                "&:hover": {
                    backgroundColor: Primary,
                    opacity: 0.9,
                },
            },
            outlined: {
                color: Primary,
                borderColor: Primary,
                "&:hover": {
                    borderColor: Primary,
                    backgroundColor: "rgba(15, 169, 222, 0.04)",
                },
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 12,
                elevation: 3,
            },
        },
    },

    MuiLink: {
        styleOverrides: {
            root: {
                color: Primary,
                textDecoration: "none",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 500,
                "&:hover": {
                    textDecoration: "underline",
                },
            },
        },
    },

    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: "#e0e0e0",
            },
        },
    },

    MuiTypography: {
        styleOverrides: {
            root: {
                color: "#333",
            },
            h6: {
                fontWeight: 600,
                color: "#000",
            },
            body2: {
                fontSize: "0.875rem",
                color: "#666",
            },
        },
    },

    MuiTabs: {
        styleOverrides: {
            root: {
                "& .MuiTab-root": {
                    textTransform: "none",
                    fontWeight: 600,
                },
            },
        },
    },

    MuiTab: {
        styleOverrides: {
            root: {
                fontSize: "0.875rem",
                minHeight: "45px",
                "&.Mui-selected": {
                    fontWeight: 600,
                },
            },
        },
    },
});

export default Override;
