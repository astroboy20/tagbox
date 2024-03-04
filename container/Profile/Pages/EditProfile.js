import { Input } from "@/components/Input/Input";
import { useEffect, useState } from "react";
import { EditContainer, ProfileContainer } from "../Profile.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import Spinner, { BlackSpinner } from "@/components/Spinner/Spinner";
import { toast } from "react-toastify";
import { Modal } from "@/components/Modal";
import {
  Actions,
  Buttons,
} from "@/container/Host/SingleEvent/SingleEvent.style";
import { EventSpinner } from "@/components/Spinner/EventSpinnner";
const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const token = user ? user.data || user : "";
  const [edited, setEdited] = useState({
    firstname: details?.first_name || "",
    lastname: details?.last_name || "",
    email: details?.email || "",
    mobile_number: "",
  });
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://tagbox.ployco.com/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDetails(response.data?.data);
      if (details) {
        setEdited({
          firstname: details.first_name,
          lastname: details.last_name,
          email: details.email,
          mobile_number: "",
        });
      }
      console.log("edited", edited);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
    if (details) {
      setEdited({
        firstname: details.first_name,
        lastname: details.last_name,
        email: details.email,
        mobile_number: "",
      });
    }
  }, []);
  useEffect(() => {
    if (details) {
      setEdited({
        firstname: details.first_name,
        lastname: details.last_name,
        email: details.email,
        mobile_number: "",
      });
    }
  }, [details]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setEdited((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setModalShow(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tagbox.ployco.com/v1/user/update-profile",
        edited,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response?.data.message);
      fetchUserData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      // setModalShow(false);
    }
  };

  return (
    <EditContainer>
      <div className="header">
        <p>Edit Profile</p>
        <Image
          src={"/images/profile-image.png"}
          width={200}
          height={200}
          alt="profile-image"
          objectFit="contain"
          className="image"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <Input
            variant={"text"}
            label={"First Name"}
            value={edited.firstname}
            name={"first_name"}
            onChange={inputChange}
          />
          <Input
            variant={"text"}
            label={"Last Name"}
            value={edited.lastname}
            name={"last_name"}
            onChange={inputChange}
          />
        </div>
        <Input
          variant={"text"}
          label={"Mobile number "}
          value={edited.mobile_number}
          name={"mobile_number"}
          onChange={inputChange}
        />
        <Input
          variant={"text"}
          label={"Email "}
          value={edited.email}
          name={"email"}
          onChange={inputChange}
        />
        {details?.isGoogleUser ? (
          ""
        ) : (
          <button className="button">"Save and Submit </button>
        )}
      </form>

      <Modal show={modalShow} onClose={() => setModalShow(false)}>
        {isLoading ? (
          <EventSpinner />
        ) : (
          <>
            <Actions className="actions">
              <span>{message}</span>
              <Buttons className="buttons">
                <button
                  onClick={() => setModalShow(false)}
                  className={"white-btn"}
                >
                  Close
                </button>
              </Buttons>
            </Actions>
          </>
        )}
      </Modal>
    </EditContainer>
  );
};

export default EditProfile;
