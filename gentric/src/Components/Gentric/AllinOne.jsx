import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function GentricTables({ children, footer }) {
    return (
        <Paper className="gentric-container" >
            <Card className="gentric-card" >
                {children}
            </Card>
            {footer && (
                <Box> {footer} </Box>
            )}
        </Paper>
    )
}

