import { useEffect } from "react";
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

const ForgotPass = () => {
  const dispatch = useDispatch();
  const router = useRouter();
//   const { message, isLoading, isError, isSuccess } = useSelector(
//     (state) => state.auth
//   );
  const formik = useFormik({
    initialValues: {
      email: "",
    
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
     
    }),
    onSubmit: async (values) => {
      await dispatch(login(values));
    },
  });

  useEffect(() => {
//    if (isSuccess) {
//       router.push("/host-event");
//     } 
    // dispatch(reset());
  }, []);

  
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
          <span>Forgot Password?</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            label={"Email"}
            variant={"text"}
            error={
              formik.errors?.email && formik.errors.email
                ? `${formik.errors.email}`
                : null
            }
          />

          <Button variant={"dark-button"}>
            {" "}
            {  "Log in"}
          </Button>
        </form>
      </div>
    </ForgotContainer>
  );
};

export { ForgotPass };
