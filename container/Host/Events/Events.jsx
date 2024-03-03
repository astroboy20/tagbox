import React, { useState, useEffect } from "react";
import { EventContainer } from "./Events.style";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import { EventImages } from "./Images";
import { UpcomingEvents } from "@/container/Home/UpcomingEvents";
import { BlackSpinner } from "@/components/Spinner/BlackSpinner";
// import { BigSpinner } from "@/components/Spinner/Spinner";
const Events = () => {
  const [eventTypes, setEventType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";

  const fetchEventTypes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/event-types",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEventType(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const getEventImage = (eventType) => {
    const eventImageMap = {
      Wedding: "Wedding",
      Birthday: "Birthday",
      Graduation: "Graduation",
      "House Warming": "House_Warming",
      "Conference and Meetings": "Conference",
      "Baby Shower": "Shower",
      Hangout: "Hangout",
      Others: "Others",
    };

    const mappedEventType = eventImageMap[eventType] || eventType;
    return EventImages[mappedEventType];
  };

  return (
    <EventContainer>
      <span>
        We have curated a list of events you may want to host.
        <br /> Be rest assured that whatever events you go for, we put in our
        best to give you the ease you deserve.
      </span>
      <div className="box">
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BlackSpinner />
          </div>
        ) : (
          <>
            {" "}
            {eventTypes.map((eventType) => (
              <div className="sub-box" key={eventType._id}>
                {getEventImage(eventType.event_type)}
                <p>{eventType?.event_type}</p>
                <Button variant={"dark-button"}>
                  <Link className="link" href={`host-event/${eventType?._id}`}>
                    {" "}
                    Make it happen
                  </Link>
                </Button>
              </div>
            ))}
          </>
        )}
      </div>
      <UpcomingEvents />
    </EventContainer>
  );
};

export { Events };
