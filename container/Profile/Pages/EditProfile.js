import { Input } from "@/components/Input/Input";
import React from "react";
import { EditContainer, ProfileContainer } from "../Profile.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";

const EditProfile = () => {
  return (
    <>
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
        <form>
          <div className="name">
            <Input variant={"text"} label={"First Name"} />
            <Input variant={"text"} label={"Last Name"} />
          </div>
          <div className="email-number">
            <Input variant={"text"} label={"Email "} />
            <Input variant={"text"} label={"Mobile Number"} />
          </div>

          <div className="input-container">
            <label>Generate personalized url link</label>
            <div className="input">
              {" "}
              <input type="text" />
              <Button variant={"dark-button"}>Subscribe</Button>
            </div>
          </div>
          <button className="button">Save and Submit</button>
        </form>
      </EditContainer>
    </>
  );
};

export default EditProfile;
