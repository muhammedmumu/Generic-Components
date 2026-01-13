import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInputProps } from './Hooks/Text.jsx';

export default function GentricTextField({
    icon,
    label = 'Label',
    variant = 'outlined',
    type = 'text',
    value,
    onChange,
    onInputChange,
    options = [],
    getOptionLabel,
    renderOption,
    isOptionEqualToValue,
    placeholder,
    fullWidth = true,
    ...props
}) {
    const inputProps = useInputProps({ type, icon });

    if (type === 'autocomplete') {
        return (
            <Box sx={{ width: fullWidth ? '100%' : 'fit-content' }}>
                <Autocomplete
                    options={options}
                    value={value}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    getOptionLabel={getOptionLabel}
                    renderOption={renderOption}
                    isOptionEqualToValue={isOptionEqualToValue}
                    fullWidth={fullWidth}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            variant={variant}
                            placeholder={placeholder}
                            fullWidth={fullWidth}
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
            <Box sx={{ width: fullWidth ? '100%' : 'fit-content' }}>
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
        <Box sx={{ width: fullWidth ? '100%' : 'fit-content' }}>
            <TextField
                label={label}
                value={value}
                onChange={onChange}
                variant={variant}
                type={type === 'filter' || type === 'search' ? 'text' : type}
                placeholder={placeholder}
                fullWidth={fullWidth}
                InputProps={inputProps}
                {...props}
            />
        </Box>
    );
}
