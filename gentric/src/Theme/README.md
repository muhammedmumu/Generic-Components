# Theme System Documentation

## Overview
This project uses a centralized Material-UI theme system that allows you to easily customize colors, typography, and component styles across the entire application.

## Theme Structure

### 📁 Theme Folder Files

#### `constants.js`
Contains all color constants used throughout the theme. Update these values to change the color scheme of your entire application.

**Color Categories:**
- **Primary Colors**: Main brand colors
- **Secondary Colors**: Accent colors
- **Success/Error/Warning**: Status colors
- **Background Colors**: App background colors
- **Grey Palette**: Various grey shades
- **DataGrid Colors**: Table-specific colors
- **Special Colors**: Drawer, progress bar, etc.

#### `index.js`
The main theme configuration file that creates the Material-UI theme object with:
- **Breakpoints**: Responsive design breakpoints
- **Palette**: Complete color system using constants
- **Typography**: Font sizes, weights, and families
- **Component Props**: Default props for MUI components

#### `overrides.js`
Component-specific style overrides for Material-UI components including:
- DataGrid styling (borders, colors, hover states)
- Buttons (contained, outlined, text variants)
- Cards and Paper
- Typography variants
- Form inputs (TextField, Select, etc.)
- Tables, Tabs, Dialogs, and more

## How to Customize

### Change Colors

**Example: Change Primary Color**
```javascript
// In constants.js
export const Primary = "#0fa9de"; // Change this to your brand color
```

**Example: Change DataGrid Alternating Row Color**
```javascript
// In constants.js
export const DataGridAltRowColor = "#e7f8fe"; // Your desired color
```

### Modify Typography

**Example: Change Font Family**
```javascript
// In index.js
typography: {
    fontFamily: "Your Font, Arial, sans-serif",
    // ... rest of typography config
}
```

**Example: Change Heading Sizes**
```javascript
// In index.js
h1: {
    fontSize: "2rem", // Change to your desired size
    fontWeight: 700,
},
```

### Customize Component Styles

**Example: Modify Button Styles**
```javascript
// In overrides.js
MuiButton: {
    styleOverrides: {
        root: {
            fontSize: 12, // Change button font size
            borderRadius: theme.spacing(1), // Change border radius
        },
        contained: {
            backgroundColor: YourColor, // Use your custom color
        },
    },
},
```

**Example: Customize DataGrid**
```javascript
// In overrides.js
MuiDataGrid: {
    styleOverrides: {
        root: {
            "& .MuiDataGrid-row:hover": {
                backgroundColor: "#your-color !important",
            },
        },
    },
},
```

## Using Theme Colors in Components

### Method 1: Using theme object
```javascript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
    const theme = useTheme();
    
    return (
        <Box sx={{ 
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.grey[500],
        }}>
            Content
        </Box>
    );
}
```

### Method 2: Using palette strings
```javascript
<Box sx={{ 
    backgroundColor: 'primary.main',
    color: 'grey.500',
    borderColor: 'lightBlue.800',
}}>
    Content
</Box>
```

### Method 3: Importing constants directly
```javascript
import { Primary, DataGridMain } from '../Theme/constants';

<Box sx={{ backgroundColor: Primary }}>
    Content
</Box>
```

## Available Color Palette

### Primary
- `primary.main` - Main primary color
- `primary.light` - Light variant
- `primary.medium` - Medium variant
- `primary.dark` - Dark variant
- `primary.contrastText` - Text color for primary backgrounds

### Grey (with numeric variants)
- `grey[50]` to `grey[1000]` - Various grey shades

### Black
- `black.main` - Pure black
- `black[100]` to `black[1000]` - Various dark shades

### Blue & Light Blue
- `blue[100]` to `blue[1000]`
- `lightBlue[50]` to `lightBlue[820]`

### Success, Warning, Danger
- `success.main`, `success[100]` to `success[800]`
- `warning.main`, `warning.secondary`
- `danger.main`, `danger[100]` to `danger[900]`

## Typography Variants

- `h1` - 31px, weight 700
- `h2` - 24px, weight 700
- `h3` - 20px, weight 600
- `h4` - 18px, weight 600
- `h5` - 16px, weight 600
- `h6` - 14px, weight 600
- `body1` - 16px, weight 400
- `body2` - 14px, weight 400
- `subtitle1` - 12px, weight 500
- `subtitle2` - 11px, weight 500

## Styled Components

All Material-UI components automatically use the theme. Common components include:

- **DataGrid**: Pre-styled with alternating rows, hover effects, and custom headers
- **Buttons**: Consistent sizing, colors, and hover states
- **Cards & Paper**: Unified shadows and border radius
- **Tabs**: Custom indicator color and text styling
- **Forms**: TextField, Select with consistent styling
- **Tables**: Styled headers and cells

## Best Practices

1. **Always use theme colors** instead of hardcoded hex values
2. **Use typography variants** instead of inline font styling
3. **Leverage theme spacing** with `theme.spacing()` for consistency
4. **Test responsive breakpoints** when making typography changes
5. **Update constants first** before changing component overrides

## Quick Reference

### Change entire color scheme
1. Update `constants.js` with new color values
2. No need to change anything else!

### Add a new component override
1. Add override in `overrides.js` following existing patterns
2. It will automatically apply to all instances

### Modify global styles
1. Update `MuiCssBaseline` in `overrides.js`
2. Changes apply to all HTML elements

## Example: Complete Color Scheme Change

```javascript
// constants.js
export const Primary = "#6366f1"; // New primary color
export const Secondary = "#ec4899"; // New secondary
export const success = "#10b981"; // New success green
export const Background = "#f8fafc"; // New background

// That's it! Your entire app now uses the new colors.
```

## Support

For Material-UI documentation: https://mui.com/material-ui/
For theme customization: https://mui.com/material-ui/customization/theming/
