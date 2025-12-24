import React from 'react';
import Footer from './Fotter';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  button: ['Download', 'Print', 'Share'],
};

export const SimpleFooter = Template.bind({});
SimpleFooter.args = {
  button: ['Download'],
};

export const EmptyFooter = Template.bind({});
EmptyFooter.args = {
  button: [],
};