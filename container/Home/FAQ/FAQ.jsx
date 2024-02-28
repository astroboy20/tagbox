import React, { useState } from "react";
import { FAQSContainer } from "./FAQ.style";
import { Arrow_Blue, Arrow_Down } from "@/assets";
import { Data } from "./data";
import { OptionItem } from "@/container/Ticketing/Options/Options.style";

const FAQ = () => {
  const [expansionStates, setExpansionStates] = useState(Data.map(() => false));

  const toggleExpansion = (index) => {
    setExpansionStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <FAQSContainer data-aos="fade-up"  data-aos-easing="ease-in"
    data-aos-duration="1200">
      <span>Frequently Asked Questions</span>
      <div className="box">
        {Data.map((data, index) => (
          <div className="sub-box" key={data.id}>
            <div className="header" onClick={() => toggleExpansion(index)}>
              <p>{data.title}</p>
              <span>
                {expansionStates[index] ? <Arrow_Down /> : <Arrow_Blue />}
              </span>
            </div>
            {expansionStates[index] && (
              <p className={"content-show"}>{data.content}</p>
            )}
          </div>
        ))}
      </div>
    </FAQSContainer>
  );
};

export { FAQ };
