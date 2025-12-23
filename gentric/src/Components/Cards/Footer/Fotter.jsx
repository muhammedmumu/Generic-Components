import Box from '@mui/material/Box'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

export const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 4px",
    marginTop: "8px",
    borderTop: "1px solid #e5e7eb",

    "& a": {
        fontSize: "14px",
        fontWeight: 500,
        color: "#2563eb",
        textDecoration: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",

        "&:hover": {
            textDecoration: "underline",
        },
    },
};

export default function Footer({ button = [] }) {
    const handleRender = () => {
        return button.map((btn, idx) => {
            const buttonSx = {
                px: 3,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.875rem',
                transition: 'all 0.3s',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }
            };

            if (btn === 'Download') return (
                <Box key={idx}>
                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        sx={{
                            ...buttonSx,
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                                ...buttonSx['&:hover'],
                                backgroundColor: 'primary.light',
                                borderColor: 'primary.dark'
                            }
                        }}
                    >
                        Export
                    </Button>
                </Box>
            );
            if (btn === 'Print') return (
                <Box key={idx}>
                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        sx={{
                            ...buttonSx,
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                            '&:hover': {
                                ...buttonSx['&:hover'],
                                backgroundColor: 'secondary.light',
                                borderColor: 'secondary.dark'
                            }
                        }}
                    >
                        Print
                    </Button>
                </Box>
            );
            if (btn === 'Share') return (
                <Box key={idx}>
                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        sx={{
                            ...buttonSx,
                            backgroundColor: 'primary.main',
                            '&:hover': {
                                ...buttonSx['&:hover'],
                                backgroundColor: 'primary.dark'
                            }
                        }}
                    >
                        Share
                    </Button>
                </Box>
            );
            return null;
        });
    };

    return (
        <Box
            sx={{
                mt: 2,
                mb: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap'
            }}
        >
            {handleRender()}
        </Box>
    )
}

