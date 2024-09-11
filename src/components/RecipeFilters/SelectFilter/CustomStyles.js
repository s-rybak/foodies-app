export const customStyles = (error) => ({
  control: (provided, state) => ({
    ...provided,
    borderRadius: "30px",
    border: `1px solid ${
      error
        ? "var(--color-error, #d00000)"
        : "var(--color-main-20, rgba(5, 5, 5, 0.20))"
    }`,
    fontFamily: "Mulish",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.02em",
    color: "var(--color-main, #050505)",
    boxShadow: "none",
    padding: "16px 18px",
    backgroundColor: "var(--color-bg)",
    "&:hover": {
      borderColor: error
        ? "var(--color-error, #d00000)"
        : "var(--color-main-60, rgba(5, 5, 5, 0.60))",
    },
    cursor: "pointer",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  input: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--color-main, #050505)",
    margin: "0",
    padding: "0",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "transparent",
    color: "var(--color-main, #050505)",
    padding: "0",
    margin: "0",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "var(--color-main, #050505)",
    fontFamily: "Mulish",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.02em",
    padding: "0",
    margin: "0",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--color-main-60, rgba(5, 5, 5, 0.60))",
    fontFamily: "Mulish",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.02em",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: "var(--transition)",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    color: "var(--color-main, #050505)",
    padding: 4,
    "&:hover": {
      color: "var(--color-main, #050505)",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: 4,
    color: "var(--color-main, #050505)",
    "&:hover": {
      color: "var(--color-main, #050505)",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "var(--color-bg)",
    borderRadius: "15px",
    border: "1px solid var(--color-main-20, rgba(5, 5, 5, 0.20))",
    padding: "16px 0",
  }),
  menuList: (provided) => ({
    ...provided,
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "3px",
      background: "var(--color-main-80)",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "var(--color-main)",
    },
    padding: "0 9px 0 14px",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Mulish",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.02em",
    color: "var(--color-main, #050505)",
    borderRadius: "4px",
    padding: "0 4px",
    margin: "0",
    backgroundColor: state.isSelected
      ? "var(--color-main-20)"
      : state.isFocused
      ? "var(--color-main-10)"
      : null,
    "&:active": {
      backgroundColor: "var(--color-main-20)",
    },
    "&:selected": {
      backgroundColor: "var(--color-main-10)",
    },
  }),
});
