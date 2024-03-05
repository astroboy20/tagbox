import { Instagram, Logo_Blue, Twitter, Whatsapp } from "@/assets";
import React from "react";
import { BottomContainer, FooterContainer, TopContainer } from "./Footer.style";
import { Button } from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
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
          <Link href="host-event" className="link">
            <p>About</p>
          </Link>
          <Link href="host-event" className="link">
            {" "}
            <p>Events</p>
          </Link>
          <Link href="design" className="link">
            <p>Designs</p>
          </Link>

          <Link href="blog" className="link">
            {" "}
            <p>Blog</p>
          </Link>
        </div>
        <div className="right">
          <span>Features</span>
          <Link href="host-event" className="link">
            {" "}
            <p> Card Customization</p>
          </Link>
          <Link href="host-event" className="link">
            {" "}
            <p> Personal event website</p>
          </Link>
          <Link href="host-event" className="link">
            {" "}
            <p>Create wishlist </p>
          </Link>
          <Link href="host-event" className="link">
            <p>Sell a merch (Aso-ebi)</p>
          </Link>
          <Link href="host-event" className="link">
            {" "}
            <p>Event consultation</p>
          </Link>
        </div>
      </TopContainer>
      <BottomContainer>
        <p>Tagbox2024</p>
        <p>hello@tagbox.co</p>
      </BottomContainer>
    </FooterContainer>
  );
};

export { Footer };
