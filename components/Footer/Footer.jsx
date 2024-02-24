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
          <span>Stay connected with us!</span>
          <p>
            Ready to stay ahead of the curve? <br />
            Subscribe now to receive our exclusive weekly updates and ensure you
            never miss a beat!
          </p>
        </div>
        <div className="input">
          <input placeholder="Email" />
          <Button variant={"dark-button"}>Subscribe</Button>
        </div>
      </div>
      <TopContainer>
        <div className="left">
          <Image
            src={"/images/logo-blue.png"}
            className="logo"
            width={167}
            height={55}
            alt="logo"
            objectFit="contain"
          />
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
                width={24}
                height={24}
                alt="x-logo"
              />
              <Image
                src={"/images/whatsapp.png"}
                width={24}
                height={24}
                alt="x-logo"
              />
              <Image
                src={"/images/instagram.png"}
                width={24}
                height={24}
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
          <p> Personal event website</p>
          <p>Onsite inspection </p>
          <p>Create wishlist</p>
          <p>Sell a merch (Aso-ebi)</p>
          <p>Event consultation</p>
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
