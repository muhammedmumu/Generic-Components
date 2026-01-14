import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function GentricTables({ children, footer }) {
    return (
        <Paper
            variant="outlined"
            className="gentric-container"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden'
            }}
        >
            <Card
                className="gentric-card"
                sx={{
                    p: 0,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto'
                }}
            >
                {children}
            </Card>
            {footer && (
                <Box
                    className="gentric-footer"
                >
                    {footer}
                </Box>
            )}
        </Paper>
    )
}

