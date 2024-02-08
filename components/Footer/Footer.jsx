import { Instagram, Logo_Blue, Twitter, Whatsapp } from "@/assets";
import React from "react";
import { BottomContainer, FooterContainer, TopContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <TopContainer>
        <div className="left">
          <Logo_Blue />
          <p>
            Event hosting and management <br /> made easy and seamless. Choose{" "}
            <br />
            Tagbox, choose ease!
          </p>

          <div>
            <p> Reach us via our socials;</p>
            <div className="icon">
              {" "}
              <Twitter />
              <Whatsapp />
              <Instagram />
            </div>
          </div>
        </div>
        <div className="center">
          <span> Quick Links</span>
          <p>About</p>
          <p>Events</p>
          <p>Designs</p>
          <p>Blog</p>
        </div>
        <div className="right">
          <span>Features</span>
          <p>Event Hosting and Management</p>
          <p>Onsite inspection </p>
          <p>Payment processing</p>
          <p>Ticketing</p>
        </div>
      </TopContainer>
      <BottomContainer>
        <p>Tagbox2024</p>
        <p>Tagboxevents@outlook.com</p>
      </BottomContainer>
    </FooterContainer>
  );
};

export { Footer };
