import React from 'react';
import Footer from './Fotter';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
      description: 'Button variant style',
    },
    buttons: {
      control: { type: 'object' },
      description: 'Array of button labels',
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  buttons: ['Download', 'Print', 'Share'],
  variant: 'contained',
};

export const OutlinedButtons = Template.bind({});
OutlinedButtons.args = {
  buttons: ['Download', 'Print', 'Share'],
  variant: 'outlined',
};

export const TextButtons = Template.bind({});
TextButtons.args = {
  buttons: ['Save', 'Delete', 'Send'],
  variant: 'text',
};

export const SimpleFooter = Template.bind({});
SimpleFooter.args = {
  buttons: ['Download'],
  variant: 'contained',
};

export const AllButtonTypes = Template.bind({});
AllButtonTypes.args = {
  buttons: ['Download', 'Print', 'Share', 'Save', 'Delete', 'Send', 'Edit'],
  variant: 'contained',
};

export const EmptyFooter = Template.bind({});
EmptyFooter.args = {
  buttons: [],
};