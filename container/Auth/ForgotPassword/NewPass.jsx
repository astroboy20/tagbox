import { useEffect, useState } from "react";
import { Login_Icon, Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login, login_with_google, reset } from "@/features/authSlice";
import Image from "next/image";
import Spinner from "@/components/Spinner/Spinner";
import { ForgotContainer } from "./ForgotPass.style";
import axios from "axios";
import {toast} from "react-toastify"

const NewPass = () => {
  const router = useRouter();
const [isLoading, setIsLaoding] = useState(false)
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
    }),
    onSubmit: async (values) => {
      setIsLaoding(true)
      await axios.post(
        "https://tagbox.ployco.com/v1/user/new-password",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((response)=>{
        toast.success(response.data?.message)
        router.push("/login")
         setIsLaoding(false)
      }).catch((error)=>{
        toast.error(error.response.data?.message)
         setIsLaoding(false)
      })
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
          <span>New Password</span>
          <p>Enter a new password here...</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name={"password"}
            label={"Enter New Password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            variant={"password"}
            error={
              formik.errors?.password && formik.errors.password
                ? `${formik.errors.password}`
                : null
            }
          />

          <Button variant={"dark-button"}> {isLoading ? <Spinner/> : "Save"}</Button>
        </form>
      </div>
    </ForgotContainer>
  );
};

export { NewPass };
