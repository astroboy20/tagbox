import React, { useEffect, useState, useRef } from "react";
import { AttendStyle } from "./AAttend.style";
import { EventStyle } from "@/components/Input/Input.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import html2canvas from "html2canvas";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner/Spinner";

const AttendEvent = ({ name, eventDetails }) => {
  const [availability, setAvailability] = useState("");
  const [eventBg, setEventBg] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [disabledItem, setDisabledItem] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [submissionDone, setSubmissionDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleButtonClick = (itemId) => {
    setSelectedItemId(itemId);
    setDisabledItem([...disabledItem, itemId]);
  };

  const handleConfirm = () => {
    if (!nameInput || !selectedItemId) {
      toast.warning("Please enter your name and select an item.");
      return;
    }
    setLoading(true);
    // Send data to backend
    axios
      .post("https://tagbox.ployco.com/v1/confirm", {
        attendeeName: nameInput,
        itemId: selectedItemId,
      })
      .then((response) => {
        toast.success(response.data.message);
        setSubmissionDone(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error confirming attendance:", error);
        // Handle error here
        setLoading(false);
      });
  };

  const handleEventTypeChange = (type) => {
    setAvailability(type);
  };

  const imageRef = useRef(null);

  const downloadImage = () => {
    if (imageRef.current && imageLoaded) {
      // Check if image is loaded before capturing
      html2canvas(imageRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "captured_element.png";
        link.click();
      });
    }
  };

  useEffect(() => {
    if (name === "Wedding") {
      setEventBg("header ");
    } else if (name === "Birthday") {
      setEventBg("birthday-header");
    } else if (name === "Graduation") {
      setEventBg("header ");
    } else if (name === "House Warming") {
      setEventBg("header ");
    } else if (name === "Conference and Meetings") {
      setEventBg("header ");
    } else if (name === "Conference and Meetings") {
      setEventBg("header ");
    } else if (name === "Baby Shower") {
      setEventBg("header ");
    } else if (name === "Hangout") {
      setEventBg("header ");
    } else if (name === "Others") {
      setEventBg("header ");
    }else{
      setEventBg("header")
    }
  }, [name]);
  return (
    <AttendStyle>
      <div className={eventBg}>
        <span>
          {eventDetails?.event_hashtag} 
        </span>
      </div>
      <div className="body">
        <div className="welcome">
          <span>
            Welcome to {eventDetails?.event_hashtag} {name}
          </span>
        </div>
        <div className="location">
          <span>Event location</span>
          <p>{eventDetails?.location}</p>
        </div>
        <div className="avalability">
          <span>Will you be available for this event?</span>
          <div className="input">
            <div className="radio-input">
              <input
                type="radio"
                id="yes"
                value="Yes"
                name="availability"
                checked={availability === "Yes"}
                onChange={() => handleEventTypeChange("Yes")}
              />
              <label>Yes, definitely</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                id="maybe"
                value="Maybe"
                name="availability"
                checked={availability === "Maybe"}
                onChange={() => handleEventTypeChange("Maybe")}
              />
              <label>Maybe</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                id="no"
                value="No"
                name="eventavailability"
                checked={availability === "No"}
                onChange={() => handleEventTypeChange("No")}
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <EventStyle>
          <label>Copy unique entrance code for this event</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              style={{ border: "none" }}
            />
          </div>
        </EventStyle>

        <div className="wishlist">
          <span>Wishlist</span>
          <p>Make a commitment by granting the wishes of the event host</p>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Item</th>
                  <th>Link to purchase item</th>
                  <th>Confirm commitment</th>
                </tr>
              </thead>
              <tbody>
                {eventDetails?.wishlist?.items.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.item_name}</td>
                    <td>{item.item_link}</td>
                    <td>
                      {!disabledItem.includes(item._id) ? (
                        <button
                          className="confirm"
                          onClick={() => handleButtonClick(item._id)}
                        >
                          Confirm
                        </button>
                      ) : (
                        <button className="unconfirm">Confirm</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!submissionDone && selectedItemId && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input-input"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <input
                  type="text"
                  value={selectedItemId}
                  readOnly
                  className="input-input"
                />
              </div>

              <button className="confirm" onClick={handleConfirm}>
                {loading ? <Spinner /> : "Confirm"}
              </button>
            </div>
          )}
        </div>

        <EventStyle>
          <label>Want to do a cash donation instead?</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              style={{ border: "none" }}
            />
            <p>Copy</p>
          </div>
        </EventStyle>

        <div className="location">
          <span>Merch (Aso-ebi)</span>
          <p>{eventDetails?.dress_code}</p>
        </div>

        <EventStyle>
          <label>Write a wish to the couples</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              style={{ border: "none" }}
            />
          </div>
        </EventStyle>

        <EventStyle>
          <label>Input Senders Name</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              style={{ border: "none" }}
            />
          </div>
        </EventStyle>

        <div className="location">
          <span>Invitation Card</span>
          <div>
            <Image
              src={eventDetails?.invitation_card}
              width={400}
              height={560}
              objectFit="contain"
              className="image"
              alt="invitation card"
              ref={imageRef}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <button onClick={downloadImage} className="button">
            Download Invitation Card
          </button>
        </div>

        <Button variant={"dark-button"}>Done</Button>
      </div>
    </AttendStyle>
  );
};
// {
//     "wishlist": {
//         "items": [
//             {
//                 "item_name": "Apple watch ",
//                 "item_link": "Apple.com",
//                 "_id": "65e83893e748cc16acf56a22"
//             },
//             {
//                 "item_name": "iPhone 15",
//                 "item_link": "www.Apple.com",
//                 "_id": "65e83893e748cc16acf56a23"
//             }
//         ]
//     },
//     "_id": "65e83893e748cc16acf56a21",
//     "owner": "65d7ab3ecf8adf7612214bfb",
//     "event_type": "65ca6fe1288b1af031600db6",
//     "hosting_type": "Physical",
//     "event_hashtag": "Seuns40th",
//     "event_date": "2024-04-11T00:00:00.000Z",
//     "location": "Manchester, United Kingdom ",
//     "qr_code": "c5285842-723b-45e5-b587-bd5b12caa67b",
//     "dress_code": "No",
//     "invitation_card": "https://res.cloudinary.com/dm42ixhsz/image/upload/v1709717598/pmrnznhtw5htwmrvyofu.png",
//     "amount_of_invitee": 150,
//     "invitee_emails": [
//         "Simipeterss@gmail.com",
//         "Justxvxo@gmail.com"
//     ],
//     "consultation": null,
//     "__v": 0
// }
export { AttendEvent };
