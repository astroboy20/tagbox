import { Logo } from "@/assets";
import React from "react";
import { HeaderContainer, HeaderStyle, HeroContainer } from "./Header.style";
import { Button } from "../Button/Button";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderStyle>
          <div>
            <Logo />
          </div>

          <div className="center-nav">
            <p>Events</p>
            <p>Blog</p>
            <p>Ticketing</p>
            <p>Designs</p>
          </div>
          <div className="right-nav">
            <p>Login</p>
            <Button variant={"nav-button"}>Schedule a Demo</Button>
          </div>
        </HeaderStyle>
        <HeroContainer>
          <div className="text">
            <h1>
              Effortless Hosting,
              <br /> Unforgettable Experiences!
            </h1>
            <p>Host beyond limits, connect beyond expectations.</p>
          </div>

          <div className="button">
            {" "}
            <Button variant={"nav-button"}>Schedule a Demo</Button>
            <Button variant={"transparent-button"}>Explore Tagbox</Button>
          </div>
        </HeroContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
