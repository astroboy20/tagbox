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
import Color from "./Color";

const SingleEvent = ({ name }) => {
  const { user } = useSelector((state) => state.auth);
  const [event_type, setEventType] = useState("");
  const [event_dressCode, setEvent_Dresscode] = useState("");
  const [visibility, setVisibility] = useState(true);
  const [uniqueId, setUniqueId] = useState("");
  const [consultation, setConsultation] = useState("")
  const [eventDetails, setEventDetails] = useState({
    event_type: event_type,
    wedding_hashtag: "",
    location: "",
    event_date: "",
    dress_code: event_dressCode,
    image: null,
    tag_line: "",
    qr_code: "",
    consultation: "",
    type_of_consultation:"",
    frequency_of_consultation:"",
    visibility: visibility,
  });

  const [loading, setLoading] = useState(false);
  const token = user ? user.data || user : "";
  console.log("token", token);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    generateId(); // Generate ID on initial render
  }, [name]);

  // Function to generate a new unique ID and update QR code value
  const generateId = () => {
    const id = uuidv4();
    setUniqueId(id);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `https://tagbox.com/${name}/${id}`,
    }));
  };

  // Function to handle changes in the unique ID
  const handleUniqueIdChange = (event) => {
    const { value } = event.target;
    setUniqueId(value);
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `https://tagbox.com/${name}/${value}`,
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
        <div className="options">
          <p>General</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="event-box">
            <div className="sub-box">
              <Image
                src={"/images/meetings.png"}
                width={340}
                height={340}
                alt="meeting"
                objectFit="contain"
                className="image-box"
              />
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
            label={`Insert your ${name} hashtag `}
            placeholder={"E.g, Concerts, get-together, graduation, etc."}
            value={eventDetails.wedding_hashtag}
            name="wedding_hashtag"
            onChange={handleChange}
          />

          <EventStyle>
            <label>Date and Time of event?</label>
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
            label={"Add event Location of event if any"}
            icon={<Location />}
            value={eventDetails.location}
            name="location"
            onChange={handleChange}
          />

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

          {eventDetails.dress_code == "No" && (
            <div className="event-display">
              <div>
                {" "}
                If No, we have varieties of matching colour that you can pick
                from
              </div>
              <div className="colors">
                <Image
                  src={"/images/Pacificblue&Linen.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/Pine & Aloe green.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/Indigo & Salmon.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/Bubblegum & Harbor.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/Sapphire & Dandelion.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/Navy Blue & Light pink.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/Denim & Peach.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="color"
                  objectFit="cover"
                />
                <Image
                  src={"/images/browse colours.png"}
                  width={294}
                  height={200}
                  alt="color"
                  className="sub-color"
                  objectFit="cover"
                />
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
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="no"
                  value="No"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(false)}
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>

          <div className="event-display">
            <div>If yes, what type of consultation?</div>
            <div className="event-box">
              <div className="sub-box">
                <Image
                  src={"/images/meetings.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="contain"
                  className="image-box"
                />
                <div className="radio-input">
                  <input
                    type="radio"
                    id="physical"
                    value="Physical"
                    name="eventType"
                    checked={event_type === "Physical"}
                    onChange={() => handleEventTypeChange("Physical")}
                  />
                  <label>Physical (one-on-one) consultation.</label>
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
                  <label>Virtual (via calls and emails) consultation. </label>
                </div>
              </div>
            </div>
          </div>

          <Input
            variant={"event-input"}
            label={
              "For physical consultation, check here for your nearest location "
            }
            placeholder={"Ikeja"}
            value={eventDetails.tag_line}
            name="tag_line"
            onChange={handleChange}
          />

          <div className="event-display">
            <div>Tick the frequency of your consultation.</div>

            <div className="input">
              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Monday</label>
              </div>

              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Tuesdays</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Wednesdays</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Thursdays</label>
              </div>

              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Fridays</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="visibility"
                  onChange={() => handleVisibilityTypeChange(true)}
                />
                <label htmlFor="yes">Saturdays</label>
              </div>
            </div>
          </div>

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
                objectFit="cover"
                alt="invitation-card"
              />
              <Image
                src={"/images/3.png"}
                width={400}
                height={500}
                className="image"
                objectFit="cover"
                alt="invitation-card"
              />
              <Image
                src={"/images/2.png"}
                width={400}
                height={500}
                className="image"
                objectFit="cover"
                alt="invitation-card"
              />
            </div>

            <div className="image-button">
              <Image
                src={"/images/4.png"}
                width={600}
                height={400}
                className="image"
                objectFit="cover"
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

          <div className="event-display">
            <div>Souvenir Ideas</div>
            <div>
              A list of souvenir ideas have been put in place to help you gift
              your guests.
            </div>
            <div className="event-box-gift">
              <div className="sub-box-gift">
                <Image
                  src={"/images/bag.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="contain"
                  className="image-box-gift"
                />
                <div className="radio-input">
                  <label>Birkin Bag</label>
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/laptopstand.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Laptop Stand</label>
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/phone.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Iphone 15</label>
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/airpod.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Apple Airpods </label>
                  {/* pro (2nd Gen) */}
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/wig.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>12 inch bone straight wig</label>
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/laptop.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Macbook Air 2020</label>
                </div>
              </div>

              <div className="sub-box-gift">
                <Image
                  src={"/images/journal.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Customized Journal</label>
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/shoe.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Dr. Marten Loafers</label>
                </div>
              </div>
              <div className="sub-box-gift">
                <Image
                  src={"/images/glasses.png"}
                  width={340}
                  height={340}
                  alt="meeting"
                  objectFit="cover"
                  className="image-box-gift"
                />

                <div className="radio-input">
                  <label>Anti glare glasses</label>
                </div>
              </div>
            </div>
          </div>

          <Button variant="dark-button">Submit Response</Button>
        </form>
      </div>
    </SingleEventStyle>
  );
};

export { SingleEvent };
