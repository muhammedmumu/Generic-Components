import { useMemo } from 'react';
import InputAdornment from '@mui/material/InputAdornment';


export function useInputProps({ icon } = {}) {
    return useMemo(() => {
        if (icon) {
            return {
                startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                ),
            };
        }

        return {};
    }, [icon]);
}