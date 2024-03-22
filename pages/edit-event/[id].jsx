import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import { EditEvent } from "@/container/Host/Events/EditEvent";
import { useSelector } from "react-redux";
import Spinner from "@/components/Spinner/Spinner";
import { EditSpinner } from "@/components/Spinner/EditSpinner";
import Head from "next/head";

const EventId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [events, setEvent] = useState({});
  const [eventName, setEventName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] =useState(true)

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
      setEvent(response.data.data || {});
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
  }, [events]);

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
      setEventName(response.data.data || "");
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  const eventId = events._id;
  const name = eventName?.event_type;

  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Edit-Event</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed />
          {loading && isLoading ? (
            <EditSpinner />
          ) : (
            <EditEvent events={events} name={name} eventId={eventId} />
          )}
          <Footer />
        </ProtectedRoute>
      </>
    </>
  );
};

export default EventId;
