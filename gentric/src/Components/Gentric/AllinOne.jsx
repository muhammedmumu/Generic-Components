import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Fotter.jsx';
import useFetch from '../../Hooks/Fetch.jsx';
import Icons from '../IconsButtons/IconsButtons.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
const iconMap = {
    'Stars': StarsOutlinedIcon,
    'Dashboard': DashboardIcon,
    'TableChart': TableChartIcon,
    'Assessment': AssessmentIcon,
    'People': PeopleIcon,
    'Inventory': InventoryIcon,
};

export default function GentricTables({ children, title, titleIcons, button, headerIcons = [] }) {
    const { data } = useFetch();

    // Handle titleIcons as object or boolean for backwards compatibility
    // const titleIconConfig = typeof titleIcons === 'object' ? titleIcons : { icons: titleIcons };
    // const showTitleIcon = data.mockTables?.titleIcons?.icons || titleIconConfig.icons;
    // const iconType = data.mockTables?.titleIcons?.TypeIcon || titleIconConfig.TypeIcon || 'Stars';
    // const IconComponent = iconMap[iconType] || StarsOutlinedIcon;\


    const handleClick = () => {
        console.log("Icon clicked");
    }


    return (
        <Paper
            variant="outlined"
            className="gentric-container"
        >
            <Card className="gentric-card">
                <Box className="gentric-header">

                    <Header
                        title="Hello World"
                        titleIcon={<FavoriteIcon />}
                        actions={<Icons icon={<FavoriteIcon />} aria="favorite-icon" color="primary" size="medium"
                            onClicks={handleClick} />}
                    />

                    <Divider />
                </Box>

                <Box className="gentric-content">
                    {children}
                </Box>
            </Card>
            <Box className="gentric-footer">
                <Footer buttons={data.mockTables?.button || button} />
            </Box>
        </Paper>
    )
}

// {
//     <Box className="gentric-footer">
//         <Footer >
//             <Buttons label="Download" />
//             <Buttons variant='contained' label="Save" />
//         </Footer>
//     </Box>
// }
