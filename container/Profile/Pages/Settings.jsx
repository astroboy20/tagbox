import { Input } from "@/components/Input/Input";
import React from "react";
import { EditContainer, ProfileContainer } from "../Profile.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";

const Settings = () => {
  return (
    <>
      <EditContainer>
        <div className="header">
          <p>Password Settings</p>
        </div>
        <form className="form-p">
          <Input variant={"password"} label={"Write New Password"} />
          <Input variant={"password"} label={"Confirm New Password"} />

          <button className="button">Save and Submit</button>
        </form>
      </EditContainer>
    </>
  );
};

export default Settings;
