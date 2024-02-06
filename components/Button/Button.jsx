import React from "react";
import { DarkButton, NavButton, TransparentButton } from "./Button.style";

const Button = ({ variant, children, onClick }) => {
  return variant === "nav-button" ? (
    <NavButton variant={variant} onClick={onClick}>
      {children}
    </NavButton>
  ) : variant === "transparent-button" ? (
    <TransparentButton variant={variant} onClick={onClick}>
      {children}
    </TransparentButton>
  ) : variant === "dark-button" ? (
    <DarkButton variant={variant} onClick={onClick}>
      {children}
    </DarkButton>
  ) : "";
};

export { Button };


