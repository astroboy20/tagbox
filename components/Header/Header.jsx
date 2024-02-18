import { Arrow_Down, Close, Hamburger, Logo } from "@/assets";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderStyle,
  HeroContainer,
  MobileNav,
} from "./Header.style";
import { Button } from "../Button/Button";
import Link from "next/link";

const Header = () => {
  const [showEvent, setShowEvent] = useState(false);
  const [show, setShow] = useState(false);

  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };

  const handleNav = () => {
    setShow(!show);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderStyle>
          <div>
            <Logo />
          </div>

          <div className="hamburger" onClick={handleNav}>
            {show ? <Close /> : <Hamburger />}
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
            <p>
              <Link href={"/blog"} className="links">
                Blog
              </Link>
            </p>
            <p>
              <Link href={"/ticketing"} className="links">
                Ticketing
              </Link>
            </p>
            <p>
              <Link href={"/designs"} className="links">
                Designs
              </Link>
            </p>
          </div>
          <div className="right-nav">
            <p>
              <Link href={"/login"} className="links">
                Login
              </Link>
            </p>
            <p className={"nav-button"}>Schedule a Demo</p>
          </div>
        </HeaderStyle>
        {show && (
          <MobileNav>
            
            <Link href={"/blog"} className="link">
              Host an event
            </Link>
            <Link href={"/blog"} className="link">
              Blog
            </Link>
            <Link href={"/ticketing"} className="link">
              Ticketing
            </Link>
            <Link href={"/designs"} className="link">
              Designs
            </Link>
            <Link href={"/notification"} className="link">
              Notifications (3)
            </Link>
            <Link href={"/profile"} className="link">
              Profile
            </Link>
          </MobileNav>
        )}

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
