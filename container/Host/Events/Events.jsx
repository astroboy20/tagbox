import React from "react";
import { EventContainer } from "./Events.style";
import Image from "next/image";
import { Button } from "@/components/Button/Button";

const Events = () => {
  return (
    <EventContainer>
      <span>
        We have curated a list of events you may want to host.
        <br /> Be rest assured that whatever events you go for, we put in our
        best to give you the ease you deserve.
      </span>
      <div className="box">
        <div className="sub-box">
          <Image
            src={"/images/wedding.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Wedding</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/birthday.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Birthday</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/Graduation.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Graduation</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/house-warming.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>House Warming</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/meetings.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Conference and Meetings</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/baby-showers.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Baby Shower</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/hangout.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Baby Shower</p>
          <Button variant={"dark-button"}>Hangout</Button>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/Others.png"}
            width={150}
            height={150}
            alt="weeding"
          />
          <p>Others</p>
          <Button variant={"dark-button"}>Make it happen</Button>
        </div>
        
      </div>
    </EventContainer>
  );
};

export { Events };
