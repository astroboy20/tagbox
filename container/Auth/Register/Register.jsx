import React from "react";
import { RegisterContainer } from "./Register.style";
import { Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";

const Register = () => {
  return (
    <RegisterContainer>
      <div className="left">
        {" "}
        <div className="header">
          <span>Welcome to Tagbox</span>
          <p>Register your account here...</p>
        </div>
        <form>
          <div className="name">
            <Input name={"firstname"} label={"First Name"} variant={"text"} />
            <Input name={"firstname"} label={"Last Name"} variant={"text"} />
          </div>

          <Input name={"firstname"} label={"Email"} variant={"text"} />
          <Input name={"firstname"} label={"Email"} variant={"password"} />
        </form>
      </div>
      <div className="right">
        <div className="icon">
          <Logo_Blue />
        </div>
        <Register_Icon />
      </div>
    </RegisterContainer>
  );
};

export { Register };
