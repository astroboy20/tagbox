import React from "react";
import { RegisterContainer } from "./Register.style";
import { Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link"

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
          <Input name={"firstname"} label={"Password"} variant={"password"} />
          <Input
            name={"firstname"}
            label={"Confirm Password"}
            variant={"password"}
          />
          <Button variant={"dark-button"}>Sign Up</Button>
          <div className="links">
            <p
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Create an account with{" "}
              <Image
                src={"/images/google.png"}
                width={24}
                height={24}
                alt="google-logo"
              />
            </p>
            <p> Already have an account? <Link className="link" href="/login">Sign in</Link></p>
          </div>
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
