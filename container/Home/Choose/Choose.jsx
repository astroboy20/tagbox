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
          <h2>Leverage digital platforms to connect beyond expectations.</h2>
          <p>
            Our virtual events has everything needed to aid connectivity as well
            as engagements during the event.
          </p>
          <Button variant={"dark-button"}>Schedule Event</Button>
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
