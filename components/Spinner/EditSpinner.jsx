import { ThreeCircles } from "react-loader-spinner";

const EditSpinner = () => {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:"100dvh",
          padding:"60px auto"
        }}
      >
        <ThreeCircles
          visible={true}
          height="50"
          width="50"
          color="#000"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };
  
  export  {EditSpinner};