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
import Report from '@mui/icons-material/AnalyticsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import GentricTextField from '../TextField/TextField.jsx';
import Buttons from '../Button/Button.jsx';
// const iconMap = {
//     'Stars': StarsOutlinedIcon,
//     'Dashboard': DashboardIcon,
//     'TableChart': TableChartIcon,
//     'Assessment': AssessmentIcon,
//     'People': PeopleIcon,
//     'Inventory': InventoryIcon,
// };

export default function GentricTables({ children, title, titleIcons, button, btnIcon, headerIcons = [] }) {
    const { data } = useFetch();




    return (
        <Paper
            variant="outlined"
            className="gentric-container"
        >
            <Card className="gentric-card" sx={{ p: 0 }}>
                <Box className="gentric-header">

                    <Header
                        title={title}
                        titleIcon={titleIcons}
                        textlabel="Search here"

                    />
                    <Divider />
                </Box>

                <Box className="gentric-content " >
                    {children}
                </Box>
            </Card>
            {button && (
                <Box className="gentric-footer">
                    <Footer >
                        {button.map((btn, index) => {
                            const btnConfig = typeof btn === 'string'
                                ? { label: btn }
                                : btn;
                            return (
                                <Buttons
                                    key={index}
                                    label={btnConfig.label}
                                    startIcon={btnConfig.startIcon}
                                    fieldColor={btnConfig.color}
                                    variant={btnConfig.variant || 'outlined'}
                                />
                            );
                        })}
                    </Footer>
                </Box>
            )}
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
