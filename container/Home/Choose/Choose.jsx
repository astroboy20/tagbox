import React from "react";
import { ChooseContainer } from "./Choose.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Choose = () => {
  return (
    <ChooseContainer  data-aos="fade-up"  data-aos-easing="ease-in"
    data-aos-duration="1200">
      <span>Choose Your Event Type</span>
      <Carousel controls={false}>
        <Carousel.Item interval={1000}>
          <div className="slider-body">
            <div className="text">
              <h2> Get Your Attendees To Experience the Thrill in Person! </h2>
              <p>
                Host physical event endearing your event attendees to your brand
                and organization.
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
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="slider-body">
            <div className="text">
              <h2>
                {" "}
                Allow your attendees be a part of this by connecting virtually!
              </h2>
              <p>
                No one is expected to miss out not even your attendees. Get them
                to attend virtually.
              </p>
              <Button variant={"dark-button"}>Host an Event</Button>
            </div>

            <Image
              src={"/images/allow.png"}
              width={620}
              height={460}
              objectFit="cover"
              alt="virtual-meeting"
              className="image"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="slider-body">
            <div className="text">
              <h2> Connect both your physical and virtual attendees. !</h2>
              <p>
                The thrill of hybrid events? Its one your attendees should be a
                part of
              </p>
              <Button variant={"dark-button"}>Host an Event</Button>
            </div>

            <Image
              src={"/images/connect.png"}
              width={620}
              height={460}
              objectFit="cover"
              alt="virtual-meeting"
              className="image"
            />
          </div>
        </Carousel.Item>
      </Carousel>

    
    </ChooseContainer>
  );
};

export { Choose };
