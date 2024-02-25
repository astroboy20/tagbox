import React from "react";
import { MainContainer } from "./MainFeature.style";
import {
  Checklist,
  Consultation,
  Customization,
  During_Event,
  Post_Event,
  Pre_Event,
} from "@/assets";

const MainFeature = () => {
  return (
    <MainContainer data-aos="fade-up" data-aos-delay="1000">
      <span>Main Features</span>
      <p>
      Explore the primary features of our product informing your decision on what works best for you!
      </p>
      <div className="box">
        <div className="sub-box">
          <Pre_Event />
          <p>  Card Customization</p>
        </div>
        <div className="sub-box">
          <During_Event />
          <p>Personal Event website</p>
        </div>
        <div className="sub-box">
        <During_Event />
          <p>Sell a Merch(Aso-ebi)</p>
        </div>
        <div className="sub-box">
          <Consultation />
          <p>Event Consultation</p>
        </div>
       
        <div className="sub-box">
          <Customization />
          <p>Create Wishlist</p>
        </div>
      </div>
    




    </MainContainer>
  );
};

export { MainFeature };
