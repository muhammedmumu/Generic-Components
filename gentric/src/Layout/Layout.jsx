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
import Withoutfotter from '../Pages/Withoutfotter.jsx';
import VirtualizationPage from '../Pages/Virtualization.jsx';
import MultiForms from '../Pages/MultiForms.jsx';


export default function Layout() {
    const { loading } = useFetch();

    // const handleButtonClick = (action) => {
    //     console.log(`${action} button clicked`);
    // };

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ textAlign: 'center', p: 3 }}>Loading...</Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 3 } }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                '& > *': {
                    flex: '0 0 calc(50% - 12px)',
                    maxWidth: 'calc(50% - 12px)',
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
                <VirtualizationPage />
                <MultiForms />
            </Box>
        </Container>
    );
}
