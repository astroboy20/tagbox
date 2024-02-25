import React from "react";
import { WhyContainer } from "./Why.style";
import { Button } from "@/components/Button/Button";

const Why = () => {
  return (
    <WhyContainer >
      <div className="text">
        <span>Why Tagbox?</span>
        <p>
          At Tagbox, we believe in the power of unforgettable moments. Our
          mission is to transform ordinary events into extraordinary
          experiences, where every detail is carefully curated to leave a
          lasting impression. We're not just planners; we're storytellers,
          weaving magic into every event to create memories that will be
          cherished for a lifetime.
        </p>
        <div className="button">
          <Button variant={"dark-button"}>Know More</Button>
        </div>
      </div>
    </WhyContainer>
  );
};

// data-aos="fade-up"

export { Why };
