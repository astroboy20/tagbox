import { Instagram, Logo_Blue, Twitter, Whatsapp } from "@/assets";
import React from "react";
import { BottomContainer, FooterContainer, TopContainer } from "./Footer.style";
import { Button } from "../Button/Button";
import Image from "next/image";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="top">
        <div className="text">
          <span>Make Your Event Reservations Here</span>
          <p>
            Stay a step ahead by making a reservation for that event. <br /> You
            book us, we help you!{" "}
          </p>

          <div className="input">
            <input placeholder="Email" />
            <Button variant={"dark-button"}>Enter E-mail</Button>
          </div>
        </div>
      </div>
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
              <Image
                src={"/images/x.png"}
                width={40}
                height={40}
                alt="x-logo"
              />
              <Image
                src={"/images/whatsapp.png"}
                width={40}
                height={40}
                alt="x-logo"
              />
              <Image
                src={"/images/instagram.png"}
                width={40}
                height={40}
                alt="x-logo"
              />
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
