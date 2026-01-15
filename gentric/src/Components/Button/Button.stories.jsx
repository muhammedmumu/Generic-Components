import React from 'react';
import Buttons from './Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default {
  title: 'Components/Button',
  component: Buttons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Contained = {
  args: {
    label: 'Contained Button',
    variant: 'contained',
    onClick: () => console.log('Contained button clicked'),
  },
};

export const Outlined = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    onClick: () => console.log('Outlined button clicked'),
  },
};

export const Text = {
  args: {
    label: 'Text Button',
    variant: 'text',
    onClick: () => console.log('Text button clicked'),
  },
};

export const WithStartIcon = {
  args: {
    label: 'Add Item',
    variant: 'contained',
    startIcon: <AddIcon sx={{ color: 'black' }} />,
    onClick: () => console.log('Add button clicked'),
  },
};

export const WithEndIcon = {
  args: {
    label: 'Send Message',
    variant: 'contained',
    endIcon: <SendIcon />,
    onClick: () => console.log('Send button clicked'),
  },
};

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'contained',
    size: 'small',
  },
};

export const Large = {
  args: {
    label: 'Large Button',
    variant: 'contained',
    size: 'large',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'contained',
    disabled: true,
  },
};

export const DeleteButton = {
  args: {
    label: 'Delete',
    variant: 'contained',
    startIcon: <DeleteIcon />,
    sx: { backgroundColor: 'error.main', '&:hover': { backgroundColor: 'error.dark' } },
  },
};

export const CustomWidth = {
  args: {
    label: 'VIEW REVIEW ANALYTICS',
    variant: 'contained',
    sx: { width: '122px' },
  },
};
