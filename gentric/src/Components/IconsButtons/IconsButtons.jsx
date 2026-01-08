import React from 'react'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


export default function IconsButtons({ color, size, icon, aria, onClicks }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <IconButton
                aria-label={aria || "Icon-button"}
                color={color}
                size={size}
                onClick={onClicks}
            >
                {icon}
            </IconButton>

        </Box>
    )
}
