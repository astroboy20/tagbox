import React from "react";
import styled from "styled-components";

const Color = () => {
  return (
    <>
      <ColorStyle>
        <div className="sub-box">
          <div className="color a"></div>
          <div className="label">Pacific blue & Linen</div>
        </div>

        <div className="sub-box">
          <div className="color c"></div>
          <div className="label">Pine & Aloe green</div>
        </div>

        <div className="sub-box">
          <div className="color e"></div>
          <div className="label">Indigo & Salmon</div>
        </div>

        <div className="sub-box">
          <div className="color g"></div>
          <div className="label">Bubblegum & Harbor</div>
        </div>

        <div className="sub-box">
          <div className="color g"></div>
          <div className="label">Bubblegum & Harbor</div>
        </div>

        <div className="sub-box">
          <div className="color g"></div>
          <div className="label">Bubblegum & Harbor</div>
        </div>

        <div className="sub-box">
          <div className="color g"></div>
          <div className="label">Bubblegum & Harbor</div>
        </div>

        <div className="sub-box">
          <div className="color g"></div>
          <div className="label">Bubblegum & Harbor</div>
        </div>
      </ColorStyle>
    </>
  );
};

export default Color;

const ColorStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 10px;
  width: 100%;
  z-index:100 ;

  .sub-box {
    display: flex;
    flex-direction: column;
    width: 23%;
  }

  .color {
    height: 120px;
    border-radius: 8px;
    /* z-index:100 ; */
  }

  .label {
    height: 100px;
    position: relative;
    top: -90px;
    border-radius: 8px;
    text-align: center;
    color: #000;
    background-color: #e9e6dd; /* Background color for labels */
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    padding-top: 20px;

  }

  .color.a { background-color: #3976a2; }
  .color.c { background-color: #274140; }
  .color.e { background-color: #3f4d98; }
  .color.g { background-color: #e09bad; }
`;
