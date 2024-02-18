import React from "react";
import { TicketingStyle } from "./Ticketing.style";
import Image from "next/image";
import { Input } from "@/components/Input/Input";
import { Date, Location, Upload } from "@/assets";
import Options from "./Options/Options";
import { useOptionContext } from "@/features/Axios/OptionContext";
import { OptionItems } from "./Options/option";
import { BuyTicket } from "./Pages/BuyTicket";
import { SellTicket } from "./Pages/SellTicket";

const Ticketing = () => {
  const { option, switchOption } = useOptionContext();
  const handleSwitch = (option) => {
    switchOption(option);
  };
  return (
    <TicketingStyle>
      <div className="header">
        <span>Ticketing</span>
      </div>
      <div className="body">
        <div className="options">
          <p>
            {OptionItems.map((optionItem) => (
              <Options
                key={optionItem.value}
                value={optionItem.value}
                label={optionItem.label}
                selected={option === optionItem.value}
                setValue={handleSwitch}
              />
            ))}
          </p>
        </div>

        {option === "Buy" && (
          <>
            <BuyTicket />
          </>
        )}
        {option === "Sell" && (
          <>
            <SellTicket />
          </>
        )}
      </div>
    </TicketingStyle>
  );
};

export { Ticketing };
