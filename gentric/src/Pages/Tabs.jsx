import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function CustomTabs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const theme = useTheme();

    // Get current tab value from URL param, default to 0
    const currentValue = Number(searchParams.get('tab')) || 0;

    const handleChange = (event, newValue) => {
        setSearchParams({ tab: newValue });
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: theme.palette.divider }}>
            <Tabs
                value={currentValue}
                onChange={handleChange}
                TabIndicatorProps={{ style: { display: "none" } }}
                sx={{
                    "& .MuiTab-root": {
                        textTransform: "none",
                        fontWeight: 600,
                        borderTopLeftRadius: `${theme.shape.borderRadius * 1.5}px`,
                        borderTopRightRadius: `${theme.shape.borderRadius * 1.5}px`,
                        backgroundColor: theme.palette.grey?.[200] || "#e8eaed",
                        color: theme.palette.text.secondary,
                        marginRight: 1,
                        paddingX: 3,
                        minHeight: "45px",
                    },
                    "& .Mui-selected": {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                    },
                }}
            >
                <Tab label="CUSTOM SURVEYS" />
                <Tab label="EMAIL GROUPS" />
                <Tab label="SURVEY DESIGNS" />
                <Tab label="EMAIL TEMPLATES" />
            </Tabs>
        </Box>
    );
}
