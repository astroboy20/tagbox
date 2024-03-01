import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { SingleEvent } from "@/container/Host/SingleEvent";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AttendEvent } from "@/container/Host/AttendEvent/AttendEvent";
import { useSelector } from "react-redux";

const EventId = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [eventDetails, setEventDetails] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.token || user : "";

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
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  return (
    <>
      <HeaderFixed />
      {/* <SingleEvent name={name} id={id} /> */}
      <AttendEvent />
      <Footer />
    </>
  );
};

export default EventId;
