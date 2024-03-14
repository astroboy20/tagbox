import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { HeaderFixed } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NotificationContainer } from "@/container/Notification";

const Notification = () => {
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";
  const [notifications, setNotification] = useState([])

  console.log("user", token);
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
      console.log(response.data.data.notifications);
      setNotification(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log("d",notifications?.length)
  const notificationCount = notifications?.length
  useEffect(() => {
    if (token){
        fetchNotification();
    }
  
  }, [token, user]);

  return (
    <div>
      <HeaderFixed notificationCount={notificationCount}/>
      <NotificationContainer notifications={notifications}/>
      {/* <Footer /> */}
    </div>
  );
};

export default Notification;
