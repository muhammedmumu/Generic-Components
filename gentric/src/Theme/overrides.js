import {
    Primary,
    DataGridMain,
    DataGridAltRowColor,
    TabSelectedBg,
    TabSelectedText,
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
            "*::-webkit-scrollbar-track": {
                background: "#f1f1f1",
            },
            "*::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "4px",
            },
            "*::-webkit-scrollbar-thumb:hover": {
                background: "#555",
            },
        },
    },

    MuiDataGrid: {
        styleOverrides: {
            root: {
                color: DataGridMain,
                border: "none",
                "& .MuiDataGrid-cell:focus": {
                    outline: "none",
                },
                "& .MuiDataGrid-cell:focus-within": {
                    outline: "none",
                },
                "& .MuiDataGrid-columnHeader:focus": {
                    outline: "none",
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
                    backgroundColor: "#ffffff",
                    outline: "none",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                },
                // "& .MuiDataGrid-cell": {
                //     fontWeight: 500,
                //     fontSize: "11px",
                //     color: "#666666",
                //     border: "none",
                // },
                "& .MuiDataGrid-columnHeader": {
                    // borderRight: 0,
                    // borderColor: "divider",
                    border: "none",
                },
                borderRadius: 0,
                "& .MuiDataGrid-columnHeader:focus-within": {
                    outline: "none",
                },
                "& .MuiDataGrid-row:nth-of-type(odd)": {
                    backgroundColor: DataGridAltRowColor,
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
                // "& .MuiDataGrid-cell--withRenderer.Mui-selected": {
                //     backgroundColor: "transparent",
                // },
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
                fontSize: '0.875rem',
                fontWeight: 600,
                borderRadius: theme.spacing(1),
                textTransform: 'none',
                padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
                transition: 'all 0.3s',
                color: '#000000', // Default label color
                '& .MuiButton-startIcon, & .MuiButton-endIcon': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid currentColor',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    margin: '0 4px',
                    color: Primary, // Default icon color
                },
                '& .MuiTypography-root': {
                    color: '#000000',
                    fontSize: '0.875rem',
                    lineHeight: 1.75, // Default label text color
                },
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }
            },
            contained: {
                color: '#fff',
                fontSize: '12px',
                lineHeight: 'normal',



                backgroundColor: Primary,
                '& .MuiTypography-root': {
                    color: '#fff',
                },
                '&:hover': {
                    backgroundColor: Primary,
                    opacity: 0.9,
                },
            },
            outlined: {
                border: 'none',
                color: '#000000',
                borderColor: 'transparent',
                '&:hover': {
                    border: 'none',
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(15, 169, 222, 0.04)',
                },
            },
            text: {
                color: '#000000',
                '&:hover': {
                    backgroundColor: 'rgba(15, 169, 222, 0.04)',
                },
            },
        },
    },

    MuiIconButton: {
        styleOverrides: {
            root: {
                color: "#dbdbdb",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                borderRadius: 15,
                elevation: 3,
                "&.gentric-card": {
                    "& .gentric-header": {
                        padding: theme.spacing(2),
                        paddingBottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: theme.spacing(2),
                        alignItems: "center",

                    },
                    "& .gentric-content": {
                        height: "calc(100% - 120px)",
                        overflowY: "auto",
                        padding: theme.spacing(2),
                        paddingTop: 0,
                        paddingBottom: 0,
                    },
                },
            },
        },
    },

    MuiPaper: {
        styleOverrides: {
            root: {
                "&.gentric-container": {
                    width: "auto",
                    height: "fit-content",
                    marginBottom: theme.spacing(3),
                    "& .gentric-footer": {
                        display: 'flex',
                        gap: 1,
                        justifyContent: 'space-between',


                    },
                },
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
                marginBottom: 5

            },
        },
    },

    MuiTypography: {
        styleOverrides: {
            root: {
                color: "#333",
            },
            h1: {
                color: "#000",
            },
            h2: {
                color: "#000",
            },
            h3: {
                color: "#000",
            },
            h4: {
                color: "#000",
            },
            h5: {
                color: "#000",
            },
            h6: {
                fontWeight: 600,
                color: "#000",
            },
            body1: {
                color: "#333",
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
                    fontSize: "0.875rem",
                    borderTopLeftRadius: theme.spacing(1.5),
                    borderTopRightRadius: theme.spacing(1.5),
                    backgroundColor: theme.palette.grey?.[200] || "#e8eaed",
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1),
                    paddingLeft: theme.spacing(3),
                    paddingRight: theme.spacing(3),
                    minHeight: "45px",
                },
                "& .MuiTab-root.Mui-selected": {
                    backgroundColor: TabSelectedBg,
                    color: TabSelectedText,
                },
                "& .MuiTabs-indicator": {
                    display: "none",
                },
            },
        },
    },

    MuiTab: {
        styleOverrides: {
            root: {
                fontSize: "0.875rem",
                minHeight: "45px",
                textTransform: "none",
                "&.Mui-selected": {
                    color: Primary,
                    fontWeight: 600,
                },
            },
        },
    },

    // MuiTextField: {
    //     styleOverrides: {
    //         root: {
    //             "& .MuiInputBase-root": {
    //                 fontSize: "0.875rem",
    //             },
    //             "& .MuiInputLabel-root": {
    //                 fontSize: "0.875rem",
    //             },
    //         },
    //     },
    // },

    MuiInputBase: {
        styleOverrides: {
            root: {
                fontSize: "0.875rem",
            },
            input: {
                fontSize: "0.875rem",
            },
        },
    },

    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: Primary,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: Primary,
                },
            },
        },
    },

    MuiTableHead: {
        styleOverrides: {
            root: {
                "& .MuiTableCell-head": {
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    backgroundColor: "#f5f5f5",
                },
            },
        },
    },

    MuiTableCell: {
        styleOverrides: {
            root: {
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: theme.spacing(1.5),
            },
            head: {
                fontWeight: 700,
            },
        },
    },

    MuiChip: {
        styleOverrides: {
            root: {
                fontSize: "0.75rem",
                fontWeight: 500,
            },
        },
    },

    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: 12,
            },
        },
    },

    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontSize: "1.125rem",
                fontWeight: 600,
            },
        },
    },

    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                fontSize: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
            },
        },
    },

    MuiAlert: {
        styleOverrides: {
            root: {
                fontSize: "0.875rem",
            },
        },
    },

    MuiMenuItem: {
        styleOverrides: {
            root: {
                fontSize: "0.875rem",
                "&.Mui-selected": {
                    backgroundColor: "rgba(15, 169, 222, 0.08)",
                    "&:hover": {
                        backgroundColor: "rgba(15, 169, 222, 0.12)",
                    },
                },
            },
        },
    },

    MuiSelect: {
        styleOverrides: {
            select: {
                fontSize: "0.875rem",
            },
        },
    },

    MuiTextField: {
        styleOverrides: {
            root: {
                '&.gentric-compact-field': {
                    '& .MuiOutlinedInput-root': {
                        height: 38,
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        padding: 'auto',
                        width: '150px',
                    },
                },
            },
        },
    },

    MuiAutocomplete: {
        styleOverrides: {
            root: {
                '&.gentric-compact-field': {
                    '& .MuiOutlinedInput-root': {
                        height: 38,
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        padding: 'auto',

                    },
                },
            },
        },
    },

    // MuiInputBase: {
    //     styleOverrides: {
    //         root: {
    //             width: 'fit-content',
    //             maxWidth: '150px',
    //             '&.gentric-compact-field': {
    //                 width: 'max-content',
    //                 maxWidth: '150px',
    //             },
    //         },
    //     },
    // },

    MuiInputLabel: {
        styleOverrides: {
            root: {
                paddingRight: ' 4px',
                '&.gentric-compact-field': {
                    fontSize: '0.85rem',
                    color: '#667085',
                },
            },
        },
    },
});

export default Override;
