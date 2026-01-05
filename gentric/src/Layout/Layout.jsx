import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSearchParams } from 'react-router-dom';
import CustomTabs from '../Pages/Tabs.jsx';
import CustomSurveys from '../Pages/CustomSurveys.jsx';
import EmailGroups from '../Pages/EmailGroups.jsx';
import SurveyDesigns from '../Pages/SurveyDesigns.jsx';
import EmailTemplates from '../Pages/EmailTemplates.jsx';

export default function Layout() {
    const [searchParams] = useSearchParams();
    const tab = Number(searchParams.get('tab')) || 0;

    const renderPage = () => {
        switch (tab) {
            case 0:
                return <CustomSurveys />;
            case 1:
                return <EmailGroups />;
            case 2:
                return <SurveyDesigns />;
            case 3:
                return <EmailTemplates />;
            default:
                return <CustomSurveys />;
        }
    };
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                py: 4
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <Box
                    sx={{
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    <Box
                        component="h1"
                        sx={{
                            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                            fontWeight: 800,
                            color: 'text.primary',
                            mb: 1,
                            letterSpacing: '-1px'
                        }}
                    >
                        Generic Components Dashboard
                    </Box>
                    <Box
                        component="p"
                        sx={{
                            fontSize: '1rem',
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        Reusable data tables with dynamic columns and filtering
                    </Box>
                </Box>


                <CustomTabs />


                <Box sx={{ mt: 3 }}>
                    {renderPage()}
                </Box>
            </Container>
        </Box>
    );
}
