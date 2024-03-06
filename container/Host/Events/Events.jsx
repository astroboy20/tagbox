import React from "react";
import { EventContainer } from "./Events.style";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import useSWR from "swr";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import { EventImages } from "./Images";
import { UpcomingEvents } from "@/container/Home/UpcomingEvents";
import { BlackSpinner } from "@/components/Spinner/BlackSpinner";

const Events = () => {
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";

  const fetcher = async (url) => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  };

  const { data: eventTypes, error } = useSWR(
    `https://tagbox.ployco.com/v1/event-types`,
    fetcher
  );

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

  if (error)
    return (
      <div style={{ textAlign: "center", margin: "5% 0%" }}>
        Error: {error.message}
      </div>
    );
  if (!eventTypes) return <BlackSpinner />;

  return (
    <EventContainer>
      <span>
        We have curated a list of events you may want to host.
        <br /> Be rest assured that whatever events you go for, we put in our
        best to give you the ease you deserve.
      </span>
      <div className="box">
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
      </div>
      <UpcomingEvents />
    </EventContainer>
  );
};

export { Events };
