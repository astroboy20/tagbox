import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UpcomingStyle } from "./UpcomingEvent.style";
import { Button } from "@/components/Button/Button";
import { Test } from "@/assets";
import { useSelector } from "react-redux";
import { BlackSpinner } from "@/components/Spinner/BlackSpinner";
import { useRouter } from "next/router";
import axios from "axios";
import { BigSpinner } from "@/components/Spinner/BigSpinner";

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";

  const [latestEvent, setLatestEvent] = useState([]);
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
  return (
    <UpcomingStyle>
      <span>Upcoming Events</span>

      {isLoading ? (
        <BigSpinner />
      ) : (
        <>
          {latestEvent.map((event, index) => (
            <>
              {index === 0 ? (
                <div className="body" >
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
                    <p> {event.description}</p>
                    <div>
                      <p className="span-a">Event Type: {event.event_type}</p>
                      <p className="span-a">
                        {" "}
                        Event Date: {formatDate(event.date)}{" "}
                      </p>
                    </div>

                    <div className="time">
                      <div className="button">
                        <span className="button-span"> View Event</span>

                        <Button variant={"dark-button"}> Buy Ticket </Button>
                      </div>
                    </div>
                  </div>
                  <p></p>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </>
      )}
    </UpcomingStyle>
  );
};

export { UpcomingEvents };
