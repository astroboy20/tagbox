// import { Manage } from '@/container/Host/ManageEvent'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector } from "react-redux";
import { Details } from "@/container/Host/ManageEvent";
import { HeaderFixed } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";

const ManageId = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";
  const [eventDetails, setEventDetails] = useState([]);
  const [wishes, setWishes] = useState([]);
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/event/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEventDetails(response.data?.data);
    } catch (error) {}
  };

  const fetchIndividualWishestData = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/attendee/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishes(response.data?.data);
    } catch (error) {
      console.error("Error fetching individual wishes data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchEvent();
      fetchIndividualWishestData();
    }
  }, [id]);

  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        <Details eventDetails={eventDetails} wishes={wishes} />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default ManageId;
