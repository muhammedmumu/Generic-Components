import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AllinOne from '../Components/Gentric/AllinOne.jsx';
import Headers from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Fotter.jsx';
import Buttons from '../Components/Button/Button.jsx';

import List from '../Components/lists/Lists.jsx';
export default function InsightsActions() {
  const { config, actions } = useTableConfig(2);

  if (!config) return null;

  const headerActions = [
    ...actions,
    <IconButton key="filter" size="small" title="Filter">
      <FilterListIcon />
    </IconButton>,
    <IconButton key="settings" size="small" title="Settings">
      <SettingsIcon />
    </IconButton>
  ];

  const footer = (
    <Footer className="gentric-footer">
      <Buttons
        label="Download all data"
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={() => console.log('Download all data')}
      />
      <Buttons
        label="> View all"
        variant="outlined"
        sx={{ color: 'primary.main' }}
        onClick={() => console.log('View all')}
      />
    </Footer>
  );

  return (
    <AllinOne footer={footer}>
      <Box className="gentric-header">
        <Headers
          title={config?.title || 'Insights & Actions'}
          titleIcon={<CommentOutlinedIcon />}
          actions={headerActions}
          textFields={[]}
        />
      </Box>
      <Box className="gentric-content" sx={{ padding: 2 }}>
        <List />
      </Box>
    </AllinOne>
  );
}
