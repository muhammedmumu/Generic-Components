import React from 'react';
import Lists from './Lists';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Primary } from '../../Theme/constants';

const theme = createTheme({
  palette: {
    primary: {
      main: Primary,
    },
  },
});

export default {
  title: 'Components/Lists',
  component: Lists,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  render: () => <Lists />,
};

export const SingleItem = {
  render: () => (
    <div>
      <div
        style={{
          padding: '16px',
          margin: '8px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '4px',
          backgroundColor: '#fff',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p>
          You have received <span style={{ fontWeight: 'bold' }}>59 negative reviews</span>. Please review them to improve your service.
        </p>
      </div>
    </div>
  ),
};

export const MultipleItems = {
  render: () => <Lists />,
};
