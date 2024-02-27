import React from "react";
import { ProfileContainer } from "./Profile.style";
import { useOptionContext } from "@/features/Axios/ProfileOptionContext";
import { OptionItem } from "./Options/Options.style";
import { OptionItems } from "./Options/option";
import Options from "./Options/Options";
import EditProfile from "./Pages/EditProfile";
import Settings from "./Pages/Settings";
import AccountSetting from "./Pages/AccountSetting";

const Profile = () => {
  const { option, switchOption } = useOptionContext();
  const handleSwitch = (option) => {
    switchOption(option);
  };
  return (
    <ProfileContainer>
      <div className="left">
        <div className="options">
          
            {OptionItems.map((optionItem) => (
              <Options
                key={optionItem.value}
                value={optionItem.value}
                label={optionItem.label}
                selected={option === optionItem.value}
                setValue={handleSwitch}
              />
            ))}
         
        </div>
      </div>
      <div className="right">
        {option === "Edit Profile" && <EditProfile />}
        {option === "Notifications" && <Notification />}
        {option === "Account Settings" && <AccountSetting />}
        {option === "Settings" && <Settings />}
      </div>
    </ProfileContainer>
  );
};

export { Profile };
