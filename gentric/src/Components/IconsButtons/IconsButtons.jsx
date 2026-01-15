import React from 'react'
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function IconsButtons({ color, size, icon, aria, onClicks }) {
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

IconsButtons.propTypes = {
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icon: PropTypes.node,
    aria: PropTypes.string,
    onClicks: PropTypes.func,
};

IconsButtons.defaultProps = {
    color: 'default',
    size: 'medium',
    icon: null,
    aria: 'Icon-button',
    onClicks: () => { },
};

export default IconsButtons;
