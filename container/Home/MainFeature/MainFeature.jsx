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
    <MainContainer>
      <span>Main Features</span>
      <p>
        Delve into the primary features of our product, compelling you to
        consistently choose and use it.
      </p>
      <div className="box">
        <div className="sub-box">
          <Pre_Event />
          <p>Pre Event</p>
        </div>
        <div className="sub-box">
          <During_Event />
          <p>During Event</p>
        </div>
        <div className="sub-box">
        <During_Event />
          <p>Post Event</p>
        </div>
        <div className="sub-box">
          <Consultation />
          <p>Event Consultation</p>
        </div>
        <div className="sub-box">
          <Checklist />
          <p>Event Checklist</p>
        </div>
        <div className="sub-box">
          <Customization />
          <p>Card Customization</p>
        </div>
      </div>
    </MainContainer>
  );
};

export { MainFeature };
