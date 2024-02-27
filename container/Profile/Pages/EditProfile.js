import { Input } from "@/components/Input/Input";
import React from "react";
import { EditContainer, ProfileContainer } from "../Profile.style";

const EditProfile = () => {
  return (
    <>
      <EditContainer>
        <form>
          <div className="name">
            <Input variant={"text"} label={"First Name"} />
            <Input variant={"text"} label={"Last Name"} />
          </div>
          <div className="email-number">
            <Input variant={"text"} label={"Email "} />
            <Input variant={"text"} label={"Mobile Number"} />
          </div>

          <Input variant={"text"} label={"Generate personalized url link"} />
        </form>
      </EditContainer>
    </>
  );
};

export default EditProfile;
