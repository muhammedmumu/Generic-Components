import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useFetch from '../Hooks/Fetch';
import AllinOnePortfolioMetrics from '../Pages/AllinOnePages/PortfolioMetrics.jsx';
import AllinOneInsightsActions from '../Pages/AllinOnePages/InsightsActions.jsx';
import AllinOneMostImproving from '../Pages/AllinOnePages/MostImproving.jsx';
import AllinOneMostDeclining from '../Pages/AllinOnePages/MostDeclining.jsx';
import AllinOneActionPlanSummary from '../Pages/AllinOnePages/ActionPlanSummary.jsx';
import AllinOneTeamMemberRank from '../Pages/AllinOnePages/TeamMemberRank.jsx';
import AllinOneFullFeaturedTable from '../Pages/AllinOnePages/FullFeaturedTable.jsx';


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
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 3
            }}>
                <AllinOneFullFeaturedTable />
                <AllinOnePortfolioMetrics />
                <AllinOneMostImproving />
                <AllinOneMostDeclining />
                <AllinOneActionPlanSummary />
                <AllinOneTeamMemberRank />
                <AllinOneInsightsActions />
            </Box>
        </Container>
    );
}
