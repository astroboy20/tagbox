import React from "react";
import {
  DarkButton,
  DarkTransparent,
  DarkWhite,
  NavButton,
  TransparentButton,
} from "./Button.style";

const Button = ({ variant, children, onClick, isDisabled }) => {
  return variant === "nav-button" ? (
    <NavButton
      variant={variant}
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </NavButton>
  ) : variant === "transparent-button" ? (
    <TransparentButton
      variant={variant}
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </TransparentButton>
  ) : variant === "dark-button" ? (
    <DarkButton
      variant={variant}
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </DarkButton>
  ) : variant === "dark-transparent" ? (
    <DarkTransparent
      variant={variant}
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </DarkTransparent>
  ) : variant === "dark-white" ? (
    <DarkWhite
      variant={variant}
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </DarkWhite>
  ) : (
    ""
  );
};

export { Button };
