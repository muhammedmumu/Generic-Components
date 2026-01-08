import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomTabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: CustomTabs,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
  },
};

export const FourTabs = {
  args: {
    tabs: ['CUSTOM SURVEYS', 'EMAIL GROUPS', 'SURVEY DESIGNS', 'EMAIL TEMPLATES'],
  },
};

export const TwoTabs = {
  args: {
    tabs: ['Home', 'Settings'],
  },
};

export const ManyTabs = {
  args: {
    tabs: ['Overview', 'Analytics', 'Reports', 'Users', 'Settings', 'Billing', 'Support'],
  },
};

export const WithLabelObjects = {
  args: {
    tabs: [
      { label: 'Dashboard' },
      { label: 'Profile' },
      { label: 'Messages' },
    ],
  },
};
