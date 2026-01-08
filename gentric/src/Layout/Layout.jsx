import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Buttons from '../Components/Button/Button';
import CustomTabs from '../Components/Tabs/Tabs';
import Tables from '../Components/Tables/GridTable';
import Lists from '../Components/lists/Lists.jsx';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import useFetch from '../Hooks/Fetch';


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
                        titleIcons={{ icons: true, TypeIcon: 'Dashboard' }}
                        headerIcons={['Edit', 'Filter', 'Delete']}
                        button={['Download', 'Print', 'Share', 'Save']}
                    >
                        {/* Tables Section */}
                        <Box sx={{ mb: 3 }}>
                            <Tables
                                rows={data.rows || []}
                                columns={data.columns || []}
                                fields={['id', 'hospital_name', 'job_title', 'email_address']}
                                paginationMode={true}
                                checkBox={true}
                                filtering={true}
                                sorting={true}
                            />
                        </Box>
                    </AllinOne>
                </Box>

                <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne
                        title="Notifications & Alerts"
                        titleIcons={{ icons: true, TypeIcon: 'Assessment' }}
                        headerIcons={['Edit', 'Filter']}
                        button={['Download', 'Share']}
                    >
                        <Box sx={{ mb: 3 }}>
                            <Lists />
                        </Box>
                    </AllinOne>
                </Box>

                <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne
                        title="Simple Data Table"
                        titleIcons={{ icons: true, TypeIcon: 'TableChart' }}
                        headerIcons={['Filter']}
                        button={['Download', 'Print']}
                    >
                        <Box sx={{ mb: 3 }}>
                            <Tables
                                rows={data.rows || []}
                                columns={data.columns || []}
                                fields={['id', 'gender', 'race', 'shirt_size']}
                                paginationMode={false}
                                checkBox={false}
                                filtering={false}
                                sorting={true}
                            />
                        </Box>
                    </AllinOne>
                </Box>

                <Box sx={{ flex: '1 1 calc(50% - 12px)', minWidth: '400px' }}>
                    <AllinOne
                        title="User Management"
                        titleIcons={{ icons: true, TypeIcon: 'People' }}
                        headerIcons={['Edit', 'Delete']}
                        button={['Save', 'View']}
                        variant="contained"
                    >

                        <Box sx={{ mb: 3 }}>
                            <CustomTabs
                                tabs={[
                                    { label: 'Overview' },
                                    { label: 'Analytics' },
                                    { label: 'Reports' },
                                    { label: 'Settings' },
                                    { label: 'Settings' }
                                ]}
                            />
                        </Box>
                    </AllinOne>

                </Box>
            </Box>
        </Container>
    );
}
