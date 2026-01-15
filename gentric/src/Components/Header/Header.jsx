import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GentricTextField from '../TextField/TextField';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
export default function Header({
    title,
    titleIcon,
    actions,
    textFields = [],
    controls = [],
}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    {titleIcon}
                    <Box>
                        <Typography variant="h3" sx={{ p: '2px', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }, fontWeight: 700, textTransform: 'capitalize', color: 'text.primary', letterSpacing: '-0.5px', lineHeight: 1.2 }} >
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, '& .MuiIconButton-root': { transition: 'all 0.2s', '&:hover': { color: 'primary.main', transform: 'scale(1.05)' } } }} >
                    {actions}
                </Box>
            </Box>
            {/* mapping the textfields and controls */}
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'nowrap', gap: 2, alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px' }}>
                {textFields.map((textField, idx) => {
                    if (textField.type === 'label') {
                        return (
                            <Typography
                                key={idx}
                                variant="body2"
                                sx={{
                                    fontWeight: 500,
                                    color: 'text.secondary',
                                    whiteSpace: 'nowrap',
                                    ...textField.sx
                                }}
                            >
                                {textField.label}
                            </Typography>
                        );
                    }
                    return (
                        <GentricTextField
                            key={idx}
                            type={textField.type || 'text'}
                            label={textField.label}
                            placeholder={textField.placeholder}
                            value={textField.value}
                            onChange={textField.onChange}
                            onInputChange={textField.onInputChange}
                            options={textField.options}
                            getOptionLabel={textField.getOptionLabel}
                            renderOption={textField.renderOption}
                            isOptionEqualToValue={textField.isOptionEqualToValue}
                            icon={textField.icon}
                            variant={textField.variant}
                            fullWidth={false}
                            sx={{ width: 'fit-content', ...textField.sx }}
                        />
                    );
                })}
                {controls}
            </Box>
            <Divider />
        </Box >
    )

}

Header.propTypes = {
    title: PropTypes.string,
    titleIcon: PropTypes.node,
    actions: PropTypes.node,
    textFields: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['text', 'autocomplete', 'date', 'label']),
            label: PropTypes.string,
            placeholder: PropTypes.string,
            value: PropTypes.any,
            onChange: PropTypes.func,
            onInputChange: PropTypes.func,
            options: PropTypes.array,
            getOptionLabel: PropTypes.func,
            renderOption: PropTypes.func,
            isOptionEqualToValue: PropTypes.func,
            icon: PropTypes.node,
            variant: PropTypes.string,
            sx: PropTypes.object
        })
    ),
    controls: PropTypes.node
};

Header.defaultProps = {
    title: '',
    titleIcon: null,
    actions: null,
    textFields: [],
    controls: null,
};
