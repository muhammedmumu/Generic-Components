import Box from '@mui/material/Box'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';

const buttonConfig = {
    Download: {
        label: 'Export',
        variant: 'outlined',
        icon: DownloadIcon,
        colorScheme: 'primary'
    },
    Print: {
        label: 'Print',
        variant: 'outlined',
        icon: PrintIcon,
        colorScheme: 'secondary'
    },
    Share: {
        label: 'Share',
        variant: 'contained',
        icon: ShareIcon,
        colorScheme: 'primary'
    }
};

export default function Footer({ button = [], buttonIcons = {} }) {
    const handleRender = () => {
        return button.map((btn, idx) => {
            const config = buttonConfig[btn];
            if (!config) return null;

            const IconComponent = buttonIcons[btn] || config.icon;
            const isOutlined = config.variant === 'outlined';
            const colorScheme = config.colorScheme;
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
            return (
                <Box key={idx}>
                    <Button
                        variant={config.variant}
                        startIcon={<IconComponent />}
                        sx={{
                            ...buttonSx,
                            ...(isOutlined ? {
                                border: 'none',
                                color: `${colorScheme}.main`,
                                '&:hover': {
                                    ...buttonSx['&:hover'],
                                    backgroundColor: `${colorScheme}.light`,
                                    border: 'none'
                                }
                            } : {
                                backgroundColor: `${colorScheme}.main`,
                                '&:hover': {
                                    ...buttonSx['&:hover'],
                                    backgroundColor: `${colorScheme}.dark`
                                }
                            })
                        }}
                    >
                        {config.label}
                    </Button>
                </Box>
            );
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

