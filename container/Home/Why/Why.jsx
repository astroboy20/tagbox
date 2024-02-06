import React from "react";
import { WhyContainer } from "./Why.style";
import { Button } from "@/components/Button/Button";

const Why = () => {
  return (
    <WhyContainer>
      <div className="text">
        <span>Why Tagbox?</span>
        <p>
          We offer features or capabilities that fulfill specific needs or solve
          event hosting problems more quickly and with little or no effort
          compared to alternative solutions. It allows users to to customize
          their events to their respective tastes and preference. Also all
          messages and activities done with this product are encrypted.
        </p>
        <div className="button">
        <Button variant={"dark-button"}>Know More</Button>
      </div>
      </div>
     
    </WhyContainer>
  );
};

export { Why };
