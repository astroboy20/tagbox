import { Date, Location, Upload } from "@/assets";
import { ColorStyle, SingleEventStyle } from "./SingleEvent.style";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/Input/Input";
import { EventDiv, EventStyle } from "@/components/Input/Input.style";
import { v4 as uuidv4 } from "uuid";
import QRCode from "react-qr-code";
import axios from "axios";
import { InfinitySpin, ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Button } from "@/components/Button/Button";
import { useSelector } from "react-redux";

const SingleEvent = ({ name }) => {
  const { user } = useSelector((state) => state.auth);
  const [event_type, setEventType] = useState("");
  const [event_dressCode, setEvent_Dresscode] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [consultationTime, setConsultationTime] = useState("");
  const [consultation_date, setConsultationDate] = useState("");
  const [invitee, setInvitee] = useState("");
  const [eventDetails, setEventDetails] = useState({
    event_type: event_type,
    wedding_hashtag: "",
    location: "",
    event_date: "",
    dress_code: event_dressCode,
    tag_line: "",
    qr_code: "",
    consultation: consultation_date || "No",
    type_of_consultation: "",
    frequency_of_consultation: "",
    invitee: invitee,
    no_invitee: "",
    upload_cvs: "",
    color_code:"",
  });

  const [loading, setLoading] = useState(false);
  const token = user ? user.data || user : "";
  console.log("token", token);
  const [isCopied, setIsCopied] = useState(false);

  // Function to generate a new unique ID and update QR code value
  const generateId = () => {
    const id = uuidv4();
    setUniqueId(id);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `${id}`,
    }));
  };

  // Function to handle changes in the unique ID
  const handleUniqueIdChange = (event) => {
    const { value } = event.target;
    setUniqueId(value);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `${value}`,
    }));
  };

  const handleEventTypeChange = (type) => {
    setEventType(type);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      event_type: type,
    }));
  };

  const handleDressCodeChange = (type) => {
    setEvent_Dresscode(type);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      dress_code: type,
    }));
  };

  const handleConsultationChange = (type) => {
    setConsultationTime(type);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      consultation: type,
    }));
  };
  const handleInviteeChange = (type) => {
    setInvitee(type);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      invitee: type,
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
  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  const handleCopyClick = () => {
    const inputField = document.getElementById("url");
    const textToCopy = inputField.value;
    copyTextToClipboard(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((error) => {
        toast.warning(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (eventDetails) {
    //   axios
    //     .post("https://tagbox.onrender.com/v1/user/ticket", eventDetails, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then((response) => {
    //       toast.success(response.data.message);
    //     })
    //     .catch((error) => {
    //       toast.error(error);
    //     });
    // } else {
    //   toast.warning("Enter the required field");
    // }
    console.log(eventDetails);
  };

  return (
    <SingleEventStyle>
      <div className="header">
        <span>{name}</span>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <div className="event-display">
            <div>What kind of event are you hosting?</div>

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
            label={`Input your ${name} hashtag `}
            placeholder={"E.g, #Loveunbeaten23, #TayTay24"}
            value={eventDetails.wedding_hashtag}
            name="wedding_hashtag"
            onChange={handleChange}
          />

          <EventStyle>
            <label>Date of event?</label>
            <div>
              <input
                id="date"
                type="datetime-local"
                name="event_date"
                value={eventDetails.event_date}
                onChange={handleChange}
                // style={{ border: "none" }}
              />
              <span>
                <Date />
              </span>
            </div>
          </EventStyle>

          <Input
            variant={"event-input"}
            label={"Enter event Location"}
            icon={<Location />}
            value={eventDetails.location}
            name="location"
            onChange={handleChange}
          />

          <div className="event-display">
            <div>How would you like to input the details of your invitees?</div>

            <div className="input">
              <div className="radio-input">
                <input
                  type="radio"
                  id="manual"
                  value="Manual"
                  name="invitee"
                  checked={invitee === "Manual"}
                  onChange={() => handleInviteeChange("Manual")}
                />
                <label>Manually (add email of invitees manually)</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="cbs"
                  value="CVS"
                  name="invitee"
                  checked={invitee === "CVS"}
                  onChange={() => handleInviteeChange("CVS")}
                />
                <label>Upload the csv file of all invitees</label>
              </div>
            </div>
          </div>

          {invitee === "Manual" && (
            <Input
              variant={"event-input"}
              label={"Input your estimated amount of attendees"}
              icon={<p className="button">Add</p>}
              value={eventDetails.no_invitee}
              name="no_invitee"
              onChange={handleChange}
            />
          )}

          {invitee === "CVS" && (
            <Input
              variant={"event-input"}
              label={"Upload CSV file containing attendees email address"}
              icon={<p onClick={generateId}>Upload</p>}
              value={eventDetails.upload_cvs}
              name="upload_cvs"
              onChange={handleChange}
            />
          )}

        
          <EventStyle>
            <label>Color Code</label>
            <p>Input your color code</p>

            <div>
              <input
                style={{ border: "none", width:"100%" }}
                type="text"
                value={eventDetails.color_code}
                name="color_code"
                onChange={handleChange}
              />
            </div>
          </EventStyle>

          <div className="event-display">
            <div>Dress & Colour code</div>
            <span>Do you have any dress or colour code? </span>
            <div className="input">
              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="dress_code"
                  checked={event_dressCode === "Yes"}
                  onChange={() => handleDressCodeChange("Yes")}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="no"
                  value="No"
                  name="dress_code"
                  checked={event_dressCode === "No"}
                  onChange={() => handleDressCodeChange("No")}
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>

          {eventDetails.dress_code == "Yes" && (
            <EventStyle>
              <label>If yes, upload dress code(Asoebi) </label>
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
          )}

          <div className="event-display">
            <div>Consultation and Planning</div>
            <span>
              We have put in place consultation services with various options to
              help with the proper planning of your event. Would you like to
              book us?{" "}
            </span>
            <div className="input">
              <div className="radio-input">
                <input
                  type="radio"
                  id="consultation-yes"
                  value="Yes"
                  name="consultationType"
                  checked={consultationTime === "Yes"}
                  onChange={() => handleConsultationChange("Yes")}
                />
                <label htmlFor="consultation-yes">Yes</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="consultation-no"
                  value="No"
                  name="consultationType"
                  checked={consultationTime === "No"}
                  onChange={() => handleConsultationChange("No")}
                />
                <label htmlFor="consultation-no">No</label>
              </div>
            </div>
          </div>

          {consultationTime === "Yes" && (
            

            <EventStyle>
            <label>If yes, choose your preferred day and time of your consultation.</label>
            <div>
              <input
                id="date"
                type="date"
                name="event_date"
                value={eventDetails.consultation}
                onChange={handleChange}
                // style={{ border: "none" }}
              />
              <span>
                <Date />
              </span>
            </div>
          </EventStyle>
          )}

          <EventStyle>
            <label>Wishlist</label>
            <label>
              Curate your wishlist here and have well wishers gift you with ease
              and without stress
            </label>
            <label>Upload image of preferred items</label>
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
                  ""
                )}
              </h1>
            </div>
          </EventStyle>

          <div className="event-display">
            <div>Invitation Card</div>
            <div className="images">
              <Image
                src={"/images/1.png"}
                width={400}
                height={500}
                className="image"
                objectFit="contain"
                alt="invitation-card"
              />
              <Image
                src={"/images/3.png"}
                width={400}
                height={500}
                className="image"
                objectFit="contain"
                alt="invitation-card"
              />
              <Image
                src={"/images/2.png"}
                width={400}
                height={500}
                className="image"
                objectFit="contain"
                alt="invitation-card"
              />
            </div>

            <div className="image-button">
              <Image
                src={"/images/2.png"}
                width={400}
                height={500}
                className="image"
                objectFit="contain"
                alt="invitation-card"
              />
              <div className="buttons">
                <Button variant={"dark-transparent"}>
                  Upload invitation card
                </Button>
                <Button variant={"dark-white"}>Customize to your style</Button>
                <p>Browse More Template</p>
              </div>
            </div>
          </div>
          {/* QR code */}
          <EventStyle>
            <label>Generate QR code and customized link for your event</label>

            <div>
              <div className="qr-input">
                <div
                  style={{
                    height: "100%",
                    margin: "2px 0",
                    maxWidth: 64,
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {uniqueId && (
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                      }}
                      value={eventDetails.qr_code}
                      viewBox={`0 0 256 256`}
                    />
                  )}
                </div>
                <EventDiv
                  type="text"
                  value={`https://tagbox.com/${name}/${uniqueId}`}
                  name="qr_code"
                  id="url"
                  onChange={handleUniqueIdChange}
                />
              </div>

              <div className="copy-generate">
                <p onClick={handleCopyClick}>{isCopied ? "Copied" : "Copy"}</p>
                <p onClick={generateId}>Generate</p>
              </div>
            </div>
          </EventStyle>

          {/* end */}
          <Button variant="dark-button">Submit Response</Button>
        </form>
      </div>
    </SingleEventStyle>
  );
};

export { SingleEvent };
