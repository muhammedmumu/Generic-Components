import Box from '@mui/material/Box'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';

const buttonConfig = {
    Download: {
        label: 'DownLoad',
        variant: 'outlined',
        icon: DownloadIcon,
    },
    Print: {
        label: 'Print',
        variant: 'outlined',
        color: 'secondary',
        icon: PrintIcon,
    },
    Share: {
        label: 'Share',
        variant: 'contained',
        icon: ShareIcon,
    }
};

export default function Footer({ button = [], buttonIcons = {} }) {
    const handleRender = () => {
        return button.map((btn, idx) => {
            const config = buttonConfig[btn];
            if (!config) return null;

            const IconComponent = buttonIcons[btn] || config.icon;

            return (
                <Box key={idx}>
                    <Button
                        variant={config.variant}
                        color={config.color || 'primary'}
                        startIcon={<IconComponent />}
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

