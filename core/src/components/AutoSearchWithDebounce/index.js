import React, { useState, useMemo } from "react";
import SearchBar from "@turner/webapp/src/Layouts/searchInput";
import { debounce } from "underscore";

export default function Index(props) {
  const { filters, setFilters, charLimit = 3,placeholder, ...rest } = props;
  // add debounce
  const [debounceTerm, setDecounceTerm] = useState(filters?.searchTerm || "");

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value) => {
        // Only update filters (which triggers API) after debounce
        if (value !== "" && value?.length >= charLimit) {
          setFilters((prev) => ({
            ...prev,
            searchTerm: value,
          }));
        } else if (value === "") {
          setFilters((prev) => ({
            ...prev,
            searchTerm: "",
          }));
        } 
      }, 500),
    []
  );


  // Handle input typing — update local state only
  const handleSearch = (e) => {
    const value = e.target.value;
    setDecounceTerm(value);
    debouncedSetSearch(value); // triggers only after 500 ms pause
  };

  //  return search component
  return (
    <SearchBar
      placeholder={placeholder}
      values={debounceTerm}
      showIcon={false}
      onChange={handleSearch}
      {...rest}
    />
  );
}
