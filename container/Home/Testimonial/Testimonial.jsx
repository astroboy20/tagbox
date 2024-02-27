import React from "react";
import { TestimonialStyle } from "./Testimonial.style";
import Image from "next/image";

const Testimonial = () => {
  return (
    <TestimonialStyle data-aos="fade-up" data-aos-delay="1000">
      {" "}
      <span>What Our Users Have To Say</span>
      <div className="box">
        <div className="sub-box">
          <Image
            src={"/images/female.png"}
            width={160}
            height={160}
            alt="user-image"
            className="image"
          />
          <p>
            Tagbox made my event absolutely incredible! Their attention to
            detail and creative touch really set them apart. Highly recommend!
          </p>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/female.png"}
            width={160}
            height={160}
            alt="user-image"
            className="image"
          />
          <p>
            Working with Tagbox was a game-changer for us. They took care of
            everything seamlessly, allowing us to enjoy our event stress-free.
            Can't thank them enough
          </p>
        </div>
        <div className="sub-box">
          <Image
            src={"/images/female.png"}
            width={160}
            height={160}
            alt="user-image"
            className="image"
          />
          <p>
            Tagbox truly understands the importance of creating memorable
            experiences. They transformed our vision into reality and left our
            guests raving about the event.
          </p>
        </div>
      </div>
    </TestimonialStyle>
  );
};

export { Testimonial };
