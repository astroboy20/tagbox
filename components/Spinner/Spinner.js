import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThreeCircles
        visible={true}
        height="30"
        width="30"
        color="#fff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;

export const BigSpinner = () =>{
  return(
    <div
    style={{
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ThreeCircles
      visible={true}
      height="60"
      width="60"
      color="#fff"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
  )
}
