import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import { EditEvent } from "@/container/Host/Events/EditEvent";
import { useSelector } from "react-redux";

const EventId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [events, setEvent] = useState({});
  const [eventName, setEventName] = useState("");

  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";

  const fetchEventById = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/user/event/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEvent(response.data.data || {}); // Ensure setting an empty object if data is not available
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEventById();
    }
  }, [id]);

  useEffect(() => {
    if (events && events.event_type) {
      fetchEvent(events.event_type);
    }
  }, [events]); // Add events as a dependency here

  const fetchEvent = async (eventId) => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/event-type/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEventName(response.data.data || ""); // Ensure setting an empty string if data is not available
    } catch (error) {
      console.log(error);
    }
  };

const eventId = events._id
console.log(eventId)
  const name = eventName?.event_type;

  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        <EditEvent events={events} name={name} eventId={eventId}/>
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default EventId;
