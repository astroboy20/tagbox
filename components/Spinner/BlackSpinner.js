import { ThreeCircles } from "react-loader-spinner";

const BlackSpinner = () => {
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
          color="#000"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };
  
  export  {BlackSpinner};