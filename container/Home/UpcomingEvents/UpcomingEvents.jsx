import React from "react";
import Image from "next/image";
import { UpcomingStyle } from "./UpcomingEvent.style";
import { Button } from "@/components/Button/Button";
import { Test } from "@/assets";

const UpcomingEvents = () => {
  return (
    <UpcomingStyle>
      <span>Upcoming Events</span>
      {/* <Test/> */}
      {/* <Image src={"/images/test1.svg"} width={500} height={500}/> */}
      <div className="body">
        {" "}
          <Image
            src={"/images/product.png"}
            width={600}
            height={320}
            objectFit="cover"
            alt="upcoming-event"
            className="image"
          />
        <div className="text">
          <span className="span-header"> Product Conference”24</span>
          <p>
            {" "}
            For Tech sarvys as well as newbies transitioning into tech and this
            is majorly for techies in the product industry; Product design,
            Product management and Product development.
          </p>
          <div>
          <p className="span-a">Event Type: Physical & Virtual </p>
          <p className="span-a">Event Date: February 28, 2024. </p>
          </div>
        
          <div className="time">
            {/* <div>
              <div className="time-a">
                {" "}
                28 <p className="p">Feb,2024.</p>
              </div>
              <div className="time-b">10am GMT</div>
            </div> */}

            <div className="button">
              <span className="button-span"> View Event</span>

              <Button variant={"dark-button"}> Buy Ticket </Button>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </UpcomingStyle>
  );
};

export { UpcomingEvents };
