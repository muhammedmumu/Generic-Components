import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Headers from '../Components/Header/Header.jsx';
import CustomTabs from '../Components/Tabs/Tabs.jsx';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import Footer from '../Components/Footer/Fotter.jsx';
import Buttons from '../Components/Button/Button.jsx';

const tabsData = [
  {
    label: 'Overview',
    content: 'Overview tab content goes here. You can add charts, summaries, or key metrics.',
  },
  {
    label: 'Details',
    content: 'Details tab content. This can include more granular information or data tables.',
  },
  {
    label: 'Analytics',
    content: 'Analytics tab content. Display graphs, trends, and performance metrics.',
  },
  {
    label: 'Settings',
    content: 'Settings tab content. Configuration options and preferences can be placed here.',
  },
];

export default function TabsPage() {
  const footer = (
    <Footer>
      <Buttons label="Save" variant="contained" onClick={() => console.log('Save')} />
      <Buttons label="Cancel" variant="outlined" onClick={() => console.log('Cancel')} />
    </Footer>
  );

  return (
    <AllinOne footer={footer}>
      <Box className="gentric-header">
        <Headers
          title="Tabs Component"
          titleIcon={<ViewWeekIcon />}
          textFields={[]}
        />
      </Box>

      <Box sx={{ p: 2 }}>
        <CustomTabs tabs={tabsData} />

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Tab Content Area
            </Typography>
            <Typography color="textSecondary">
              The tab content will be displayed here based on the selected tab. You can dynamically update this content by managing state and responding to tab changes.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </AllinOne>
  );
}
