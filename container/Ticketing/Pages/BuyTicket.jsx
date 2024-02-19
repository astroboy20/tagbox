import React from "react";
import { useOptionContext } from "@/features/Axios/OptionContext";
import { BodyStyle, TicketingStyle } from "../Ticketing.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
const BuyTicket = () => {
  const { option } = useOptionContext();
  return (
    <div>
      {option === "Buy" && (
        <TicketingStyle>
          <div className="latest-event">
            <span>Latest Event</span>
            <BodyStyle>
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
                  For Tech sarvys as well as newbies transitioning into tech and
                  this is majorly for techies in the product industry; Product
                  design, Product management and Product development.
                </p>
                <p className="span-a">Event Type: Physical & Virtual </p>
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
            </BodyStyle>
          </div>
          <div className="other-event">
            <span>Other Events</span>
            <BodyStyle>
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
                  For Tech sarvys as well as newbies transitioning into tech and
                  this is majorly for techies in the product industry; Product
                  design, Product management and Product development.
                </p>
                <p className="span-a">Event Type: Physical & Virtual </p>
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
            </BodyStyle>
            <BodyStyle>
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
                  For Tech sarvys as well as newbies transitioning into tech and
                  this is majorly for techies in the product industry; Product
                  design, Product management and Product development.
                </p>
                <p className="span-a">Event Type: Physical & Virtual </p>
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
            </BodyStyle>
            <BodyStyle>
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
                  For Tech sarvys as well as newbies transitioning into tech and
                  this is majorly for techies in the product industry; Product
                  design, Product management and Product development.
                </p>
                <p className="span-a">Event Type: Physical & Virtual </p>
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
            </BodyStyle>
          </div>
        </TicketingStyle>
      )}
    </div>
  );
};

export { BuyTicket };
