import React from "react";
import { ChooseContainer } from "./Choose.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
const Choose = () => {
  return (
    <ChooseContainer data-aos="fade-up" data-aos-delay="1000">
      <span>Choose Your Event Type</span>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
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
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </ChooseContainer>
  );
};

export { Choose };
