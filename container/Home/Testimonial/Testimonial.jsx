import React from "react";
import { TestimonialStyle } from "./Testimonial.style";
import Image from "next/image";

const Testimonial = () => {
  return (
    <TestimonialStyle>
      {" "}
      <span>What Our Users Have To Say</span>
     
      <div className="box">
        <div className="sub-box">
          <Image
            src={"/images/female.png"}
            width={160}
            height={160}
            alt="user-image"
          />
          <p>
            I'm impressed with the product's functionality and the range of
            features it offers. My guests were pleased and they enjoyed the
            event.
          </p>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/female.png"}
            width={160}
            height={160}
            alt="user-image"
          />
          <p>
            I'm impressed with the product's functionality and the range of
            features it offers. My guests were pleased and they enjoyed the
            event.
          </p>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/female.png"}
            width={160}
            height={160}
            alt="user-image"
          />
          <p>
            I'm impressed with the product's functionality and the range of
            features it offers. My guests were pleased and they enjoyed the
            event.
          </p>
        </div>
      </div>
    </TestimonialStyle>
  );
};

export { Testimonial };
