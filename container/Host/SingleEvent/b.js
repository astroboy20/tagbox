
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";
import QRCode from "react-qr-code";
import { MdOutlineCancel } from "react-icons/md";

// Import custom components
import EventHeader from "./EventHeader";
import EventForm from "./EventForm";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner/Spinner";
import { reset } from "@/features/authSlice";

const SingleEvent = ({ name, id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const token = user ? user.data || user : "";

  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [eventDetails, setEventDetails] = useState({
    hosting_type: "",
    event_hashtag: "",
    location: "",
    date: "",
    color_code: "",
    dress_code: [],
    invitation_card: "",
    amount_of_invitee: "",
    invitee_emails: [],
    qr_code: "",
    consultation: "",
    wishlist: [],
    bank_name: "",
    account_number: "",
    account_name: "",
  });

  useEffect(() => {
    // Check for error and redirect if unauthorized
    if (error === "Unauthorised access, new session required") {
      dispatch(reset());
      router.push("/login");
    }
  }, [error, router, dispatch]);

  // Function to generate a new unique ID and update QR code value
  const generateId = () => {
    const id = uuidv4();
    const trimmed_id = encodeURIComponent(id.trim().slice(0, 8));
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      qr_code: `${trimmed_id}`,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log(eventDetails);
  };

  return (
    <>
      <EventHeader name={name} />
      <EventForm
        eventDetails={eventDetails}
        setEventDetails={setEventDetails}
        generateId={generateId}
        handleSubmit={handleSubmit}
      />
      <Modal show={modalShow} onClose={() => setModalShow(false)}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {/* Modal content for success/error */}
          </>
        )}
      </Modal>
    </>
  );
};

export default SingleEvent;



const EventHeader = ({ eventType }) => {
  let headerText = "";
  switch (eventType) {
    case "Wedding":
      headerText = "Wedding Event";
      break;
    case "Birthday":
      headerText = "Birthday Celebration";
      break;
    // Add more cases for other event types
    default:
      headerText = "Event Header";
      break;
  }

  return (
    <div>
      <h2>{headerText}</h2>
    </div>
  );
};

export  {EventHeader}

const EventForm = ({ eventDetails, setEventDetails, generateId, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for event details */}
      <input
        type="text"
        name="hosting_type"
        value={eventDetails.hosting_type}
        onChange={handleChange}
        placeholder="Hosting Type"
      />
      {/* Add other input fields as needed */}
      
      {/* Button to generate QR code */}
      <button type="button" onClick={generateId}>
        Generate QR Code
      </button>

      {/* QR code display */}
      {eventDetails.qr_code && (
        <div>
          <h4>QR Code:</h4>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${eventDetails.qr_code}`} alt="QR Code" />
        </div>
      )}

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export  {EventForm}
