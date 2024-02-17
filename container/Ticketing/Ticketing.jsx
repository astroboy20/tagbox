import React from "react";
import { TicketingStyle } from "./Ticketing.style";
import Image from "next/image";
import { Input } from "@/components/Input/Input";
import { Date, Location, Upload } from "@/assets";

const Ticketing = () => {
  return (
    <TicketingStyle>
      <div className="header">
        <span>Ticketing</span>
      </div>
      <div className="body">
        <div className="options">
          <p>Sell Ticket</p>
          <p>Buy Ticket</p>
        </div>
        <div className="event-box">
          <div className="sub-box">
            <Image
              src={"/images/meetings.png"}
              width={340}
              height={275}
              alt="meeting"
              className="image-box"
            />
            <div className="radio-input">
              <input type="radio" id="html" />
              <label>Physical</label>
            </div>
          </div>
          <div className="sub-box">
            <Image
              src={"/images/Virtual-meeting.png"}
              width={340}
              height={275}
              alt="meeting"
              className="image-box"
            />

            <div className="radio-input">
              <input type="radio" id="html" />
              <label>Virtual</label>
            </div>
          </div>
          <div className="sub-box">
            <Image
              src={"/images/hybrid-meeting.png"}
              width={340}
              height={300}
              alt="meeting"
              className="image-box"
            />
            <div className="radio-input">
              <input type="radio" id="html" />
              <label>Hybrid (Both Virtual & Physical)</label>
            </div>
          </div>
        </div>
        <form>
          <Input
            variant={"event-input"}
            label={" What is the theme of your event?"}
            placeholder={"E.g, Concerts, get-together, graduation, etc."}
          />
          <Input
            variant={"event-input"}
            label={"Add Location of event?"}
            icon={<Location />}
          />
          <Input
            variant={"event-input"}
            label={"Date of event?"}
            icon={<Date />}
          />
          <Input variant={"event-input"} label={"Dress Code, if any"} />
          <Input
            variant={"event-input"}
            label={"Upload Image "}
            icon={<Upload />}
          />
          <Input
            variant={"event-input"}
            label={"Event Tag Line "}
            placeholder={"Write your tagline here..."}
          />
          <Input
            variant={"event-input"}
            label={"Generate unique QR Code for your event"}
            icon={"Generate"}
          />
          <Input
            variant={"event-input"}
            label={"Ticket price"}
            placeholder={"Enter Your Ticket price here..."}
          />
        </form>
      </div>
      <div>
        Choose your payment method Do you want to display this event publicly?
      </div>
    </TicketingStyle>
  );
};

export { Ticketing };
