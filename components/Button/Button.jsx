import React from "react";
import { DarkButton, NavButton, TransparentButton } from "./Button.style";

const Button = ({ variant, children, onClick, isDisabled }) => {
  return variant === "nav-button" ? (
    <NavButton variant={variant} type="submit" onClick={onClick} disabled={isDisabled}>
      {children}
    </NavButton>
  ) : variant === "transparent-button" ? (
    <TransparentButton variant={variant} type="submit" onClick={onClick} disabled={isDisabled}>
      {children}
    </TransparentButton>
  ) : variant === "dark-button" ? (
    <DarkButton variant={variant} type="submit" onClick={onClick} disabled={isDisabled}>
      {children}
    </DarkButton>
  ) : "";
};

export { Button };


