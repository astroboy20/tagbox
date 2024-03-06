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
import Image from "next/image";

const MainFeature = () => {
  return (
    <MainContainer  data-aos="fade-up"  data-aos-easing="ease-in"
    data-aos-duration="1200">
      <span>Main Features</span>
      <p>
        Explore the primary features of our product informing your decision on
        what works best for you!
      </p>
      <div className="box">
        <div className="sub-box">
          <Image
            src={"/images/card.svg"}
            width={380}
            height={380}
            objectFit="cover"
            alt="virtual-meeting"
            className="image"
          />
          <p> Card Customization</p>
        </div>
        <div className="sub-box">
        <Image
            src={"/images/peww.svg"}
            width={380}
            height={380}
            objectFit="cover"
            alt="virtual-meeting"
            className="image"
          />
          <p>Personal Event website</p>
        </div>
        <div className="sub-box">
        <Image
            src={"/images/aso-ebi.svg"}
            width={380}
            height={380}
            objectFit="cover"
            alt="virtual-meeting"
            className="image"
          />
          <p>Sell a Merch(Aso-ebi)</p>
        </div>
        <div className="sub-box">
        <Image
            src={"/images/consultation.svg"}
            width={380}
            height={380}
            objectFit="cover"
            alt="virtual-meeting"
            className="image"
          />
          <p>Event Consultation</p>
        </div>

        <div className="sub-box">
        <Image
            src={"/images/wishlist.svg"}
            width={380}
            height={380}
            objectFit="cover"
            alt="virtual-meeting"
            className="image"
          />
          <p>Create Wishlist</p>
        </div>
      </div>
    </MainContainer>
  );
};

export { MainFeature };
