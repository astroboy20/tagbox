import { useEffect, useState } from "react";
import {  Logo_Blue,  } from "@/assets";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Spinner from "@/components/Spinner/Spinner";
import { ForgotContainer } from "./ForgotPass.style";
import axios from "axios";
import { PinInput, PinInputField } from "@chakra-ui/react";
import {toast} from "react-toastify"

const ConfirmOtp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  const [dataToken, setDataToken] = useState("")

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Disable further typing if all boxes are filled
    if (index === 4 && value !== '') {
      const pinInputFields = document.querySelectorAll('.pin-input-field');
      pinInputFields.forEach((field, i) => {
        if (i > index) {
          field.setAttribute('disabled', 'true');
        }
      });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    const otp = otpValues.join('');
    try {
        const response  = await axios.post("https://tagbox.ployco.com/v1/user/confirm-otp", otp)
        toast.success(response.data.message)
        setDataToken(response.data?.data)
        router.push("/new-password")
    } catch (error) {
        toast.error(error.response.data?.message)
    }finally{
        setIsLoading(false)
    }
  };
typeof window !== "undefined" && localStorage.setItem("token",dataToken)
  return (
    <ForgotContainer>
      <div className="right">
        <div className="icon">
          <Logo_Blue />
        </div>

        <Image
          src={"/images/forgot_password.png"}
          width={575}
          height={380}
          alt="login-image"
          className="image"
        />
      </div>
      <div className="left">
        {" "}
        <div className="header">
          <span>Confirm OTP</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <PinInput>
              {otpValues.map((value, index) => (
                <PinInputField
                  key={index}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="pin-input-field"
                  maxLength={1} // Limit input to 1 character
                />
              ))}
            </PinInput>
          </div>

          <Button variant={"dark-button"}>
            {" "}
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </form>
      </div>
    </ForgotContainer>
  );
};

export { ConfirmOtp };
