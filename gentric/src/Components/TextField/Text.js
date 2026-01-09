import { useMemo } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export function useInputProps({ type, icon } = {}) {
    return useMemo(() => {
        if (type === 'filter') {
            return {
                startAdornment: (
                    <InputAdornment position="start">
                        <FilterListIcon />
                    </InputAdornment>
                ),
            };
        }

        if (type === 'search') {
            return {
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            };
        }

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
    }, [type, icon]);
}