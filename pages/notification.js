import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { HeaderFixed } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notification = () => {
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.token || user : "";

  console.log("user",user)
  const fetchNotification = async () => {
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/user/notification",
        {
            headers: {
              Authorization: `Bearer ${user.data}`,
            },
          }
      );
      console.log(response.data);
    } catch (error) {
        console.log(error)
    }
  };
  useEffect(() => {
    fetchNotification();
  }, []);

  return( <div>
    <HeaderFixed/>
    <Footer/>
  </div>)
};

export default notification;
