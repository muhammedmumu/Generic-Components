import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import GentricTables from './AllinOne';

const DemoBody = ({ sections = 3, rowsPerSection = 4 }) => (
  <Stack spacing={2} sx={{ p: 2 }}>
    {Array.from({ length: sections }).map((_, sectionIndex) => (
      <Box
        key={sectionIndex}
        sx={{
          sdfsdfsdafasfsd
          p: 2,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          backgroundColor: 'background.paper',
          boxShadow: 1,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <Typography variant="subtitle1">Section {sectionIndex + 1}</Typography>
          <Chip label="Active" size="small" color="primary" variant="outlined" />
        </Stack>
        <Divider sx={{ mb: 1 }} />
        <Stack spacing={1.5}>
          {Array.from({ length: rowsPerSection }).map((_, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                p: 1.5,
                borderRadius: 1,
                border: '1px dashed',
                borderColor: 'divider',
                backgroundColor: 'background.default',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Row {rowIndex + 1} content with description and inline details.
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    ))}
  </Stack>
);

export default {
  title: 'Components/GentricTables',
  component: GentricTables,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const Template = (args) => (
  <Box sx={{ height: 420 }}>
    <GentricTables {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  children: <DemoBody sections={2} rowsPerSection={3} />,
};

export const WithFooterActions = Template.bind({});
WithFooterActions.args = {
  children: <DemoBody sections={2} rowsPerSection={4} />,
  footer: (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1.5,
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Showing 8 items
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button size="small" variant="outlined">Reset</Button>
        <Button size="small" variant="contained">Apply</Button>
      </Stack>
    </Box>
  ),
};

export const DenseScrollable = Template.bind({});
DenseScrollable.args = {
  children: <DemoBody sections={4} rowsPerSection={6} />,
  footer: (
    <Box
      sx={{
        px: 2,
        py: 1.25,
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'grey.50',
      }}
    >
      <Typography variant="caption" color="text.secondary">
        Long content demonstrates scroll within the card.
      </Typography>
    </Box>
  ),
};

export const MinimalShell = Template.bind({});
MinimalShell.args = {
  children: (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Lightweight container
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Use this layout to host any custom content — charts, tables, forms, or composed widgets.
      </Typography>
    </Box>
  ),
};
