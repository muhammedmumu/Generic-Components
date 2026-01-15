import React from 'react';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    title: 'Basic Header',
  },
};

export const WithTitleIcon = {
  args: {
    title: 'Dashboard',
    titleIcon: <DashboardIcon sx={{ fontSize: 32, color: 'primary.main', padding: 0 }} />,
  },
};

export const WithSubtitle = {
  args: {
    title: 'Program Overview',
    subtitle: 'Tracks status, owners, and key risks for the current quarter.',
    titleIcon: <DashboardIcon sx={{ fontSize: 32, color: 'primary.main', padding: 0 }} />,
  },
};

export const WithStarsIcon = {
  args: {
    title: 'Featured Items',
    titleIcon: <StarsOutlinedIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
};

export const WithActionButtons = {
  args: {
    title: 'Editable Content',
    actions: (
      <>
        <IconButton><EditIcon /></IconButton>
        <IconButton><FilterListIcon /></IconButton>
        <IconButton><DeleteIcon /></IconButton>
      </>
    ),
  },
};

export const WithTextFields = {
  args: {
    title: 'Team Member Rank',
    titleIcon: <DashboardIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    textFields: [
      {
        type: 'label',
        label: 'Response Cut-Off:',
      },
      {
        type: 'date',
        value: '2024-01-01',
        onChange: () => { },
      },
      {
        type: 'autocomplete',
        value: null,
        onChange: () => { },
        options: [
          { label: 'All Responses', value: 'all' },
          { label: 'Positive', value: 'positive' },
          { label: 'Negative', value: 'negative' },
        ],
      },
    ],
  },
};

export const Complete = {
  args: {
    title: 'Complete Example',
    titleIcon: <StarsOutlinedIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    actions: (
      <>
        <IconButton><EditIcon /></IconButton>
        <IconButton><FilterListIcon /></IconButton>
      </>
    ),
    textFields: [
      {
        type: 'label',
        label: 'Filter:',
      },
      {
        type: 'autocomplete',
        value: null,
        onChange: () => { },
      },
    ],
  },
};
