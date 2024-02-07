import React from "react";
import Image from "next/image";
import { UpcomingStyle } from "./UpcomingEvent.style";
import { Button } from "@/components/Button/Button";
const UpcomingEvents = () => {
  return (
    <UpcomingStyle>
      <span>Upcoming Events</span>
      <div className="body">
        {" "}
        <div className="image">
          <Image
            src={"/images/product.png"}
            width={600}
            height={320}
            objectFit="cover"
            alt="upcoming-event"
          />
        </div>
        <div className="text">
          <span className="span-header"> Product Conference”24</span>
          <p>
            {" "}
            For Tech sarvys as well as newbies transitioning into tech and this
            is majorly for techies in the product industry; Product design,
            Product management and Product development.
          </p>
          <p className="span-a">Event Type: Physical & Virtual </p>
          <div className="time">
            <div className="a"> 28 Feb , 2024</div>
            <div className="b">10am GMT</div>
          </div>

          <div className="button">
            <span className="button-span"> View Event</span>

            <Button variant={"dark-button"}> Buy Ticket </Button>
          </div>
        </div>
        <p></p>
      </div>
    </UpcomingStyle>
  );
};

export { UpcomingEvents };
