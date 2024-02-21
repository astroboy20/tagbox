import React, { useState } from "react";
import {
  EventDiv,
  EventStyle,
  InputDiv,
  InputStyle,
  PasswordStyle,
} from "./Input.style";
import { Dont_Show, Show } from "@/assets";

const Input = ({
  name,
  value,
  label,
  onChange,
  variant,
  type,
  error,
  icon,
  placeholder
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return variant === "text" ? (
    <InputStyle>
      <label>{label}</label>
      <InputDiv type={type} value={value} onChange={onChange} name={name} />
      <div style={{ color: "red" }}>{error}</div>
    </InputStyle>
  ) : variant === "password" ? (
    <InputStyle>
      <label>{label}</label>
      <div className="password">
        <PasswordStyle
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          name={name}
        />
        <span onClick={handleShow}>{show ? <Show /> : <Dont_Show />} </span>
      </div>
      <div style={{ color: "red" }}>{error}</div>
    </InputStyle>
  ) : variant === "event-input" ? (
    <EventStyle>
      <label>{label}</label>
      <div>
        <EventDiv type="text" value={value} name={name} onChange={onChange} placeholder={placeholder}/>
        <span>{icon}</span>
      </div>
    </EventStyle>
  ) : null;
};

export { Input };
