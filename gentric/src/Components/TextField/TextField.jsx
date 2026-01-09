import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInputProps } from './Text.js';

export default function GentricTextField({
    icon,
    label = 'Label',
    variant = 'outlined',
    type = 'text',
    value,
    onChange,
    placeholder,
    fullWidth = true,
    ...props
}) {
    const inputProps = useInputProps({ type, icon });

    return (
        <Box sx={{ width: '100%' }}>
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
