import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from '../Footer/Fotter.jsx';
import Buttons from '../Button/Button.jsx';
import PropTypes from 'prop-types';

export default function GentricCard({
    children,
    buttons
}) {
    return (
        <Paper

            variant="outlined"
            className="gentric-container"
        >
            <Card className="gentric-card" sx={{ p: 0 }}>
                {children}
            </Card>
            {buttons && buttons.length > 0 && (
                <Box className="gentric-footer">
                    <Footer>
                        {buttons.map((btn, index) => (
                            <Buttons
                                key={index}
                                label={btn.label}
                                startIcon={btn.startIcon}
                                endIcon={btn.endIcon}
                                typographyVariant={btn.typographyVariant}
                                variant={btn.variant || 'outlined'}
                                onClick={btn.onClick}
                                sx={btn.sx}
                            />
                        ))}
                    </Footer>
                </Box>
            )}
        </Paper>
    );
}

GentricCard.propTypes = {
    children: PropTypes.node.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
            startIcon: PropTypes.node,
            endIcon: PropTypes.node,
            onClick: PropTypes.func,
            sx: PropTypes.object,
            typographyVariant: PropTypes.string
        })
    )
};
