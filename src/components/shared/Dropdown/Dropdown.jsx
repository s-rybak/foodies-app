import Select from "react-select";
import React from "react";
import styles from "./DropdownStyles";

const Dropdown = React.forwardRef(
  ({ options, placeholder, className, onChange, value }, ref) => (
    <Select
      ref={ref}
      options={options}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      styles={styles}
    />
  )
);

export default Dropdown;
