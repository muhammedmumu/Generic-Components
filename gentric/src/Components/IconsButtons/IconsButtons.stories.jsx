import React from 'react';
import IconsButtons from './IconsButtons';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default {
  title: 'Components/IconsButtons',
  component: IconsButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Default = {
  args: {
    icon: <SettingsIcon />,
    aria: 'settings button',
    onClicks: () => console.log('Icon button clicked'),
  },
};

export const Primary = {
  args: {
    icon: <FavoriteIcon />,
    color: 'primary',
    aria: 'favorite button',
    onClicks: () => console.log('Favorite clicked'),
  },
};

export const Secondary = {
  args: {
    icon: <ShareIcon />,
    color: 'secondary',
    aria: 'share button',
    onClicks: () => console.log('Share clicked'),
  },
};

export const Error = {
  args: {
    icon: <DeleteIcon />,
    color: 'error',
    aria: 'delete button',
    onClicks: () => console.log('Delete clicked'),
  },
};

export const Small = {
  args: {
    icon: <EditIcon />,
    size: 'small',
    color: 'primary',
    aria: 'edit button',
  },
};

export const Large = {
  args: {
    icon: <NotificationsIcon />,
    size: 'large',
    color: 'primary',
    aria: 'notifications button',
  },
};

export const SearchButton = {
  args: {
    icon: <SearchIcon />,
    color: 'primary',
    aria: 'search button',
    onClicks: () => console.log('Search clicked'),
  },
};

export const FilterButton = {
  args: {
    icon: <FilterListIcon />,
    color: 'primary',
    aria: 'filter button',
    onClicks: () => console.log('Filter clicked'),
  },
};

export const MultipleIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <IconsButtons icon={<EditIcon />} color="primary" aria="edit" />
      <IconsButtons icon={<DeleteIcon />} color="error" aria="delete" />
      <IconsButtons icon={<ShareIcon />} color="secondary" aria="share" />
      <IconsButtons icon={<FavoriteIcon />} color="primary" aria="favorite" />
    </div>
  ),
};
