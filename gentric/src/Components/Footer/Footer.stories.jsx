import React from 'react';
import Footer from './Fotter';
import Buttons from '../Button/Button';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const DefaultFooter = {
  render: () => (
    <Footer>
      <Buttons label="Download" variant="contained" />
      <Buttons label="Print" variant="contained" />
      <Buttons label="Share" variant="contained" />
    </Footer>
  ),
};

export const OutlinedButtons = {
  render: () => (
    <Footer>
      <Buttons label="Download" variant="outlined" />
      <Buttons label="Print" variant="outlined" />
      <Buttons label="Share" variant="outlined" />
    </Footer>
  ),
};

export const TextButtons = {
  render: () => (
    <Footer>
      <Buttons label="Save" variant="text" />
      <Buttons label="Delete" variant="text" />
      <Buttons label="Send" variant="text" />
    </Footer>
  ),
};

export const SimpleFooter = {
  render: () => (
    <Footer>
      <Buttons label="Download" variant="contained" />
    </Footer>
  ),
};

export const EmptyFooter = {
  render: () => <Footer />,
};