import React from "react";
import Select from "react-select";
import { customStyles } from "./CustomStyles";

const SelectFilter = ({
  error,
  options,
  onChange,
  value,
  placeholder,
  name,
  isMulti,
}) => {
  return (
    <Select
      options={options}
      isSearchable
      isClearable
      styles={customStyles(error)}
      onChange={(option) => onChange(option, { name })}
      value={value}
      isMulti={isMulti}
      placeholder={placeholder}
    />
  );
};

export default SelectFilter;
