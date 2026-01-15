import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function CustomTabs({ tabs }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const theme = useTheme();

    // Get current tab value from URL param, default to 0
    const currentValue = Number(searchParams.get('tab')) || 0;

    const handleChange = (event, newValue) => {
        setSearchParams({ tab: newValue });
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: theme.palette.divider }}>
            <Tabs value={currentValue} onChange={handleChange}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label || tab} />
                ))}
            </Tabs>
        </Box>
    );
}

CustomTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                label: PropTypes.string,
            })
        ])
    ),
};

CustomTabs.defaultProps = {
    tabs: [],
};

export default CustomTabs;
