import React from 'react';
import CustomTabs from './Tabs';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MemoryRouter } from 'react-router-dom';
import theme from '../Theme';

export default {
    title: 'Components/CustomTabs',
    component: CustomTabs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/custom-surveys']}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Story />
                </ThemeProvider>
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <CustomTabs {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithContent = () => {
    return (
        <div style={{ padding: '20px' }}>
            <CustomTabs />
            <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <h3>Tab Content Area</h3>
                <p>This demonstrates the custom tabs component integrated with the theme system.</p>
                <p>The tabs use theme colors and React Router for navigation.</p>
                <p>Click on different tabs to see the navigation in action.</p>
            </div>
        </div>
    );
};
WithContent.parameters = {
    docs: {
        description: {
            story: 'Tabs component integrated with the theme system and React Router, using theme colors, spacing, and URL-based navigation.',
        },
    },
};
