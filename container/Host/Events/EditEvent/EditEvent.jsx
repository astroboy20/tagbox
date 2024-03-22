import { useState, useEffect } from "react";
import { EditStyle } from "./EditEvent.style";
import { Input } from "@/components/Input/Input";
import { EventDiv, EventStyle } from "@/components/Input/Input.style";
import { Location } from "@/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { BlackSpinner } from "@/components/Spinner/BlackSpinner";
import { BankList } from "../../SingleEvent/Bank";
import { v4 as uuidv4 } from "uuid";
import QRCode from "react-qr-code";
import EventIv from "../../SingleEvent/EventIV";
import { Button } from "@/components/Button/Button";
import { useSelector } from "react-redux";
import { Modal } from "@/components/Modal";
import { Buttons } from "../../SingleEvent/SingleEvent.style";
import { Actions } from "../../AttendEvent/AAttend.style";
import Spinner from "@/components/Spinner/Spinner";
import Link from "next/link";

const EditEvent = ({ events, name, eventId }) => {
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";
  const [eventBg, setEventBg] = useState("");
  const [dressCode, setDressCode] = useState("");
  const [uniqueId, setUniqueId] = useState(events?.qr_code || "");
  const [consultationTime, setConsultationTime] = useState("");
  const [card, setCard] = useState("");
  const [consultation_date] = useState("");
  const [inviteeInput, setInviteeInput] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [imageLoading, setImageLoading] = useState(
    Array(events?.dress_code?.length).fill(false)
  );
  const [newDetails, setNewDetails] = useState({
    hosting_type: "",
    date: events?.event_date,
    event_hashtag: "",
    location: "",
    amount_of_invitee: "",
    dress_code: [],
    wishlist: [],
    bank_name: "",
    account_name: "",
    account_number: "",
    qr_code: events?.qr_code,
    invitee_emails: events?.invitee_emails,
    consultationTime: events?.consultation,
    invitation_card: events?.invitation_card,
  });
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("imageUrl");

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
      setEventBg("");
    }
  }, [name]);

  useEffect(() => {
    if (events) {
      setNewDetails({
        hosting_type: events.hosting_type,
        date: events?.event_date,
        event_hashtag: events.event_hashtag,
        location: events.location,
        amount_of_invitee: events.amount_of_invitee,
        dress_code: events.dress_code?.items,
        wishlist: events.wishlist?.items,
        bank_name: events?.bank_account?.bank_name,
        account_name: events?.bank_account?.account_name,
        account_number: events?.bank_account?.account_number,
        qr_code: uniqueId,
        invitee_emails: events?.invitee_emails,
        invitation_card: events?.invitation_card,
      });
    }
  }, [events, uniqueId]);

  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEventTypeChange = (type) => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      hosting_type: type,
    }));
  };

  const handleDressCodeChange = (type) => {
    if (type === "Yes") {
      // ... rest of the code
    } else {
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: events?.dress_code?.items || [],
      }));
    }
    setDressCode(type);
  };

  const handleDressCodeItemChange = async (event, index, field) => {
    if (field === "dress") {
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

        const imageUrl = res.data.secure_url;

        const updatedDressCode = [...newDetails.dress_code];
        updatedDressCode[index][field] = imageUrl;

        setNewDetails((prevDetails) => ({
          ...prevDetails,
          dress_code: updatedDressCode,
        }));

        toast.success("Image upload successful");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error(
          "Error uploading image:",
          error.message || "Unknown error occurred"
        );
      } finally {
        setImageLoading((prevState) => {
          const newState = [...prevState];

          newState[index] = false;
          return newState;
        });
      }
    } else if (field === "dress_price") {
      const { value } = event.target;
      const updatedDressCode = [...newDetails.dress_code];
      updatedDressCode[index][field] = value;
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: updatedDressCode,
      }));
    }
  };

  const handleAddDressCodeItem = () => {
    const allItemsFilled = newDetails.dress_code.every(
      (item) => item.dress && item.dress_price
    );

    if (allItemsFilled) {
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: [
          ...prevDetails.dress_code,
          { dress: null, dress_price: "" },
        ],
      }));
    } else {
      toast.error(
        "Please fill all existing dress code items before adding a new one."
      );
    }
  };
  const handleRemoveDressCodeItem = (indexToRemove) => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      dress_code: prevDetails.dress_code.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const handleWishlistItemChange = async (event, index, field) => {
    if (field === "item_name") {
      const { value } = event.target;
      const updatedWishList = [...newDetails.wishlist];
      updatedWishList[index][field] = value;
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: updatedWishList,
      }));
    } else if (field === "item_link") {
      const { value } = event.target;
      const updatedWishList = [...newDetails.wishlist];
      updatedWishList[index][field] = value;
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: updatedWishList,
      }));
    }
  };

  const handleWishlistItem = () => {
    const allItemsFilled = newDetails.wishlist.every(
      (item) => item.item_name && item.item_link
    );

    if (allItemsFilled) {
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        wishlist: [...prevDetails.wishlist, { item_name: "", item_link: "" }],
      }));
    } else {
      toast.error(
        "Please fill all existing wishlist items before adding a new one."
      );
    }
  };

  const handleRemoveWishListItem = (indexToRemove) => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      wishlist: prevDetails.wishlist.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const generateId = () => {
    if (!uniqueId) {
      const id = uuidv4();
      const trimmed_id = encodeURIComponent(id.trim().slice(0, 8));
      setUniqueId(trimmed_id);
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        qr_code: trimmed_id,
      }));
    }
  };

  useEffect(() => {
    generateId();
  }, []);
  const handleInviteeChange = (inputType) => {
    setInviteeInput(inputType);
  };

  const handleManualSubmit = () => {
    const enteredEmail = document.getElementById("email");
    if (enteredEmail && enteredEmail.value.trim() !== "") {
      const email = enteredEmail.value.trim();
      if (!newDetails.invitee_emails.includes(email)) {
        setNewDetails((prevDetails) => ({
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
    setNewDetails((prevDetails) => ({
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

      setNewDetails((prevDetails) => ({
        ...prevDetails,
        invitee_emails: emails,
      }));
    };

    reader.readAsText(file);
  };
  const handleConsultationChange = (type) => {
    if (type === "Yes") {
      setConsultationTime("Yes");
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        consultation: consultation_date,
      }));
    } else {
      setConsultationTime("");
      setNewDetails((prevDetails) => ({
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
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        invitation_card: imageInfo ? imageInfo : "",
      }));
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

      setNewDetails((prevDetails) => ({
        ...prevDetails,
        invitation_card: imageUrl,
      }));
    } catch (error) {
      toast.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
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

    setIsLoading(true);
    setModalShow(true);

    if (newDetails) {
      axios
        .post(
          `https://tagbox.ployco.com/v1/edit-event/${eventId}`,
          newDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setMessage("Event edited sucessfully");
          // console.log(response.message);
          setIsLoading(false);
          setModalShow(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          setIsLoading(false);
          setModalShow(false);
        });
    }
  };

  return (
    <EditStyle>
      <div className={eventBg}>{name}</div>
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
                  checked={newDetails.hosting_type === "Physical"}
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
                  checked={newDetails.hosting_type === "Virtual"}
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
                  checked={newDetails.hosting_type === "Hybrid"}
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
            value={newDetails.event_hashtag}
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
                value={newDetails.date}
                onChange={handleChange}
              />
              {/* Render the date value directly */}
            </div>
            <span>{formatDate(events?.event_date)}</span>
          </EventStyle>

          <Input
            variant={"event-input"}
            label={"Enter event Location"}
            icon={<Location />}
            value={newDetails.location}
            name="location"
            onChange={handleChange}
          />

          <Input
            variant={"event-input"}
            label={"Input your estimated amount of attendees"}
            value={newDetails.amount_of_invitee}
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
                  checked={inviteeInput === "CSV"}
                  onChange={() => handleInviteeChange("CSV")}
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
                {newDetails.invitee_emails.map((email, index) => (
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
                {newDetails.dress_code &&
                  newDetails.dress_code.map((item, index) => (
                    <div className="input" key={index}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleDressCodeItemChange(e, index, "dress")
                        }
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
                        onChange={(e) =>
                          handleDressCodeItemChange(e, index, "dress_price")
                        }
                      />
                      <MdOutlineCancel
                        type="button"
                        onClick={() => handleRemoveDressCodeItem(index)}
                        fontSize={"60px"}
                        color="red"
                      />
                    </div>
                  ))}
                {/* Add a button to add new dress code items */}
                <button
                  className="dark-button"
                  type="button"
                  onClick={handleAddDressCodeItem}
                >
                  Add Dress Code Item
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
                  value={newDetails.consultation}
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
              {newDetails.wishlist &&
                newDetails.wishlist.map((item, index) => (
                  <div className="input" key={index}>
                    <input
                      type="text"
                      name="item_name"
                      placeholder={"Item Name"}
                      value={item.item_name}
                      onChange={(e) =>
                        handleWishlistItemChange(e, index, "item_name")
                      }
                    />

                    <input
                      type="text"
                      name="item_link"
                      value={item.item_link}
                      placeholder={"Item Link"}
                      onChange={(e) =>
                        handleWishlistItemChange(e, index, "item_link")
                      }
                    />

                    <MdOutlineCancel
                      onClick={() => handleRemoveWishListItem(index)}
                      fontSize={"60px"}
                      color="red"
                    />
                  </div>
                ))}
              {/* <br /> */}
              <button
                className="dark-button"
                type="button"
                onClick={handleWishlistItem}
              >
                Add Wishlist Item
              </button>
            </div>

            <label>In lieu of cash donation, input account details</label>
            <div className="bank">
              <select
                value={newDetails.bank_name}
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
                    value={newDetails.account_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Account Number</label>
                  <input
                    className="input-border"
                    name="account_number"
                    value={newDetails.account_number}
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
                      value={newDetails.qr_code}
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
                  readOnly
                />
              </div>

              <div className="copy-generate">
                {/* <p onClick={generateId}>Generate</p> */}
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
                    id="upload"
                    accept="image/*"
                    type="file"
                    placeholder="Upload invitation card"
                    hidden
                  />
                  <div className="upload-aso" htmlFor={"upload"}>
                    {loading ? <BlackSpinner /> : ""}
                    <label htmlFor={`upload`}>
                      {newDetails.invitation_card ? (
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
                </div>
              </div>
            )}
          </div>

          <Button variant="dark-button">Update Response</Button>
        </form>
      </div>
      <Modal show={modalShow} onClose={() => setModalShow(false)}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Actions className="actions">
              <span>{message}</span>
              <Buttons className="buttons">
                <button className={"white-btn"}>
                  {" "}
                  <Link className="link-white" href={`/manage-event`}>
                    {" "}
                    View Event
                  </Link>
                </button>
              </Buttons>
            </Actions>
          </>
        )}
      </Modal>
    </EditStyle>
  );
};

export { EditEvent };
