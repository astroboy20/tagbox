import React from "react";
import { ChooseContainer } from "./Choose.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
const Choose = () => {
  return (
    
    <ChooseContainer data-aos="fade-up" data-aos-delay="1000">
      <span>Choose Your Event Type</span>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="slider-body">
              <div className="text">
                <h2>
                  {" "}
                  Get Your Attendees To Experience the Thrill in Person!{" "}
                </h2>
                <p>
                  Host physical event endearing your event attendees to your
                  brand and organization.
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
          </div>
          <div class="carousel-item">
            <div className="slider-body">
              <div className="text">
                <h2>
                  {" "}
                  Allow your attendees be a part of this by connecting
                  virtually!
                </h2>
                <p>
                  No one is expected to miss out not even your attendees. Get
                  them to attend virtually.
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
          </div>
          <div class="carousel-item">
            <div className="slider-body">
              <div className="text">
                <h2> Connect both your physical and virtual attendees. !</h2>
                <p>
                  The thrill of hybrid events? Its one your attendees should be
                  a part of
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
          </div>
        </div>
      </div>
    </ChooseContainer>
  );
};

export { Choose };
