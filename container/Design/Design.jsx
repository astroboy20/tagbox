import React, { useState } from "react";
import Image from "next/image";
import { DesignStyle } from "./Design.style";
import { Button } from "@/components/Button/Button";

const Design = () => {
  const [details, setDetails] = useState({
    firstName:"Fidel",
    lastName:"Kairat",
    date:"SAT, 23th OCT 2025",
    time_location:"  12:00 PM, TRANSCORP  HILTON HOTEL",
    ticket:" silviaandmatthew.com before Oct 10, 2025."
  })
  const handleChange = (e) =>{
    const {name,value} = e.target
    setDetails((prev)=>({
      ...prev,
      [name] : value
    }))
  }
  return (
    <DesignStyle>
      <div className="header">
        <span>Customize</span>
      </div>
      <div className="body">
        <p>
          We have made a variety of design templates and you can as well
          customize your own design.
        </p>
        <div className="input-button">
          <div className="input">
            <input placeholder="Email" />
            <Button variant={"dark-button"}>Search Here</Button>
          </div>
          <button className="button">Upload thumbnail</button>
        </div>
      </div>

      <div className="edit">
        <Image
          src={"/images/edit-test.svg"}
          width={400}
          height={560}
          alt="test"
        />
        <div className="names">
          <div className="name-one">
            <p>{details.firstName}</p>
            <p>{details.lastName}</p>
          </div>
          <div className="name-two"></div>
        </div>
        <div className="time">
          <p>{details.date}</p>
        </div>
        <div className="location">
          <p>
          {details.time_location}
            
          </p>
        </div>
        <div className="ticket">
          <p>
            
            {details.ticket}
          </p>
        </div>
      </div>

      <input type="text" value={details.firstName} name="firstName" onChange={handleChange}/>
      <input type="text" value={details.lastName} name="lastName" onChange={handleChange}/>
      <input type="text" value={details.date} name="date" onChange={handleChange}/>
      <input type="text" value={details.time_location} name="time_location" onChange={handleChange} placeholder="time and location"/>
      <input type="text" value={details.ticket} name="ticket" onChange={handleChange}/>
      
      <input/>
    </DesignStyle>
  );
};

export { Design };
