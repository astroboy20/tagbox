import { useEffect, useState } from "react";
import { ManageStyle } from "./Manage.style";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";

const Manage = () => {
  const { user } = useSelector((state) => state.auth);
  const [events, setEvent] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [wisheshId, setWishesId] = useState([]);
  const token = user ? user.data || user : "";
  const fetchEventData = async () => {
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/user/events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEvent(response.data?.data);
    } catch (error) {}
  };

  const fetchTicketData = async () => {
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/user/tickets",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTicket(response.data?.data);
    } catch (error) {}
  };
  const fetchWishestData = async () => {
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/user/wishes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishes(response.data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      fetchEventData();
      fetchTicketData();
      fetchWishestData();
    }
  }, [token]);

  //   const fetchIndividualWishestData = async (qr_code) => {
  //     try {
  //       const response = await axios.get(
  //         `https://tagbox.ployco.com/v1/attendee/${qr_code}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       return response.data?.data;
  //     } catch (error) {
  //       console.error("Error fetching individual wishes data:", error);
  //       return null;
  //     }
  //   };

  //   useEffect(() => {
  //     if (events.length > 0) {
  //       const qrCodes = events.map((event) => event.qr_code);
  //       const wishesPromises = qrCodes.map((qr_code) =>
  //         fetchIndividualWishestData(qr_code)
  //       );
  //       Promise.all(wishesPromises).then((wishesData) => {
  //         setWishesId(wishesData.flat().filter((wish) => wish !== null));
  //       });
  //     }
  //   }, [events]);

  const eventCount = events.length;
  const wishesCount = wishes.length;
  const ticketCount = ticket.length;

  return (
    <ManageStyle>
      <div className="header">Manage Event</div>
      <div className="body">
        <div className="boxes">
          <div className="sub-box-1">
            <p className="heading">Events created</p>
            <p>
              {eventCount === 0
                ? "0"
                : eventCount <= 9
                ? `0${eventCount}`
                : eventCount}
            </p>
          </div>
          <div className="sub-box-2">
            {" "}
            <p className="heading">Wishes Recieved</p>
            <p>
              {wishesCount === 0
                ? "0"
                : wishesCount <= 9
                ? `0${wishesCount}`
                : wishesCount}
            </p>
          </div>
          <div className="sub-box-3">
            <p className="heading">Tickets sold</p>
            <p>
              {" "}
              {ticketCount === 0
                ? "0"
                : ticketCount <= 9
                ? `0${ticketCount}`
                : ticketCount}
            </p>
          </div>
        </div>
        <div className="events">
          <span>Events Created</span>
          {events.map((event) => (
            <>
              <div className="created-events">
                <Link href={`/manage-event/${event?.qr_code}`}>
                  <p>{event?.event_hashtag}</p>
                </Link>

                <button className="button">Edit</button>
              </div>
            </>
          ))}
        </div>
        <div className="wishes">
          {/* <span>
            {" "}
            Wishes Received ({" "}
            {wishesCount === 0
              ? "0"
              : wishesCount <= 9
              ? `0${wishesCount}`
              : wishesCount}
            )
          </span> */}
          <div className="wishes-created">
            {/* {wisheshId.map((wish) => (
            <div key={wish._id} className="items">
              <p className="a">{wish.name}</p>
              <p className="b">{wish.wish}</p>
            </div>
          ))} */}
          </div>
        </div>
      </div>
    </ManageStyle>
  );
};

export { Manage };
