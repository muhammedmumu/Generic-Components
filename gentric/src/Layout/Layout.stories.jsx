import React from 'react';
import Layout from './Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  render: () => <Layout />,
};

export const WithLoading = {
  render: () => {
    // Mock loading state
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        Loading...
      </div>
    );
  },
};
