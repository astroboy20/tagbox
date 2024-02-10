import React from "react";
import { Login_Icon, Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link"
import { LoginContainer } from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
         <div className="right">
        <div className="icon">
          <Logo_Blue />
        </div>
        <Login_Icon/>
      </div>
      <div className="left">
        {" "}
        <div className="header">
          <span>Welcome to Tagbox</span>
          <p>Register your account here...</p>
        </div>
        <form>

          <Input name={"firstname"} label={"Email"} variant={"text"} />
          <Input name={"firstname"} label={"Enter Password"} variant={"password"} />
          
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
              Log In with
              <Image
                src={"/images/google.png"}
                width={24}
                height={24}
                alt="google-logo"
              />
            </p>
            <p> Don’t have an account? <Link className="link" href="/register">Sign Up</Link> </p>
          </div>
        </form>
      </div>
     
    </LoginContainer>
  );
};

export { Login };
