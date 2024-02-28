import React from "react";
import Image from "next/image";
import { DesignStyle } from "./Design.style";
import { Button } from "@/components/Button/Button";

const Design = () => {
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
    </DesignStyle>
  );
};

export { Design };
