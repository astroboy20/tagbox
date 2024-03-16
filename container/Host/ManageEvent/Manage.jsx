import { useEffect, useState } from "react";
import { ManageStyle } from "./Manage.style";
import axios from "axios";
import { useSelector } from "react-redux";

const Manage = () => {
  const { user } = useSelector((state) => state.auth);
  const [event, setEvent] = useState([]);
  const [ticket, setTicket] = useState([]);
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

  useEffect(() => {
    if (token) {
      fetchEventData();
      fetchTicketData();
    }
  }, [token]);

  const eventCount = event.length;
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
            <p>40</p>
          </div>
          <div className="sub-box-3">
            <p className="heading">Tickets sold</p>
            <p> {ticketCount === 0
                ? "0"
                : ticketCount <= 9
                ? `0${ticketCount}`
                : ticketCount}</p>
          </div>
        </div>
        <div className="events">
          <span>Events Created</span>
          <div className="created-events">
            <p>#Kafidel24’s Wedding</p>
            <button className="button">Edit</button>
          </div>
          <div className="created-events">
            <p>Simi@50 Birthday Party</p>
            <button className="button">Edit</button>
          </div>
        </div>
        <div className="wishes">
          <span> Wishes Received (40)</span>
          <div className="wishes-created">
            <div className="items">
              <p className="a"> Adedamola</p>
              <p className="b">
                As you embark on this beautiful journey together, may your
                marriage be a tapestry woven with love, trust, and
                understanding. Wishing you a lifetime of happiness, cherished
                moments, and a love that grows stronger with each passing day.
                Congratulations and best wishes for a blissful future!
              </p>
            </div>
          </div>
        </div>
      </div>
    </ManageStyle>
  );
};

export { Manage };
