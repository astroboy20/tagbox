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

const EditEvent = ({ events, name }) => {
  console.log(name);
  const [bgName, setBgName] = useState("");
  const [dressCode, setDressCode] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [imageLoading, setImageLoading] = useState(
    Array(events?.dress_code?.length).fill(false)
  );
  const [newDetails, setNewDetails] = useState({
    hosting_type: "",
    date: "",
    event_hashtag: "",
    location: "",
    amount_of_invitee: "",
    color_code: "",
    dress_code: {
      items: [],
    },
    wishlist:{
        items: [], 
    },
    bank_name:"",
    account_name:"",
    account_number:"",
    qr_code:""
  });

  useEffect(() => {
    if (events) {
      setNewDetails({
        hosting_type: events.hosting_type,
        date: events.date,
        event_hashtag: events.event_hashtag,
        location: events.location,
        amount_of_invitee: events.amount_of_invitee,
        color_code: events.color_code,
        dress_code: events.dress_code
          ? { items: [...events.dress_code.items] }
          : { items: [] },
        wishlist: events.wishlist
          ? { items: [...events.wishlist.items] }
          : { items: [] },
        bank_name: events?.bank_account?.bank_name,
        account_name:events?.bank_account?.account_name,
        account_number:events?.bank_account?.account_number,
        qr_code:events?.qr_code
      });

    }
  }, [events]);

  useEffect(() => {
    if (name === "Birthday") {
      setBgName("birthday-header");
    }
  }, [name]);

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
    setDressCode(type);
    if (type === "Yes") {
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: {
          items: prevDetails.dress_code.items,
        },
      }));
    }
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

        const updatedDressCode = [...newDetails.dress_code.items];
        updatedDressCode[index][field] = imageUrl;

        setNewDetails((prevDetails) => ({
          ...prevDetails,
          dress_code: {
            items: updatedDressCode,
          },
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
      const updatedDressCode = [...newDetails.dress_code.items];
      updatedDressCode[index][field] = value;
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: {
          items: updatedDressCode,
        },
      }));
    }
  };

  const handleAddDressCodeItem = () => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      dress_code: {
        items: [
          ...prevDetails.dress_code.items,
          { dress: "", dress_price: "" },
        ],
      },
    }));
  };

  const handleRemoveDressCodeItem = (index) => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      dress_code: {
        items: prevDetails.dress_code.items.filter((_, i) => i !== index),
      },
    }));
  };

  const handleWishlistItemChange = async (event, index, field) => {
    if (field === "name") {
        const { value } = event.target;
        const updatedWishList = [...newDetails.wishlist.items];
        updatedWishList[index][field] = value;
        setNewDetails((prevDetails) => ({
          ...prevDetails,
          dress_code: {
            items: updatedWishList,
          },
        }));

    } else if (field === "link") {
      const { value } = event.target;
      const updatedWishList = [...newDetails.wishlist.items];
      updatedWishList[index][field] = value;
      setNewDetails((prevDetails) => ({
        ...prevDetails,
        dress_code: {
          items: updatedWishList,
        },
      }));
    }
  };

  const handleWishlistItem = () => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      wishlist: {
        items: [
          ...prevDetails.wishlist.items,
          { name: "", link: "" },
        ],
      },
    }));
  };

  const handleRemoveWishListItem = (index) => {
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      wishlist: {
        items: prevDetails.wishlist.items.filter((_, i) => i !== index),
      },
    }));
  };

  const generateId = () => {
    const id = uuidv4();
    const trimmed_id = encodeURIComponent(id.trim().slice(0, 8));
    setUniqueId(trimmed_id);
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `${trimmed_id}`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newDetails);
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
  return (
    <EditStyle>
      <div className={bgName}>{name}</div>
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
              <span>{events?.event_date}</span>
            </div>
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
          <EventStyle>
            <label>Color Code</label>
            <p className="input-p">Input your color code</p>
            <div>
              <input
                style={{ border: "none", width: "100%" }}
                type="text"
                value={newDetails.color_code}
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
                {newDetails.dress_code.items.map((item, index) => (
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
   <div className="wishlist">
            <span>Wishlist</span>
            <label>
              Curate your wishlist here and have well wishers gift you with ease
              and without stress
            </label>
            {/* <label>Upload image of preferred items</label> */}
            <div className="input-container">
              {newDetails.wishlist.items.map((item, index) => (
                <div className="input" key={index}>
                  <input
                    type="text"
                    name="item_name"
                    placeholder={"Item Name"}
                    value={item.item_name}
                    onChange={(e) => handleWishlistItemChange(e, index)}
                  />

                  <input
                    type="text"
                    name="item_link"
                    value={item.item_link}
                    placeholder={"Item Link"}
                    onChange={(e) => handleWishlistItemChange(e, index)}
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
                />
              </div>

              <div className="copy-generate">
                <p onClick={generateId}>Generate</p>
                <p onClick={handleCopyClick}>{isCopied ? "Copied" : "Copy"}</p>
              </div>
            </div>
          </EventStyle>

          {/* end */}

          <button>submit</button>
        </form>
      </div>
    </EditStyle>
  );
};

export { EditEvent };
