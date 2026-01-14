import React, { useState } from 'react';
import GentricTextField from './TextField';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default {
  title: 'Components/TextField',
  component: GentricTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'autocomplete', 'date', 'search', 'filter'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export const TextInput = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'text',
    label: 'Text Field',
    placeholder: 'Enter text...',
    fullWidth: false,
  },
};

export const DatePicker = {
  render: (args) => {
    const [value, setValue] = useState('2024-01-01');
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'date',
    label: 'Select Date',
    fullWidth: false,
  },
};

export const AutocompleteDefault = {
  render: (args) => {
    const [value, setValue] = useState(null);
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    type: 'autocomplete',
    label: 'Select Option',
    placeholder: 'Choose...',
    fullWidth: false,
  },
};

export const AutocompleteCustomOptions = {
  render: (args) => {
    const [value, setValue] = useState(null);
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    type: 'autocomplete',
    label: 'Select Response',
    placeholder: 'Choose response type...',
    fullWidth: false,
    options: [
      { label: 'All Responses', value: 'all' },
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Neutral', value: 'neutral' },
    ],
  },
};

export const WithSearchIcon = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search...',
    icon: <SearchIcon />,
    fullWidth: false,
  },
};

export const WithFilterIcon = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    type: 'filter',
    label: 'Filter',
    placeholder: 'Filter results...',
    icon: <FilterListIcon />,
    fullWidth: false,
  },
};

export const CompactField = {
  render: (args) => {
    const [value, setValue] = useState(null);
    return (
      <GentricTextField
        {...args}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    type: 'autocomplete',
    label: 'Compact Field',
    className: 'gentric-compact-field',
    fullWidth: false,
    sx: { width: '160px' },
  },
};

export const FullWidth = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '400px' }}>
        <GentricTextField
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
  args: {
    type: 'text',
    label: 'Full Width Field',
    placeholder: 'This field spans full width...',
    fullWidth: true,
  },
};
