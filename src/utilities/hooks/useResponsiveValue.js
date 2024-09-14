import { useState, useEffect } from "react";

const useResponsiveValue = (breakpoint, mobileValue, tabletValue) => {
  const [value, setValue] = useState(window.innerWidth >= breakpoint ? tabletValue : mobileValue);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        setValue(tabletValue);
      } else {
        setValue(mobileValue);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, tabletValue, mobileValue]);

  return value;
};

export default useResponsiveValue;