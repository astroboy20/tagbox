

import { Input } from "@/components/Input/Input";
import React from "react";
import { EditContainer, ProfileContainer } from "../Profile.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";

const AccountSetting = () => {
  return (
    <>
      <EditContainer>
        <div className="header">
          <p>Account Settings</p>
        </div>
        <form className="form-p">
        <div className="input-container">
            <label>Choose Bank</label>
           <select>
            <option>1</option>
            <option>1</option>
            <option>1</option>
           </select>
          </div>
          <Input variant={"text"} label={"Account Number"} />
          <Input variant={"text"} label={"Account Name"} />

          <button className="button">Save and Submit</button>
        </form>
      </EditContainer>
    </>
  );
};

export default AccountSetting;
