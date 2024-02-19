import {
  Arrow_Down,
  Close,
  Hamburger,
  Logo,
  Notification,
  ProfilePicture,
} from "@/assets";
import { use, useState } from "react";
import { HeaderContainer, HeaderStyle, HeroContainer } from "./Header.style";
import { Button } from "../Button/Button";
import {
  HeaderFixedContainer,
  HeaderFixedStyle,
  MobileNav,
} from "./HeaderFixed.style";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderFixed = () => {
  const [showEvent, setShowEvent] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };

  const handleNav = () => {
    setShow(!show);
  };

  const ActiveLink = (href) => {
    return router.pathname === href;
  };

  return (
    <>
      <HeaderFixedContainer>
        <HeaderFixedStyle>
          <div>
            <Logo />
          </div>
          <div className="hamburger" onClick={handleNav}>
            {show ? <Close /> : <Hamburger />}
          </div>

          <div className="center-nav">
            <div onClick={handleShowEvent} className="events">
              <div className="text">
                <p>Host an Event</p>
                <Arrow_Down />
              </div>
              {showEvent && (
                <>
                  <div className="event">
                    <span><Link href={"/host-event"} className="link-event">Host an Event</Link></span>
                    <span>Attend an Event</span>
                    <span>Manage Event</span>
                  </div>
                </>
              )}
            </div>

            <p>
              <Link
                className={`link ${ActiveLink("/blog") && `active`}`}
                href={"/blog"}
              >
                Blog
              </Link>
            </p>
            <p>
              <Link
                className={`link ${ActiveLink("/ticketing") && `active`}`}
                href={"/ticketing"}
              >
                Ticketing
              </Link>
            </p>
            <p>
              <Link
                className={`link ${ActiveLink("/designs") && `active`}`}
                href={"/designs"}
              >
                Designs
              </Link>
            </p>
          </div>
          <div className="right-nav">
            <Notification />
            <ProfilePicture />
          </div>
        </HeaderFixedStyle>
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
      </HeaderFixedContainer>
    </>
  );
};

export { HeaderFixed };
