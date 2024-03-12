import React, { useEffect, useState, useRef } from "react";
import { Actions, AttendStyle } from "./AAttend.style";
import { EventStyle } from "@/components/Input/Input.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import html2canvas from "html2canvas";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import { Modal } from "@/components/Modal";
import { Input } from "@/components/Input/Input";

const AttendEvent = ({ name, eventDetails, setEventDetails, id }) => {
  const [availability, setAvailability] = useState("");
  const [eventBg, setEventBg] = useState("");
  const [wish, setWish] = useState("");
  const [senderName, setSenderName] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [disabledItem, setDisabledItem] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [submissionDone, setSubmissionDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleButtonClick = (itemId) => {
    setSelectedItemId(itemId);
    setDisabledItem([...disabledItem, itemId]);
    setShowModal(true);
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
        setShowModal(false);

        const updatedWishlist = eventDetails?.wishlist?.items.map((item) => {
          if (item._id === selectedItemId) {
            return { ...item, confirmed: true };
          }
          return item;
        });

        const updatedEventDetails = {
          ...eventDetails,
          wishlist: { ...eventDetails.wishlist, items: updatedWishlist },
        };
        setEventDetails(updatedEventDetails);
      })
      .catch((error) => {
        console.error("Error confirming attendance:", error);
        // Handle error here
        setLoading(false);
        setShowModal(false);
      });
    setNameInput("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        `https://tagbox.ployco.com/v1/attendee-response/${id}`,
        {
          attending: availability,
          name: name,
          Wish: wish,
        }
      );
      toast.success("Response submitted sucessfully");
      router.push("/")
    } catch (error) {
      toast.error("Something went wrong");
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
    } else {
      setEventBg("header");
    }
  }, [name]);

  return (
    <AttendStyle>
      <div className={eventBg}>
        <span>{eventDetails?.event_hashtag}</span>
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
             <p>Copy</p>
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
                      {item.confirmed ? (
                        <button className="unconfirm">Confirmed</button>
                      ) : (
                        <button
                          className="confirm"
                          onClick={() => handleButtonClick(item._id)}
                          disabled={disabledItem.includes(item._id)}
                        >
                          Confirm
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Actions>
            <input
              type="text"
              placeholder="Enter your name"
              className="input-input"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <input
              type="hidden"
              value={selectedItemId}
              readOnly
              className="input-input"
            />

            <button className="dark-button" onClick={handleConfirm}>
              {loading ? <Spinner /> : "Confirm"}
            </button>
          </Actions>
        </Modal>
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
        {eventDetails?.dress_code === null ? (
          ""
        ) : (
          <div className="location">
            <span>Merch (Aso-ebi)</span>
            <p>{eventDetails?.dress_code}</p>
          </div>
        )}

        <EventStyle>
          <label>Write a wish to the couples</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
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
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
        </EventStyle>
        {eventDetails?.invitation_card === "" ? (
          ""
        ) : (
          <div className="location">
            <span>Invitation Card</span>
            <div className="imageRef" ref={imageRef}>
              <Image
                src={eventDetails?.invitation_card}
                width={400}
                height={560}
                objectFit="contain"
                className="image"
                alt="invitation card"
               
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <button onClick={downloadImage} className="button">
              Download Invitation Card
            </button>
          </div>
        )}

        <Button variant={"dark-button"} onClick={handleSubmit}>
          RSVP
        </Button>
      </div>
    </AttendStyle>
  );
};

export { AttendEvent };
