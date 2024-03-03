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

  const [eventDetails, setEventDetails] = useState(null); // Initialize eventDetails as null

  const fetchEventDetails = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.onrender.com/v1/event/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEventDetails(response.data.data); // Set eventDetails after fetching data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEventDetails(); // Call fetchEventDetails only if id is defined
    }
  }, [id]); // Add id as a dependency to re-run useEffect when id changes

  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        {/* Check if eventDetails is not null before rendering AttendEvent */}
        {eventDetails && <AttendEvent eventDetails={eventDetails} />}
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default EventId;
