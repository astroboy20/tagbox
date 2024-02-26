import React, { useState } from "react";
import { FAQSContainer } from "./FAQ.style";
import { Arrow_Blue, Arrow_Down } from "@/assets";
import { Data } from "./data";

const FAQ = () => {
  const [select, setSelect] = useState(null);
  const handelSelect = (e) => {
    if (select === e) {
      return setSelect(null);
    }
    setSelect(e);
  };
  return (
    <FAQSContainer data-aos="fade-up" data-aos-delay="1000">
      <span>Frequently Asked Questions</span>
      <div className="box">
        {Data.map((data) => (
          <>
            <div className="sub-box">
            <p> {data.title}</p>
            <span>{select ? <Arrow_Down /> : <Arrow_Blue />}</span>
          </div>
          <p className={select === e ? "content-show" : "content"}>{data.content}</p>
          </>
        
        ))}
      </div>
    </FAQSContainer>
  );
};

export { FAQ };
