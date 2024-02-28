

import { Input } from "@/components/Input/Input";
import React from "react";
import { EditContainer, ProfileContainer } from "../Profile.style";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { On } from "@/assets";

const Notification = () => {
  return (
    <>
      <EditContainer>
        <div className="header">
          <p>Notifications </p>
        </div>
        <form className="form-p">
          <div style={{display:"flex", gap:"20px"}}>  <On/>   Allow emails Notification </div>
        
        </form>
      </EditContainer>
    </>
  );
};

export default Notification;
