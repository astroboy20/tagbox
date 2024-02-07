import { Arrow_Down, Logo } from "@/assets";
import { useState } from "react";
import { HeaderContainer, HeaderStyle, HeroContainer } from "./Header.style";
import { Button } from "../Button/Button";

const Header = () => {
  const [showEvent, setShowEvent] = useState(false);

  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderStyle>
          <div>
            <Logo />
          </div>

          <div className="center-nav">

            <div onClick={handleShowEvent} className="events">
              <div className="text">
                <p>Events</p>
                <Arrow_Down />
              </div>
              {showEvent && (
                <>
                  <div className="event">
                    <span>Host an Event</span>
                    <span>Attend an Event</span>
                    <span>Manage Event</span>
                  </div>
                </>
              )}
            </div>

            <p>Blog</p>
            <p>Ticketing</p>
            <p>Designs</p>
          </div>
          <div className="right-nav">
            <p>Login</p>
            <p className={"nav-button"}>Schedule a Demo</p>
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
