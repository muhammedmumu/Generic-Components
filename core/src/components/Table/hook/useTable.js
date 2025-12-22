import { useMemo, useState } from "react";

const useDataGridHook = ({ onSort, onFilter, onPageChange, sortingMode, columns }) => {
  const handleSortModelChange = (params) => {
    if (sortingMode !== "server") return;
    if (typeof onSort == "function") {
      onSort(params);
    }
  };
  const handleFilterModelChange = (params) => {
    onFilter(params);
  };
  const handlePageChange = (params) => {
    onPageChange(params);
  };

  const columnVisibilityModel = useMemo(() => {
  const visibility = {};
  columns?.forEach((col) => {
    if (col.hide !== undefined) {
      visibility[col.field] = !col.hide;
    }
  });
  return visibility;
}, [columns]);

  return { handleSortModelChange, handleFilterModelChange, handlePageChange, columnVisibilityModel };
};

export default useDataGridHook;
