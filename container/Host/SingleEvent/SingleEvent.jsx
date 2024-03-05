import { Close, Date, Location, Upload } from "@/assets";
import {
  Actions,
  Buttons,
  ColorStyle,
  Edit,
  SingleEventStyle,
} from "./SingleEvent.style";
import React, { useEffect, useState, useRef } from "react";
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
import { Modal } from "@/components/Modal";
import { EventSpinner } from "@/components/Spinner/EventSpinnner";
import Link from "next/link";
import { useRouter } from "next/router";

const SingleEvent = ({ name, id }) => {
  const router = useRouter()

  const inputRef = useRef(null);
  const [birthdayBg, setBirthdayBg] = useState("")
  const { user } = useSelector((state) => state.auth);
  const [event_type, setEventType] = useState("");
  const [event_dressCode, setEvent_Dresscode] = useState(null);
  const [image, setImage] = useState(null);
  const [uniqueId, setUniqueId] = useState("");
  const [consultationTime, setConsultationTime] = useState("");
  const [consultation_date] = useState("");
  const [dressCode, setDresscode] = useState("");
  const [inviteeInput, setInviteeInput] = useState("");
  const [eventDetails, setEventDetails] = useState({
    hosting_type: event_type,
    event_hashtag: "",
    location: "",
    date: "",
    color_code: "",
    dress_code: event_dressCode || "No",
    invitation_card: "",
    amount_of_invitee: "",
    invitee_emails: [],
    qr_code: "",
    consultation: consultation_date,
    wishlist: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const token = user ? user.data || user : "";
  console.log("token", token);
  const [isCopied, setIsCopied] = useState(false);

  //birthday header
  useEffect(() => {
   if (name === "Birthday"){
    setBirthdayBg("header birthday-header")
   }else{
    setBirthdayBg("header")
   }
  }, [name])
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
      hosting_type: type,
    }));
  };

  const handleDressCodeChange = (type) => {
    if (type === "Yes") {
      setDresscode("Yes");
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: null,
      }));
    } else {
      setDresscode("No");
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: "No",
      }));
    }
  };

  const handleConsultationChange = (type) => {
    if (type === "Yes") {
      setConsultationTime("Yes");
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        consultation: consultation_date,
      }));
    } else {
      setConsultationTime("");
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        consultation: "",
      }));
    }
    setConsultationTime(type);
  };

  const handleInviteeChange = (inputType) => {
    setInviteeInput(inputType);
  };

  const handleManualSubmit = () => {
    const enteredEmail = document.getElementById("email");
    if (enteredEmail && enteredEmail.value.trim() !== "") {
      const email = enteredEmail.value.trim();
      if (!eventDetails.invitee_emails.includes(email)) {
        setEventDetails((prevDetails) => ({
          ...prevDetails,
          invitee_emails: [...prevDetails.invitee_emails, email],
        }));
        enteredEmail.value = "";
      } else {
        toast.error("Email already exists.");
      }
    } else {
      toast.error("Field cannot be empty");
    }
  };

  const handleDeleteEmail = (email) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      invitee_emails: prevDetails.invitee_emails.filter((e) => e !== email),
    }));
  };

  const parseCSV = (csvContent) => {
    const rows = csvContent.split("\n");
    const emails = [];

    rows.forEach((row) => {
      const values = row.split(",");

      const email = values[0].trim();

      if (email) {
        emails.push(email);
      }
    });

    return emails;
  };

  const handleCvsUpload = async () => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;

      const emails = parseCSV(text);

      setEventDetails((prevDetails) => ({
        ...prevDetails,
        invitee_emails: emails,
      }));
    };

    reader.readAsText(file);
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
        dressCode: imageUrl,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };
  const handleInviteImageChange = async (event) => {
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
        invitation_card: imageUrl,
      }));
    } catch (error) {
      toast.error("Error uploading image:", error);
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

  const handleWishlistChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWishList = [...eventDetails.wishlist];
    updatedWishList[index][name] = value;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      wishlist: updatedWishList,
    }));
  };

  const handleAddWishlistItem = () => {
    const isAnyEmpty = eventDetails.wishlist.some(
      (item) => item.item_name.trim() === "" || item.item_link.trim() === ""
    );

    if (isAnyEmpty) {
      toast.error("Please fill out all the fields before adding another item.");
      return;
    }
    setEventDetails((prevState) => ({
      ...prevState,
      wishlist: [...prevState.wishlist, { item_name: "", item_link: "" }],
    }));
  };

  const handleRemoveWishlistItem = (indexToRemove) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      wishlist: prevDetails.wishlist.filter(
        (_, index) => index !== indexToRemove
      ),
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

  const [details, setDetails] = useState({
    firstName: "Fidel",
    lastName: "Kairat",
    date: "SAT, 23th OCT 2025",
    time_location: "  12:00 PM, TRANSCORP  HILTON HOTEL",
    ticket: " silviaandmatthew.com before Oct 10, 2025.",
  });
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const requiredFields = [
      "event_hashtag",
      "location",
      "date",
      "amount_of_invitee",
      "hosting_type",
      "color_code",
      "dress_code",
      "invitation_card",
      "invitee_emails",
      "qr_code",
      "wishlist",
    ];
    const missingFields = requiredFields.filter(
      (field) => !eventDetails[field]
    );
    if (missingFields.length > 0) {
      toast.warning(
        `Please fill out the following fields: ${missingFields.join(", ")}`
      );
      return;
    }
    if (eventDetails) {
      axios
        .post(`https://tagbox.ployco.com/v1/user/event/${id}`, eventDetails, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success(response.data.message);
          setMessage(response?.data.message);
          setLoading(false);
          setModalShow(true);
        })
        .catch((error) => {
          toast.error(error);
          setLoading(false);
          setModalShow(false);
        });
    }
    console.log(eventDetails);
  };

  return (
    <SingleEventStyle className="">
      <div className={birthdayBg}>
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
            value={eventDetails.event_hashtag}
            name="event_hashtag"
            onChange={handleChange}
            event
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

          <Input
            variant={"event-input"}
            label={"Input your estimated amount of attendees"}
            value={eventDetails.amount_of_invitee}
            name="amount_of_invitee"
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
                  checked={inviteeInput === "Manual"}
                  onChange={() => handleInviteeChange("Manual")}
                />
                <label>Manually (add email of invitees manually)</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="cvs"
                  value="CSV"
                  name="invitee"
                  checked={inviteeInput === "CSV"} // Check if CSV upload is selected
                  onChange={() => handleInviteeChange("CSV")} // Update inviteeInput state
                />
                <label>Upload the csv file of all invitees</label>
              </div>
            </div>
          </div>

          {inviteeInput === "Manual" && (
            <EventStyle>
              <label>Add email address of invitees manually</label>
              <div>
                <EventDiv type="text" id="email" />

                <p className="button" onClick={handleManualSubmit}>
                  Add
                </p>
              </div>
              <div className="email">
                {eventDetails.invitee_emails.map((email, index) => (
                  <div className="email-details" key={index}>
                    {email}
                    <span
                      onClick={() => handleDeleteEmail(email)}
                      style={{
                        background: "red",
                        borderRadius: "10%",
                        cursor: "pointer",
                      }}
                    >
                      <Close />
                    </span>
                  </div>
                ))}
              </div>
            </EventStyle>
          )}

          {inviteeInput === "CSV" && (
            <EventStyle>
              <label>Upload CSV file containing attendees email address</label>
              <div>
                <input type="file" accept=".csv" onChange={handleCvsUpload} />
              </div>
            </EventStyle>
          )}

          <EventStyle>
            <label>Color Code</label>
            <p className="input-p">Input your color code</p>
            <div>
              <input
                style={{ border: "none", width: "100%" }}
                type="text"
                value={eventDetails.color_code}
                name="color_code"
                onChange={handleChange}
              />
            </div>
          </EventStyle>

          <div className="event-display">
            <div>Dress code</div>
            <span>Do you have any dress code? </span>
            <div className="input">
              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="dressCode"
                  checked={dressCode === "Yes"}
                  onChange={() => handleDressCodeChange("Yes")}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="no"
                  value="No"
                  name="dressCode"
                  checked={dressCode === "No"}
                  onChange={() => handleDressCodeChange("No")}
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>

          {dressCode == "Yes" && (
            <EventStyle>
              <label>Upload dress code(Asoebi) </label>
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
              <label>
                Choose your preferred day and time of your consultation.
              </label>
              <div>
                <input
                  id="date"
                  type="date"
                  name="consultation"
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

          <div className="wishlist">
            <span>Wishlist</span>
            <label>
              Curate your wishlist here and have well wishers gift you with ease
              and without stress
            </label>
            {/* <label>Upload image of preferred items</label> */}
            <div className="input-container">
              {eventDetails.wishlist.map((item, index) => (
                <div className="input" key={index}>
                  <input
                    type="text"
                    name="item_name"
                    placeholder={"Item Name"}
                    value={item.item_name}
                    onChange={(e) => handleWishlistChange(e, index)}
                  />
                  <input
                    type="text"
                    name="item_link"
                    value={item.item_image}
                    placeholder={"Item Link"}
                    onChange={(e) => handleWishlistChange(e, index)}
                  />
                  <span
                    onClick={() => handleRemoveWishlistItem(index)}
                    style={{ background: "red", borderRadius: "50%" }}
                  >
                    <Close />
                  </span>
                </div>
              ))}
              {/* <br /> */}
              <Button
                variant={"dark-button"}
                type="button"
                onClick={handleAddWishlistItem}
              >
                Add Wishlist Item
              </Button>
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
                  value={`https://tagbox.com/attend-event/${uniqueId}`}
                  name="qr_code"
                  id="url"
                  onChange={handleUniqueIdChange}
                />
              </div>

              <div className="copy-generate">
                <p onClick={generateId}>Generate</p>
                <p onClick={handleCopyClick}>{isCopied ? "Copied" : "Copy"}</p>
              </div>
            </div>
          </EventStyle>

          {/* end */}

          <div className="event-display">
            <div>Invitation Card</div>
            <div className="invitation-card">
              <Edit>
                <Image
                  src={
                    "https://res.cloudinary.com/dm42ixhsz/image/upload/v1709557796/edit-test_diyagi.svg"
                  }
                  width={400}
                  height={560}
                  alt="test"
                  className="iv-image"
                />
                <div className="names">
                  <div className="name-one">
                    <p>{details.firstName}</p>
                    <p>{details.lastName}</p>
                  </div>
                  <div className="name-two"></div>
                </div>
                <div className="qr">
                  <p>
                    {uniqueId && (
                      <QRCode
                        size={55}
                        style={{
                          height: "auto",
                        }}
                        value={`https://tagbox.com/attend-event/${uniqueId}`}
                        viewBox={`0 0 256 256`}
                      />
                    )}
                  </p>
                </div>
                <div className="time">
                  <p>{details.date}</p>
                </div>
                <div className="location">
                  <p>{details.time_location}</p>
                </div>
                <div className="ticket">
                  <p>{details.ticket}</p>
                </div>
              </Edit>
              <Edit>
                <Image
                  src={
                    "https://res.cloudinary.com/dm42ixhsz/image/upload/v1709559781/Artboard_1_copy_2_v0esh4.svg"
                  }
                  width={400}
                  height={560}
                  alt="test"
                  className="iv-image"
                />
                <div className="names">
                  <div className="name-one">
                    <p>{details.firstName}</p>
                    <p>{details.lastName}</p>
                  </div>
                  <div className="name-two"></div>
                </div>
                <div className="qr">
                  <p>
                    {uniqueId && (
                      <QRCode
                        size={55}
                        style={{
                          height: "auto",
                        }}
                        value={`https://tagbox.com/attend-event/${uniqueId}`}
                        viewBox={`0 0 256 256`}
                      />
                    )}
                  </p>
                </div>
                <div className="time">
                  <p>{details.date}</p>
                </div>
                <div className="location">
                  <p>{details.time_location}</p>
                </div>
                <div className="ticket">
                  <p>{details.ticket}</p>
                </div>
              </Edit>
            </div>

            <input
              type="text"
              value={details.firstName}
              name="firstName"
              onChange={handleTextChange}
            />
            <input
              type="text"
              value={details.lastName}
              name="lastName"
              onChange={handleTextChange}
            />
            <input
              type="text"
              value={details.date}
              name="date"
              onChange={handleTextChange}
            />
            <input
              type="text"
              value={details.time_location}
              name="time_location"
              onChange={handleTextChange}
              placeholder="time and location"
            />
            <input
              type="text"
              value={details.ticket}
              name="ticket"
              onChange={handleTextChange}
            />

            {/* <div className="images">
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
            </div> */}

            <div className="image-button">
              {/* <Image
                src={"/images/2.png"}
                width={400}
                height={500}
                className="image"
                objectFit="contain"
                alt="invitation-card"
              /> */}
              <div className="buttons">
                <input
                  onChange={handleInviteImageChange}
                  id="image"
                  accept="image/*"
                  type="file"
                  placeholder="Upload invitation card"
                />
                {/* Upload invitation card
                 
                <Button variant={"dark-white"}>Customize to your style</Button> */}
                {/* <p>Browse More Template</p> */}
              </div>
            </div>
          </div>

          <Button variant="dark-button">Submit Response</Button>
        </form>
      </div>
      <Modal show={modalShow} onClose={() => setModalShow(false)}>
        {loading ? (
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
                    href={`/attend-event/${uniqueId}}`}
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
    </SingleEventStyle>
  );
};

export { SingleEvent };
