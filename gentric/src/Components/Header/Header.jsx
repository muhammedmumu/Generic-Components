import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GentricTextField from '../TextField/TextField';
export default function Header({ title, titleIcon, actions, type = 'text', textlabel = 'Search', icon, field = false }) {
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
                <Box sx={{ display: 'flex', gap: 1, '& .MuiIconButton-root': { backgroundColor: 'background.default', transition: 'all 0.2s', '&:hover': { backgroundColor: 'primary.main', color: 'white', transform: 'scale(1.05)' } } }} >
                    {actions}
                </Box>
            </Box>
            <Box >
                {field ?
                    <GentricTextField
                        type={type}
                        label={textlabel}
                        icon={icon}
                    /> : null}
            </Box>
        </Box >
    )
}
