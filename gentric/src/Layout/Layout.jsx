import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useFetch from '../Hooks/Fetch';
import PortfolioMetrics from '../Pages/PortfolioMetrics.jsx';
import InsightsActions from '../Pages/InsightsActions.jsx';
import MostImproving from '../Pages/MostImproving.jsx';
import MostDeclining from '../Pages/MostDeclining.jsx';
import TabsPage from '../Pages/TabsPage.jsx';
import TeamMemberRank from '../Pages/TeamMemberRank.jsx';
import FullFeaturedTable from '../Pages/FullFeaturedTable.jsx';
import ActionPlanSummary from '../Pages/ActionPlanSummary.jsx';


export default function Layout() {
    const { loading } = useFetch();

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
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 3 } }}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)'
                },
                gap: 3,
                '& > *': {
                    minHeight: 'fit-content'
                }
            }}>
                <FullFeaturedTable />
                <TeamMemberRank />
                <PortfolioMetrics />
                <MostImproving />
                <MostDeclining />
                <InsightsActions />
                <ActionPlanSummary />
                <TabsPage />
            </Box>
        </Container>
    );
}
