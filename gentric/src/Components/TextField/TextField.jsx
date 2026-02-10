import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInputProps } from './Hooks/Text.jsx';

// Default options for autocomplete when none are provided
const DEFAULT_AUTOCOMPLETE_OPTIONS = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
];

function GentricTextField({
    icon,
    label,
    variant,
    type,
    value,
    onChange,
    onInputChange,
    options,
    getOptionLabel,
    renderOption,
    isOptionEqualToValue,
    placeholder,
    fullWidth,
    className,
    ...props
}) {
    const inputProps = useInputProps({ type, icon });

    // Autocomplete: Controlled, content-based width, null default
    if (type === 'autocomplete') {
        const autocompleteOptions = options && options.length > 0 ? options : DEFAULT_AUTOCOMPLETE_OPTIONS;
        const defaultGetOptionLabel = (option) => option?.label || '';
        const defaultIsOptionEqualToValue = (option, val) => option?.value === val?.value;

        // Ensure value is null if empty (never undefined)
        const controlledValue = value === undefined || value === '' ? null : value;

        return (
            <Box
                className='gentric-compact-field'
                sx={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    minWidth: '120px',
                }}
            >
                <Autocomplete
                    options={autocompleteOptions}
                    value={controlledValue}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    getOptionLabel={getOptionLabel || defaultGetOptionLabel}
                    renderOption={renderOption}
                    isOptionEqualToValue={isOptionEqualToValue || defaultIsOptionEqualToValue}
                    size="small"
                    PopperProps={{
                        placement: 'bottom-start',
                        modifiers: [
                            {
                                name: 'flip',
                                enabled: false,
                            },
                            {
                                name: 'preventOverflow',
                                enabled: true,
                                options: {
                                    altAxis: true,
                                    altBoundary: true,
                                    tether: true,
                                    rootBoundary: 'viewport',
                                },
                            },
                        ],
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder={placeholder}
                            variant={variant || 'outlined'}
                            size="small"
                            InputProps={{
                                ...params.InputProps,
                                ...inputProps,
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    width: 'auto',
                                    minWidth: '120px',
                                },
                                '& .MuiInputBase-input': {
                                    padding: '6px 8px',
                                    width: 'auto',
                                    minWidth: '60px',
                                },
                            }}
                        />
                    )}
                    sx={{
                        width: 'fit-content',
                        minWidth: '120px',
                        '& .MuiAutocomplete-inputRoot': {
                            padding: '2px 8px',
                            paddingRight: '39px',
                            width: 'auto !important',
                        },
                        '& .MuiAutocomplete-endAdornment': {
                            position: 'absolute',
                            right: '4px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        },
                    }}
                    {...props}
                />
            </Box>
        );
    }

    if (type === 'date') {
        return (
            <Box className='gentric-compact-field' >
                <TextField

                    type="date"
                    label={label}
                    value={value}
                    onChange={onChange}
                    variant={variant}
                    placeholder={placeholder}
                    fullWidth={fullWidth}
                    InputLabelProps={{ shrink: true }}
                    InputProps={inputProps}
                    {...props}
                />
            </Box>
        );
    }

    return (
        <Box className='gentric-compact-field'>
            <TextField
                label={label}
                value={value || ''}
                onChange={onChange}
                variant={variant}
                type={type === 'filter' || type === 'search' ? 'text' : type}
                placeholder={placeholder}
                fullWidth={fullWidth}
                InputProps={inputProps}
                size="small"
                {...props}
            />
        </Box>
    );
}

GentricTextField.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
    type: PropTypes.oneOf(['text', 'autocomplete', 'date', 'filter', 'search', 'number', 'password', 'email']),
    value: PropTypes.any,
    onChange: PropTypes.func,
    onInputChange: PropTypes.func,
    options: PropTypes.array,
    getOptionLabel: PropTypes.func,
    renderOption: PropTypes.func,
    isOptionEqualToValue: PropTypes.func,
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
};

GentricTextField.defaultProps = {
    icon: null,
    label: null,
    variant: 'outlined',
    type: 'text',
    value: null,
    onChange: undefined,
    onInputChange: undefined,
    options: undefined,
    getOptionLabel: undefined,
    renderOption: undefined,
    isOptionEqualToValue: undefined,
    placeholder: null,
    fullWidth: true,
    className: undefined,
};

export default GentricTextField;
