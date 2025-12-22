import React from "react";
import Select from "react-select";
import { PropTypes } from "prop-types";
import useSelectHook from "../hook/useSelect";
import { useTheme } from "@emotion/react";
export default function SimpleSelect(props) {
  const {
    defaultValue,
    isDisabled,
    isLoading,
    isClearable,
    isSearchable,
    options,
    isMulti,
    onChange,
    placeholder,
    value,
    styles,
    closeMenuOnSelect,
    maxWidth,
    maxHeight,
    minWidth,
    overFlow,
    menuPlacement,
    ...rest
  } = props;
  const { OptionSelected, handleSearchSelectChange, getValue } = useSelectHook({
    onChange: onChange,
    options: options,
  });
  const theme = useTheme();

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultValue}
      value={getValue(value)}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      placeholder={placeholder}
      closeMenuOnSelect={closeMenuOnSelect}
      options={options}
      isMulti={isMulti}
      menuPlacement={menuPlacement ? menuPlacement : "auto"}
      onChange={handleSearchSelectChange}
      menuPortalTarget={document.body}
      styles={{
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected && "#DDF3FA",
          color: theme.palette.black[500],
          "&:hover": {
            backgroundColor: theme.palette.lightBlue[250],
            cursor: "pointer",
          },
        }),
        fontWeight: 500,
        fontSize: 12,
        control: (base, state) => ({
          fontWeight: 600,
          fontSize: 12,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          minWidth: minWidth,
          overflow: overFlow,
          ...base,
          border: state.isFocused
            ? `1px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.grey[500]}`,
          "&:hover": {
            border: state.isFocused
              ? `1px solid ${theme.palette.primary.main}`
              : `1px solid ${theme.palette.primary.main}`,
          },
        }),
        menuPortal: (base, state) => ({
          ...base,
          zIndex: 9999,
          minWidth: 135,
          fontSize: 12,
          fontWeight: 500,
        }),
        ...(isMulti && {
          multiValueRemove: (base, { data }) => ({
            ...base,
            cursor: data?.value === "all" ? "default" : base.cursor,
            pointerEvents:
              data?.value === "all" ? "none" : base.pointerEvents,
            marginRight: "3px",
          }),
          multiValueLabel: () => ({
            padding: "2px 10px",
          })
        }),
        ...styles,
      }}
      {...rest}
    />
  );
}

SimpleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
};

SimpleSelect.defaultProps = {
  isMulti: false,
  closeMenuOnSelect: true,
};
