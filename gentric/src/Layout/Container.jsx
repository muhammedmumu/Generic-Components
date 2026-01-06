import Box from '@mui/material/Box';

export default function Container({ children }) {
    return (
        <Box
            sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
            }}
        >
            {children}
        </Box>
    );
}
