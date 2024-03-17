import { Close, Date, Location, Upload } from "@/assets";
import {
  Actions,
  Buttons,
  ColorStyle,
  Edit,
  SingleEventStyle,
} from "./SingleEvent.style";
import React, { useEffect, useState, useRef } from "react";
import { Input } from "@/components/Input/Input";
import { EventDiv, EventStyle } from "@/components/Input/Input.style";
import { v4 as uuidv4 } from "uuid";
import QRCode from "react-qr-code";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@/components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "@/components/Modal";
import { EventSpinner } from "@/components/Spinner/EventSpinnner";
import Link from "next/link";
import { useRouter } from "next/router";
import EventIv from "./EventIV";
import { MdOutlineCancel } from "react-icons/md";
import Spinner from "@/components/Spinner/Spinner";
import { BlackSpinner } from "@/components/Spinner/BlackSpinner";
import { BankList } from "./Bank";
import { reset } from "@/features/authSlice";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const SingleEvent = ({ name, id }) => {
  const router = useRouter();

  const [eventBg, setEventBg] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [event_type, setEventType] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [consultationTime, setConsultationTime] = useState("");
  const [consultation_date] = useState("");
  const [dressCode, setDresscode] = useState("");
  const [card, setCard] = useState("");
  const [inviteeInput, setInviteeInput] = useState("");
  const [eventDetails, setEventDetails] = useState({
    hosting_type: event_type,
    event_hashtag: "",
    location: "",
    date: "",
    color_code: "",
    dress_code: [],
    invitation_card: "",
    amount_of_invitee: "",
    invitee_emails: [],
    qr_code: "",
    consultation: consultation_date,
    wishlist: [],
    bank_name: "",
    account_number: "",
    account_name: "",
  });
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(
    Array(eventDetails.dress_code.length).fill(false)
  );
  const [message, setMessage] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const token = user ? user.data || user : "";
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("imageUrl");

  //birthday header
  useEffect(() => {
    if (name === "Wedding") {
      setEventBg("header ");
    } else if (name === "Birthday") {
      setEventBg("birthday-header");
    } else if (name === "Graduation") {
      setEventBg("graduation-header ");
    } else if (name === "House Warming") {
      setEventBg("header ");
    } else if (name === "Conference and Meetings") {
      setEventBg("conference-header ");
    } else if (name === "Baby Shower") {
      setEventBg("shower-header ");
    } else if (name === "Hangout") {
      setEventBg("hangout-header ");
    } else if (name === "Others") {
      setEventBg("header ");
    } else {
      setEventBg("header");
    }
  }, [name]);

  // Function to generate a new unique ID and update QR code value
  const generateId = () => {
    const id = uuidv4();
    const trimmed_id = encodeURIComponent(id.trim().slice(0, 8));
    setUniqueId(trimmed_id);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `${trimmed_id}`,
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
        dress_code: [],
      }));
    } else if (type === "No") {
      setDresscode("No");
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: [],
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

  const handleCardChange = (type) => {
    if (type === "Upload") {
      setCard("Upload");
    } else if (type === "Customize") {
      setCard("Customize");
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        invitation_card: imageInfo ? imageInfo : "",
      }));
    }
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

  const handleAsoItem = () => {
    const isAnyEmpty = eventDetails.dress_code.some(
      (item) => item.dress === null || item.dress_price.trim() === ""
    );
    if (isAnyEmpty) {
      toast.error("Please fill out all the fields before adding another item.");
      return;
    }
    setEventDetails((prevState) => ({
      ...prevState,
      dress_code: [...prevState.dress_code, { dress: null, dress_price: "" }],
    }));
  };
  const handleAsoImageChange = async (event, index) => {
    console.log("handleAsoImageChange called with index:", index);
    const imageFile = event.target.files[0];
    try {
      setImageLoading((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "za8tsrje");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
        formData
      );
      console.log("Image upload response:", res.data);
      toast.success("Image upload successful");
      const imageUrl = res.data.secure_url;

      const updatedDressCode = [...eventDetails.dress_code];
      updatedDressCode[index].dress = imageUrl;
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: updatedDressCode,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image:", error);
    } finally {
      setImageLoading((prevState) => {
        const newState = [...prevState];

        newState[index] = false;
        return newState;
      });
    }
  };
  const handleAsoPriceChange = (event, index) => {
    const { value } = event.target;
    const updatedDressCode = [...eventDetails.dress_code];
    updatedDressCode[index].dress_price = value;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      dress_code: updatedDressCode,
    }));
  };

  const handleRemoveAsoItem = (indexToRemove) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      dress_code: prevDetails.dress_code.filter(
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["event_hashtag", "location", "date", "qr_code"];
    const missingFields = requiredFields.filter(
      (field) => !eventDetails[field]
    );
    if (missingFields.length > 0) {
      toast.warning(
        `Please fill out the following fields: ${missingFields.join(", ")}`
      );
      return;
    }

    setLoading(true);
    setModalShow(true);
    if (eventDetails) {
      axios
        .post(`https://tagbox.ployco.com/v1/user/event/${id}`, eventDetails, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setMessage(response?.data.message);
          setLoading(false);
          setModalShow(true);
        })
        .catch((error) => {
          toast.error(error.response.data?.message);
          setError(error.response.data?.message);
          setLoading(false);
          setModalShow(false);
        });
    }
    console.log(eventDetails);
  };

  useEffect(() => {
    if (error === "Unauthorised access, new session required") {
      dispatch(reset());
      router.push("/login");
    }
  }, [error, router]);

  return (
    <SingleEventStyle className="">
      <div className={eventBg}>
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

                    <MdOutlineCancel
                      onClick={() => handleDeleteEmail(email)}
                      fontSize={"30px"}
                      color="red"
                    />
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
            <div className="wishlist">
              <span>Upload dress-code (Aso-Ebi)</span>
              <div className="input-container">
                {eventDetails.dress_code.map((item, index) => (
                  <div className="input" key={index}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleAsoImageChange(e, index)}
                      hidden
                      id={`upload-${index}`}
                    />
                    <div className="upload-aso" htmlFor={`upload-${index}`}>
                      {imageLoading[index] ? <BlackSpinner /> : ""}
                      <label htmlFor={`upload-${index}`}>
                        {item?.dress ? (
                          <div className="success-image">
                            {" "}
                            <IoCheckmarkDoneCircle size={"20px"} />
                            Image Uploaded
                          </div>
                        ) : (
                          " Choose Image"
                        )}
                      </label>{" "}
                    </div>
                    <input
                      type="text"
                      placeholder="Price"
                      value={item.dress_price}
                      onChange={(e) => handleAsoPriceChange(e, index)}
                    />
                    <MdOutlineCancel
                      onClick={() => handleRemoveAsoItem(index)}
                      fontSize={"60px"}
                      color="red"
                    />
                  </div>
                ))}

                <button
                  className="dark-button"
                  type="button"
                  onClick={handleAsoItem}
                >
                  Add Aso-Ebi Item
                </button>
              </div>
            </div>
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

                  <MdOutlineCancel
                    onClick={() => handleRemoveWishlistItem(index)}
                    fontSize={"60px"}
                    color="red"
                  />
                </div>
              ))}
              {/* <br /> */}
              <button
                className="dark-button"
                type="button"
                onClick={handleAddWishlistItem}
              >
                Add Wishlist Item
              </button>
            </div>

            <label>In lieu of cash donation, input account details</label>
            <div className="bank">
              <select
                value={eventDetails.bank_name}
                onChange={handleChange}
                name="bank_name"
              >
                <option value={""} disabled hidden>
                  Choose Bank
                </option>
                {BankList.map((bank) => (
                  <option key={bank.id}>{bank.name}</option>
                ))}
              </select>
              <div className="in-border">
                <div>
                  <label>Account Name</label>
                  <input
                    className="input-border"
                    name="account_name"
                    value={eventDetails.account_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Account Number</label>
                  <input
                    className="input-border"
                    name="account_number"
                    value={eventDetails.account_number}
                    onChange={handleChange}
                  />
                </div>
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
                  value={`https://thetagbox.com/attend-event/${uniqueId}`}
                  name="qr_code"
                  id="url"
                  onChange={generateId}
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
            <div className="input">
              <div className="radio-input">
                <input
                  type="radio"
                  id="iv"
                  value="Customize"
                  name="Customize"
                  checked={card === "Customize"}
                  onChange={() => handleCardChange("Customize")}
                />
                <label htmlFor="Customize">
                  Select and Customize your invitation card
                </label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="iv"
                  value="Upload"
                  name="invitation card"
                  checked={card === "Upload"}
                  onChange={() => handleCardChange("Upload")}
                />
                <label htmlFor="Upload">Upload your invitation card</label>
              </div>
            </div>
            {card === "Customize" && (
              <>
                <EventIv name={name} uniqueId={uniqueId} />
              </>
            )}

            {card === "Upload" && (
              <div className="image-button">
                <div className="buttons">
                  <input
                    onChange={handleInviteImageChange}
                    id="image"
                    accept="image/*"
                    type="file"
                    placeholder="Upload invitation card"
                  />
                </div>
              </div>
            )}
          </div>

          <Button variant="dark-button">Submit Response</Button>
        </form>
      </div>
      <Modal show={modalShow} onClose={() => setModalShow(false)}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Actions className="actions">
              <span>{message}</span>
              <Buttons className="buttons">
                <button className={"white-btn"}>
                  {" "}
                  <Link
                    className="link-white"
                    href={`/attend-event/${decodeURIComponent(uniqueId)}`}
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
