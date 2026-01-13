import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterIcon from '@mui/icons-material/Filter';

import { mockTables, columns as baseColumns } from '../Mock/mock.js';

export function useTableConfig(tableIndex) {
  // Icon mapping for header actions
  const headerIconMap = useMemo(() => ({
    Edit: <EditIcon />,
    Delete: <DeleteIcon />,
    Filter: <FilterIcon />,

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
