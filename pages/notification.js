import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { HeaderFixed } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NotificationContainer } from "@/container/Notification";
import Head from "next/head";
import useSWR from "swr";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
const Notification = () => {
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";
  const [notifications, setNotification] = useState([]);

  const fetchNotification = async () => {
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/user/notification",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNotification(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const notificationCount = notifications?.length;
  useEffect(() => {
    if (token) {
      fetchNotification();
    }
  }, [token, user]);

  return (
    <>
      <Head>
        <title>TagBox | Notification</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed notificationCount={notificationCount} />
          <NotificationContainer notifications={notifications} />
        </ProtectedRoute>

        {/* <Footer /> */}
      </>
    </>
  );
};

export default Notification;
