import { useEffect } from "react";
import { Login_Icon, Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import { LoginContainer } from "./Login.style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login, login_with_google, reset } from "@/features/authSlice";
import Image from "next/image";
import Spinner from "@/components/Spinner/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { message, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
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
    <LoginContainer>
      <div className="right">
        <div className="icon">
          <Logo_Blue />
        </div>

        <Image
          src={"/images/login.png"}
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
          <div >
          <Input
            name={"password"}
            label={"Enter Password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            variant={"password"}
            error={
              formik.errors?.password && formik.errors.password
                ? `${formik.errors.password}`
                : null
            }
          />
          <p  style={{textAlign:"right"}}><Link style={{color:"red", fontSize:"16px"}} href={"reset-password"}>Forgot password</Link></p>
          
          </div>
          

          <Button variant={"dark-button"}>
            {" "}
            {isLoading ? <Spinner /> : "Log in"}
          </Button>
          <div className="links">
            <p
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Log In with
              <Image
                src={"/images/google.png"}
                width={24}
                height={24}
                alt="google-logo"
                style={{ cursor: "pointer" }}
                onClick={loginWithgoogle}
              />
            </p>
            <p>
              {" "}
              Don’t have an account?{" "}
              <Link className="link" href="/register">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </LoginContainer>
  );
};

export { Login };
