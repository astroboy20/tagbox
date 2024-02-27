import React from "react";
import { OptionItem } from "./Options.style";

const Options = ({ value, label, selected, setValue }) => {
  const handleClick = () => {
    setValue(value);
  };
  return (
    <OptionItem selected={selected} onClick={handleClick}>
      {label}
    </OptionItem>
  );
};

export default Options;
