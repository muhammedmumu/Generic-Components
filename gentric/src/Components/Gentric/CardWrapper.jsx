import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

export default function CardWrapper({
    header,
    footer,
    children,
    showDivider = false
}) {
    return (
        <Paper
            variant="outlined"
            className="gentric-container"
        >
            <Card className="gentric-card" sx={{ p: 0 }}>
                {header && (
                    <>
                        <Box className="gentric-header">
                            {header}
                        </Box>
                        {showDivider && <Divider />}
                    </>
                )}

                <Box className="gentric-content">
                    {children}

                    {footer && (
                        <Box className="gentric-footer">
                            {footer}
                        </Box>
                    )}
                </Box>
            </Card>
        </Paper>
    );
}

CardWrapper.propTypes = {
    header: PropTypes.node,
    footer: PropTypes.node,
    children: PropTypes.node.isRequired,
    showDivider: PropTypes.bool
};
