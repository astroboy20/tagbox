import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { AttendEvent } from "@/container/Host/AttendEvent/AttendEvent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";

const EventId = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.token || user : "";

  const [eventDetails, setEventDetails] = useState(null); 
  const [name, setName] = useState("");

  const fetchEventDetails = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/event/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEventDetails(response.data.data); 
    } catch (error) {
      console.log(error);
    }
  };
  
const eventId = eventDetails?.event_type

  const fetchEventName = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/event-type/${eventId}`
      );
      setName(response.data.data.event_type);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (id) {
      fetchEventDetails(); 
    }
  }, [id]); 

  useEffect(() => {
    if (eventId) {
      fetchEventName();
    }
    
   
  }, [eventId]);
  
  return (
    <>
      {/* <ProtectedRoute> */}
        <HeaderFixed />
        {<AttendEvent name={name} eventDetails={eventDetails} setEventDetails={setEventDetails} id={id}/>}
        <Footer />
      {/* </ProtectedRoute> */}
    </>
  );
};

export default EventId;
