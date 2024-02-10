import React, { useState } from "react";
import { InputDiv, InputStyle, PasswordStyle } from "./Input.style";
import { Show } from "@/assets";

const Input = ({ name, value, label, onChange, variant, type }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return variant === "text" ? (
    <InputStyle>
      {label}
      <InputDiv type={type} value={value} onChange={onChange} name={name} />
    </InputStyle>
  ) : variant === "password" ? (
    <InputStyle>
      {label}
      <div className="password">
        <PasswordStyle
          type={show?"text" :"password"}
          value={value}
          onChange={onChange}
          name={name}
        />
        <span onClick={handleShow}>{show ? <Show /> : <Show />} </span>
       
      </div>
    </InputStyle>
  ) : null;
};

export { Input };
