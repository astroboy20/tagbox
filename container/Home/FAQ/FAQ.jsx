import React from "react";
import { FAQSContainer } from "./FAQ.style";
import { Arrow_Blue } from "@/assets";

const FAQ = () => {
  return (
    <FAQSContainer>
      <span>Frequently Asked Questions</span>
      <div className="box">
        <div className="sub-box">
          <p>  Can i customize to my preferred style and taste?</p>
          <Arrow_Blue />
        </div>
        <div className="sub-box">
          <p> Can i host a concert with this product? </p>
          <Arrow_Blue />
        </div>
        <div className="sub-box">
          <p> Can i trust this product with my security passcodes?</p>
          <Arrow_Blue />
        </div>
        <div className="sub-box">
          <p> Is there a payment plan?</p>
          <Arrow_Blue />
        </div>
      </div>
     



    </FAQSContainer>
  );
};

export { FAQ };
