import { useEffect, useState } from "react";
import { Login_Icon, Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Image from "next/image";
import Spinner from "@/components/Spinner/Spinner";
import { ForgotContainer } from "./ForgotPass.style";
import axios from "axios";
import { PinInput, PinInputField } from "@chakra-ui/react";

const ConfirmOtp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [pinValue, setPinValue] = useState('');

  const handlePinChange = (value) => {
    setPinValue(value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      await axios
        .post("https://tagbox.ployco.com/v1/user/reset-password", values)
        .then((response) => {
          console.log(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <div className="form">
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
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
