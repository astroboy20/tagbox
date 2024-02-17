import { Arrow_Down, Logo, Notification, ProfilePicture } from "@/assets";
import { useState } from "react";
import { HeaderContainer, HeaderStyle, HeroContainer } from "./Header.style";
import { Button } from "../Button/Button";
import { HeaderFixedContainer, HeaderFixedStyle } from "./HeaderFixed.style";

const HeaderFixed = () => {
  const [showEvent, setShowEvent] = useState(false);

  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };
  return (
    <>
      <HeaderFixedContainer>
        <HeaderFixedStyle>
          <div>
            <Logo />
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
            <Notification/>
           <ProfilePicture/>
          </div>
        </HeaderFixedStyle>
       
      </HeaderFixedContainer>
    </>
  );
};

export { HeaderFixed };
