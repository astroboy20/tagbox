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
  });

  const [loading, setLoading] = useState(false);
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
    setVisibility(type);
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
    if (eventDetails) {
      axios
        .post("https://tagbox.onrender.com/v1/user/ticket", eventDetails, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success(response.data.message);
        })
        .catch((error) => {
          toast.error(error);
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
            <div className="event-box">
              <div className="sub-box">
                <Image
                  src={"/images/meetings.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  // objectFit="cover"
                  className="image-box"
                />
                <div className="radio-input">
                  <input
                    type="radio"
                    id="physical"
                    value="Physical"
                    name="eventType"
                    checked={visibility === "Physical"}
                    onChange={() => handleEventTypeChange("Physical")}
                  />
                  <label>Physical</label>
                </div>
              </div>
              <div className="sub-box">
                <Image
                  src={"/images/Virtual-meeting.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box"
                />

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
              </div>
              <div className="sub-box">
                <Image
                  src={"/images/hybrid-meeting.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  className="image-box"
                />
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
              label={"Add Location of event?"}
              icon={<Location />}
              value={eventDetails.location}
              name="location"
              onChange={handleChange}
            />
            <Input
              variant={"event-input"}
              label={"Date of event?"}
              // icon={}
              value={eventDetails.date}
              name="date"
              onChange={handleChange}
            />

            <EventStyle>
              <label>Date of event?</label>
              <div>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={eventDetails.date}
                  onChange={handleChange}
                />
                <p>
                  <Date />
                </p>
              </div>
            </EventStyle>

            <Input
              variant={"event-input"}
              value={eventDetails.dress_code}
              name="dress_code"
              onChange={handleChange}
              label={"Dress Code, if any"}
            />
            {/* <Input
              variant={"event-input"}
              label={" "}
              icon={<Upload />}
              value={eventDetails.image}
              name="image"
              type={"file"}
              onChange={handleImageChange}
            /> */}

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
                      width="200"
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
                <p onClick={generateId}>Generate</p>
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
                    // checked={visibility === true}
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
                    // checked={visibility === false}
                    onChange={() => handleVisibilityTypeChange(false)}
                  />
                  <label htmlFor="no">Disagree</label>
                </div>
              </div>
            </div>

            <Button variant="dark-button">Submit</Button>
          </form>
        </TicketingStyle>
      )}
    </div>
  );
};

export { SellTicket };
