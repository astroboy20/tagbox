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

const NewPass = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { message, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_new: "",
    },
    validationSchema: Yup.object().shape({
     
      new_password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
      confirm_new: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      router.push("/host-event");
    }
    // dispatch(reset());
  }, [isSuccess, router]);

  const loginWithgoogle = async () => {
    dispatch(login_with_google());
    // router.push("/googleAuth")

    // const response = await axios.post("https://tagbox.onrender.com/v1/google")
    // const data = response.json()
    // navigate(data.url)
  };
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
          <span>Welcome back to Tagbox</span>
          <p>Login to your account here...</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
       
          <Input
            name={"new_password"}
            label={"Enter New Password"}
            value={formik.values.new_password}
            onChange={formik.handleChange}
            variant={"password"}
            error={
              formik.errors?.new_password && formik.errors.new_password
                ? `${formik.errors.new_password}`
                : null
            }
          />
          <Input
            name={"password"}
            label={"Confirm New Password"}
            value={formik.values.confirm_new}
            onChange={formik.handleChange}
            variant={"password"}
            error={
              formik.errors?.confirm_new && formik.errors.confirm_new
                ? `${formik.errors.confirm_new}`
                : null
            }
          />

          <Button variant={"dark-button"}>
            {" "}
            {"Save"}
          </Button>
         
        </form>
      </div>
    </ForgotContainer>
  );
};

export { NewPass };
