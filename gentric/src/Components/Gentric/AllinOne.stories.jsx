import React from 'react';
import GentricTables from './AllinOne';
import Buttons from '../Button/Button';
import Footer from '../Footer/Fotter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default {
  title: 'Components/GentricTables',
  component: GentricTables,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile container component that wraps content in a Paper and Card layout with an optional footer section. Perfect for creating consistent table layouts or any content that needs structured presentation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The main content to be displayed inside the card',
      control: 'none',
    },
    footer: {
      description: 'Optional footer content to be displayed below the card',
      control: 'none',
    },
  },
};

// Sample content component for demonstration
const SampleContent = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Sample Content
    </Typography>
    <Typography variant="body1" paragraph>
      This is a sample content area that demonstrates how the GentricTables component works.
    </Typography>
    <Typography variant="body2">
      You can place any content here, such as tables, forms, charts, or any other React components.
    </Typography>
  </Box>
);

// Sample table-like content
const SampleTableContent = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Data Table Example
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {[1, 2, 3, 4].map((row) => (
        <Box
          key={row}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1.5,
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Typography>Item {row}</Typography>
          <Typography>Value {row * 100}</Typography>
          <Typography>Status: Active</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

/**
 * Default story showing the basic usage of GentricTables without a footer.
 */
export const Default = {
  render: () => (
    <GentricTables>
      <SampleContent />
    </GentricTables>
  ),
};

/**
 * Story demonstrating GentricTables with a footer containing action buttons.
 */
export const WithFooter = {
  render: () => (
    <GentricTables
      footer={
        <Footer>
          <Buttons label="Download" variant="contained" />
          <Buttons label="Print" variant="outlined" />
          <Buttons label="Share" variant="text" />
        </Footer>
      }
    >
      <SampleContent />
    </GentricTables>
  ),
};

/**
 * Story showing GentricTables with table-like content and action buttons in the footer.
 */
export const WithTableContent = {
  render: () => (
    <GentricTables
      footer={
        <Footer>
          <Buttons label="Export" variant="contained" />
          <Buttons label="Refresh" variant="outlined" />
        </Footer>
      }
    >
      <SampleTableContent />
    </GentricTables>
  ),
};

/**
 * Story demonstrating GentricTables with multiple action buttons in the footer.
 */
export const WithMultipleActions = {
  render: () => (
    <GentricTables
      footer={
        <Footer>
          <Buttons label="Save" variant="contained" />
          <Buttons label="Cancel" variant="outlined" />
          <Buttons label="Delete" variant="outlined" color="error" />
          <Buttons label="Help" variant="text" />
        </Footer>
      }
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Form Content
        </Typography>
        <Typography variant="body2">
          This example shows how to use GentricTables with form content and multiple action buttons.
        </Typography>
      </Box>
    </GentricTables>
  ),
};

/**
 * Story showing a minimal example with simple text content.
 */
export const Minimal = {
  render: () => (
    <GentricTables>
      <Box sx={{ p: 2 }}>
        <Typography>Simple text content</Typography>
      </Box>
    </GentricTables>
  ),
};

/**
 * Story demonstrating GentricTables with a custom footer component.
 */
export const CustomFooter = {
  render: () => (
    <GentricTables
      footer={
        <Box sx={{ p: 2, textAlign: 'center', bgcolor: '#f5f5f5' }}>
          <Typography variant="caption" color="text.secondary">
            Custom footer content - Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      }
    >
      <SampleContent />
    </GentricTables>
  ),
};
