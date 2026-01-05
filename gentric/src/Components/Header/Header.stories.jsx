import React from 'react';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
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
    header: 'Basic Header',
  },
};

export const WithHeaderIcon = {
  args: {
    header: 'Dashboard',
    headerIcon: {
      "type": {
        "type": {},
        "compare": null
      },

      "key": null,

      "props": {
        "sx": {
          "fontSize": 32,
          "color": "primary.main",
          "padding": 0
        }
      },

      "_owner": null,
      "_store": {}
    },
  },
};

export const WithStarsIcon = {
  args: {
    header: 'Featured Items',
    headerIcon: <StarsOutlinedIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
};

export const WithEditIcon = {
  args: {
    header: 'Editable Content',
    icons: ['Edit'],
  },
};

export const WithFilterIcon = {
  args: {
    header: 'Filterable List',
    icons: ['Filter'],
  },
};

export const WithDeleteIcon = {
  args: {
    header: 'Manage Items',
    icons: ['Delete'],
  },
};

export const WithMultipleIcons = {
  args: {
    header: 'Full Featured Header',
    icons: ['Edit', 'Filter', 'Delete'],
    headerIcon: <DashboardIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  },
};

export const WithSearchBar = {
  args: {
    header: 'Search Results',
    searchbar: (
      <TextField
        fullWidth
        placeholder="Search..."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    ),
  },
};

export const WithFilterBox = {
  args: {
    header: 'Filtered View',
    filterbox: (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          select
          label="Category"
          size="small"
          sx={{ minWidth: 120 }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="">All</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
        </TextField>
        <TextField
          select
          label="Status"
          size="small"
          sx={{ minWidth: 120 }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </TextField>
      </Box>
    ),
  },
};

export const Complete = {
  args: {
    header: 'Complete Example',
    headerIcon: <StarsOutlinedIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    icons: ['Edit', 'Filter', 'Delete'],
    searchbar: (
      <TextField
        fullWidth
        placeholder="Search..."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    ),
  },
};
