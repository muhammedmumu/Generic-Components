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

    if (type === 'autocomplete') {
        // Use provided options or fall back to default options
        const autocompleteOptions = options && options.length > 0 ? options : DEFAULT_AUTOCOMPLETE_OPTIONS;
        const defaultGetOptionLabel = (option) => option.label || '';
        const defaultIsOptionEqualToValue = (option, value) => option.value === value?.value;

        return (
            <Box className='gentric-compact-field'>
                <Autocomplete

                    options={autocompleteOptions}
                    value={value}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    getOptionLabel={getOptionLabel || defaultGetOptionLabel}
                    renderOption={renderOption}
                    isOptionEqualToValue={isOptionEqualToValue || defaultIsOptionEqualToValue}
                    fullWidth={fullWidth}

                    renderInput={(params) => (
                        <TextField sx={{ width: fullWidth ? '100%' : 'fit-content' }}
                            {...params}
                            label={label}
                            variant={variant}
                            placeholder={placeholder}
                            fullWidth={fullWidth}
                            size="small"
                            InputProps={{
                                ...params.InputProps,
                                ...inputProps,
                            }}
                        />
                    )}
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
    label: 'Label',
    variant: 'outlined',
    type: 'text',
    value: undefined,
    onChange: undefined,
    onInputChange: undefined,
    options: undefined,
    getOptionLabel: undefined,
    renderOption: undefined,
    isOptionEqualToValue: undefined,
    placeholder: undefined,
    fullWidth: true,
    className: undefined,
};

export default GentricTextField;
