import { useMemo } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { mockTables, columns as baseColumns } from '../Mock/mock.js';
import IconButton from '@mui/material/IconButton';

export function useTableConfig(tableIndex) {
  // Icon mapping for header actions
  const headerIconMap = useMemo(() => ({
    Edit: <EditIcon />,
    Delete: <DeleteIcon />,
    Filter: <FilterAltOutlinedIcon />,
    Settings: <SettingsIcon />

  }), []);

  return useMemo(() => {
    const tableConfig = mockTables[tableIndex];

    if (!tableConfig) {
      return {
        config: null,
        columns: [],
        actions: []
      };
    }

    // Derive columns from baseColumns using configured fields
    const derivedColumns = (tableConfig?.fields || [])
      .map((field) => baseColumns.find((col) => col.field === field))
      .filter(Boolean);

    // Prepare header action buttons (icon buttons)
    const headerActions = (tableConfig?.headerIcons || []).map((iconName, idx) => (
      <IconButton key={idx} size="small" title={iconName}>
        {headerIconMap[iconName] || null}
      </IconButton>
    ));

    return {
      config: tableConfig,
      columns: derivedColumns,
      actions: headerActions
    };
  }, [tableIndex, headerIconMap]);
}
