import { useEffect, useState } from "react";
import { useOptionContext } from "@/features/Axios/OptionContext";
import { BodyStyle, TicketingStyle } from "../Ticketing.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import { BlackSpinner } from "@/components/Spinner/BlackSpinner";
import { useRouter } from "next/router";
const BuyTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const [latestEvent, setLatestEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = user ? user.data || user : "";
  const fetchhData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/latest-tickets",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLatestEvent(response.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchhData();
  }, []);

  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };

  const { option } = useOptionContext();
  const router = useRouter()
  return (
    <div>
      {option === "Buy" && (
        <TicketingStyle>
          <div className="latest-event">
            <span>{router.pathname === "host-event" ? "" : "Latest Event"} </span>
            {isLoading ? (
              <BlackSpinner />
            ) : (
              <>
                {latestEvent.length === 0 ? (
                  <p
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding:"2% 0",
                      fontSize:"20px",
                    }}
                  >
                    No Event Available
                  </p>
                ) : (
                  <>
                    {latestEvent.map((event) => (
                      <BodyStyle>
                        {" "}
                        <Image
                          src={event.image}
                          width={600}
                          height={320}
                          objectFit="cover"
                          alt="upcoming-event"
                          className="image"
                        />
                        <div className="text">
                          <span className="span-header">{event.theme}</span>
                          <p>
                          {event.description}
                          </p>

                          <p className="span-a">
                            Event Type: {event.event_type}{" "}
                          </p>
                          <p className="span-a">
                            Event Date: {formatDate(event.date)}
                          </p>
                          <div className="time">
                            <div className="button">
                              <span className="button-span"> View Event</span>

                              <Button variant={"dark-button"}>
                                {" "}
                                Buy Ticket{" "}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </BodyStyle>
                    ))}
                  </>
                )}
              </>
            )}
          </div>

          {/* <div className="other-event">
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
                <p className="span-a">Event Date: February 28, 2024. </p>
                <div className="time">
                 
            

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
                <p className="span-a">Event Date: February 28, 2024. </p>
                <div className="time">
                  

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
                <p className="span-a">Event Date: February 28, 2024. </p>
                <div className="time">
            

                  <div className="button">
                    <span className="button-span"> View Event</span>

                    <Button variant={"dark-button"}> Buy Ticket </Button>
                  </div>
                </div>
              </div>
            </BodyStyle>
          </div> */}
        </TicketingStyle>
      )}
    </div>
  );
};

export { BuyTicket };
