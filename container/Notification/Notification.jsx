import React from "react";
import { NotificationStyle } from "./Notification.style";

const NotificationContainer = ({ notifications }) => {
  console.log("objectsss", notifications);
  const getTimeDifference = (timeinterval) => {
    const currentTime = new Date();
    const previousTime = new Date(timeinterval);
    const timeDifference = currentTime.getTime() - previousTime.getTime();
    const seconds = Math.floor(timeDifference / 1000);

    const interval = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    if (seconds < interval.minute) {
      return "Just Now";
    } else if (seconds < interval.hour) {
      const mins = Math.floor(seconds / interval.minute);
      return mins === 1 ? "1 min ago" : `${mins} mins ago`;
    } else if (seconds < interval.day) {
      const hours = Math.floor(seconds / interval.hour);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (seconds < interval.week) {
      const days = Math.floor(seconds / interval.day);
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else {
      return previousTime.toDateString();
    }
  };

  return (
    <NotificationStyle>
    <div className="header">Notifications</div>
    {notifications.length === 0 ? (
      <div style={{display:"flex", alignItems:"center",justifyContent:"center", fontSize:"16px", fontWeight:"500"}}>No notifications</div>
    ) : (
      notifications.map((notification, index) => (
        <div key={index} className="item">
          <p className="big">{notification?.notification}</p>
          <p className="small">{getTimeDifference(notification?.time)}</p>
        </div>
      ))
    )}
  </NotificationStyle>
  );
};

export { NotificationContainer };
