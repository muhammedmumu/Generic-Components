import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import CustomTabs from '../Components/Tabs/Tabs';
import Tables from '../Components/Tables/GridTable';
import Lists from '../Components/lists/Lists.jsx';
import Report from '@mui/icons-material/AnalyticsOutlined';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import PrintIcon from '@mui/icons-material/PrintOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import useFetch from '../Hooks/Fetch';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';


export default function Layout() {
    const { data, loading } = useFetch();

    const handleButtonClick = (action) => {
        console.log(`${action} button clicked`);
    };

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ textAlign: 'center', p: 3 }}>Loading...</Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 3
            }}>
                <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne
                        title="Dashboard Overview"
                        titleIcons={<Report />}
                        headerIcons={['Edit', 'Filter', 'Delete']}
                        button={['Download', 'View All']}
                    >
                        {/* Tables Section */}
                        <Box sx={{ mb: 3 }}>
                            <Tables
                                rows={data.rows || []}
                                columns={data.columns || []}
                                fields={['hospital_name', 'job_title', 'email_address']}
                                paginationMode={true}
                                checkBox={false}
                                filtering={true}
                                sorting={true}
                            />
                        </Box>
                    </AllinOne>
                </Box>

                {/* <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne
                        title=" Team Member Rank"
                        headerIcons={['Edit', 'Filter']}
                        button={['Download', 'Share']}
                    >
                        <Box sx={{ mb: 3 }}>
                            <Lists />
                        </Box>
                    </AllinOne>
                </Box> */}

                <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne
                        title="Team Member Rank"
                        titleIcons={<StarsOutlinedIcon />}
                        headerIcons={['Filter']}
                        button={[
                            { label: 'Download', startIcon: <DownloadIcon />, color: '#0fa9de' },
                            { label: 'Print', startIcon: <PrintIcon /> }
                        ]}
                    >
                        <Box sx={{ mb: 3, height: '400px', overflow: 'auto' }}>
                            <Tables
                                rows={data.rows || []}
                                columns={data.columns || []}
                                fields={['gender', 'race', 'shirt_size', 'job_title', 'email_address']}
                                paginationMode={false}
                                checkBox={false}
                                filtering={false}
                                sorting={true}

                            />
                        </Box>
                    </AllinOne>
                </Box>

                <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne title="User Management" headerIcons={['Edit', 'Delete']} button={[{ label: 'Save', startIcon: <SaveIcon /> }, { label: 'View', startIcon: <VisibilityIcon /> }]} variant="contained" >
                        <Box sx={{ mb: 3 }}>
                            <CustomTabs tabs={[{ label: 'Overview' }, { label: 'Analytics' }, { label: 'Reports' }, { label: 'Settings' }, { label: 'Settings' }]} />
                        </Box>
                    </AllinOne>

                </Box>
            </Box>
        </Container>
    );
}
