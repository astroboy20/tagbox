import React, { useState } from "react";
import { useOptionContext } from "@/features/Axios/OptionContext";
import { TicketingStyle } from "../Ticketing.style";
import Image from "next/image";
import { Date, Location, Upload } from "@/assets";
import { Input } from "@/components/Input/Input";
import { EventDiv, EventStyle } from "@/components/Input/Input.style";
import { v4 as uuidv4 } from "uuid";
import QRCode from "react-qr-code";
import axios from "axios";
import { InfinitySpin, ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Button } from "@/components/Button/Button";
import { useSelector } from "react-redux";
import Spinner from "@/components/Spinner/Spinner";
import { Modal } from "@/components/Modal";
import {
  Actions,
  Buttons,
} from "@/container/Host/SingleEvent/SingleEvent.style";
import Link from "next/link";
import { EventSpinner } from "@/components/Spinner/EventSpinnner";

const SellTicket = () => {
  const { option } = useOptionContext();
  const { user } = useSelector((state) => state.auth);
  const [event_type, setEventType] = useState("");
  const [visibility, setVisibility] = useState(true);
  const [uniqueId, setUniqueId] = useState("");
  const [eventDetails, setEventDetails] = useState({
    event_type: event_type,
    theme: "",
    location: "",
    date: "",
    dress_code: "",
    image: null,
    tag_line: "",
    qr_code: uniqueId,
    ticket_price: "",
    visibility: visibility,
    description:""
  });

  const [loading, setLoading] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const token = user ? user.data || user : "";
  console.log("token", token);

  const generateId = () => {
    const id = uuidv4();
    setUniqueId(id);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: id,
    }));
  };

  const handleQrCodeChange = (event) => {
    const { value } = event.target;
    setUniqueId(value);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: value,
    }));
  };

  const handleEventTypeChange = (type) => {
    setEventType(type);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      event_type: type,
    }));
  };

  const handleVisibilityTypeChange = (type) => {
    setVisibility(type);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      visibility: type,
    }));
  };

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "za8tsrje");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
        formData
      );
      toast.success("Image upload successful");
      const imageUrl = res.data.secure_url;

      setEventDetails((prevDetails) => ({
        ...prevDetails,
        image: imageUrl,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    setisLoading(true);
    // showModal(true);
    if (eventDetails) {
      setShowModal(true);
      axios
        .post("https://tagbox.ployco.com/v1/user/ticket", eventDetails, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // toast.success(response.data.message);
          setMessage(response.data.message);
          setisLoading(false);
         
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || "Something went wrong");
          setisLoading(false);
          setShowModal(false);
        });
    } else {
      toast.warning("Enter the required field");
    }
  };

  return (
    <div>
      {option === "Sell" && (
        <TicketingStyle>
          <form onSubmit={handleSubmit}>
            <div className="event-display">
              <div>What kind of event are you hosting</div>
              <div className="input">
                <div className="radio-input">
                  <input
                    type="radio"
                    id="physical"
                    value="Physical"
                    name="eventType"
                    checked={event_type === "Physical"}
                    onChange={() => handleEventTypeChange("Physical")}
                  />
                  <label>Physical</label>
                </div>
                <div className="radio-input">
                  <input
                    type="radio"
                    id="virtual"
                    value="Virtual"
                    name="eventType"
                    checked={event_type === "Virtual"}
                    onChange={() => handleEventTypeChange("Virtual")}
                  />
                  <label>Virtual</label>
                </div>
                <div className="radio-input">
                  <input
                    type="radio"
                    id="hybrid"
                    value="Hybrid"
                    name="eventType"
                    checked={event_type === "Hybrid"}
                    onChange={() => handleEventTypeChange("Hybrid")}
                  />
                  <label>Hybrid (Both Virtual & Physical)</label>
                </div>
              </div>
            </div>

            <Input
              variant={"event-input"}
              label={" What is the theme of your event?"}
              placeholder={"E.g, Concerts, get-together, graduation, etc."}
              value={eventDetails.theme}
              name="theme"
              onChange={handleChange}
            />
            <Input
              variant={"event-input"}
              label={" What is the Description of your event?"}
              placeholder={""}
              value={eventDetails.description}
              name="description"
              onChange={handleChange}
            />
            <Input
              variant={"event-input"}
              label={"Add Location of event?"}
              icon={<Location />}
              value={eventDetails.location}
              name="location"
              onChange={handleChange}
            />

            <EventStyle>
              <label>Date and Time of event?</label>
              <div>
                <input
                  id="date"
                  type="datetime-local"
                  name="date"
                  value={eventDetails.date}
                  onChange={handleChange}
                  style={{ border: "none" }}
                />
                <span>
                  <Date />
                </span>
              </div>
            </EventStyle>

            <Input
              variant={"event-input"}
              value={eventDetails.dress_code}
              name="dress_code"
              onChange={handleChange}
              label={"Dress Code, if any"}
            />

            <EventStyle>
              <label>Upload Image</label>
              <div>
                <input
                  id="image"
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                />
                <h1>
                  {loading ? (
                    <InfinitySpin
                      visible={true}
                      width="50"
                      color="#000"
                      ariaLabel="infinity-spin-loading"
                    />
                  ) : (
                    <Upload />
                  )}
                </h1>
              </div>
            </EventStyle>

            <Input
              variant={"event-input"}
              label={"Event Tag Line "}
              placeholder={"Write your tagline here..."}
              value={eventDetails.tag_line}
              name="tag_line"
              onChange={handleChange}
            />

            {/* QR code */}
            <EventStyle>
              <label>Generate unique QR Code for your event</label>

              <div>
                <div
                  style={{
                    height: "auto",
                    margin: "5px 0",
                    maxWidth: 64,
                    width: "100%",
                  }}
                >
                  {uniqueId && (
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                      }}
                      value={uniqueId}
                      viewBox={`0 0 256 256`}
                    />
                  )}
                </div>

                <EventDiv
                  type="hidden"
                  value={uniqueId}
                  name="qr_code"
                  onChange={handleQrCodeChange}
                />
                <div className="copy-generate">
                  <p onClick={generateId}>Generate</p>
                </div>
              </div>
            </EventStyle>

            {/* end */}

            <Input
              variant={"event-input"}
              label={"Ticket price"}
              placeholder={"Enter Your Ticket price here..."}
              value={eventDetails.ticket_price}
              name="ticket_price"
              onChange={handleChange}
            />

            <div className="event-display">
              <span>Do you want to display this event publicly?</span>
              <div className="input">
                <div className="radio-input">
                  <input
                    type="radio"
                    id="yes"
                    value="Yes"
                    name="visibility"
                    onChange={() => handleVisibilityTypeChange(true)}
                  />
                  <label htmlFor="yes">Agree</label>
                </div>
                <div className="radio-input">
                  <input
                    type="radio"
                    id="no"
                    value="No"
                    name="visibility"
                    onChange={() => handleVisibilityTypeChange(false)}
                  />
                  <label htmlFor="no">Disagree</label>
                </div>
              </div>
            </div>

            <Button variant="dark-button"> Submit</Button>
          </form>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            {isloading ? (
              <EventSpinner />
            ) : (
              <>
                <Actions className="actions">
                  <span>{message}</span>
                  <Buttons className="buttons">
                    <button className={"white-btn"}>
                      {" "}
                      <Link
                        className="link-white"
                        href={`/host-event`}
                        // href={`/attend-event/${uniqueId}}`}
                      >
                        {" "}
                        View Event
                      </Link>
                    </button>
                    <button className={"dark-button"}>
                      <Link className="link" href={"/host-event"}>
                        {" "}
                        Continue
                      </Link>
                    </button>
                  </Buttons>
                </Actions>
              </>
            )}
          </Modal>
        </TicketingStyle>
      )}
    </div>
  );
};

export { SellTicket };
