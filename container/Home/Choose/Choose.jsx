import React from "react";
import { ChooseContainer } from "./Choose.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
const Choose = () => {
  return (
    <ChooseContainer>
      <span>Choose Your Event Type</span>
      <div className="slider-body">
        <div className="text">
          <h2> Get Your Attendees To Experience the Thrill in Person! </h2>
          <p>
          Host physical event endearing your event attendees to your brand and organization.
          </p>
          <Button variant={"dark-button"}>Host an Event</Button>
        </div>
       
          <Image
            src={"/images/event.png"}
            width={620}
            height={460}
            objectFit="cover"
            alt="virtual-meeting"
            className="image"
          />
        </div>
       

    </ChooseContainer>
  );
};

export { Choose };
