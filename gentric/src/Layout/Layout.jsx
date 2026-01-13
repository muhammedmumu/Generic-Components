import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useFetch from '../Hooks/Fetch';
// import DashboardOverview from '../Pages/DashboardOverview.jsx';
// import TeamMemberRank from '../Pages/TeamMemberRank.jsx';
// import MostImproving from '../Pages/MostImproving.jsx';
// import MostDeclining from '../Pages/MostDeclining.jsx';
// import UserManagement from '../Pages/UserManagement.jsx';
// import EmployeePerformance from '../Pages/EmployeePerformance.jsx';
import Test from '../Pages/Test.jsx';
import FullFeaturedTable from '../Pages/FullFeaturedTable.jsx';
import PortfolioMetrics from '../Pages/PortfolioMetrics.jsx';
import InsightsActions from '../Pages/InsightsActions.jsx';
import MostImproving from '../Pages/MostImproving.jsx';
import MostDeclining from '../Pages/MostDeclining.jsx';
import ActionPlanSummary from '../Pages/ActionPlanSummary.jsx';
import TeamMemberRank from '../Pages/TeamMemberRank.jsx';


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
                {/* <Test /> */}
                {/* <FullFeaturedTable /> */}
                <PortfolioMetrics />
                <MostImproving />
                <MostDeclining />
                <ActionPlanSummary />
                <TeamMemberRank />
                <InsightsActions />
            </Box>
        </Container>
    );
}
