import { useState, useEffect } from "react";
import { RegisterContainer } from "./Register.style";
import { Logo, Logo_Blue, Register_Icon } from "@/assets";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { register, reset } from "@/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { message, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
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
      await dispatch(register(values));
    },
  });

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    if (formik.values.password !== value) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
    setConfirmPassword(value);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/login");
    }
    // dispatch(reset());
  }, [isSuccess, router]);

  return (
    <RegisterContainer>
      <div className="left">
        {" "}
        <div className="header">
          <span>Welcome to Tagbox</span>
          <p>Register your account here...</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="name">
            <Input
              name={"firstname"}
              type={"text"}
              onChange={formik.handleChange}
              value={formik.values.firstname}
              label={"First Name"}
              variant={"text"}
              error={
                formik.errors?.firstname && formik.errors.firstname
                  ? `${formik.errors.firstname}`
                  : null
              }
            />
            <Input
              name={"lastname"}
              type={"text"}
              onChange={formik.handleChange}
              value={formik.values.lastname}
              label={"Last Name"}
              variant={"text"}
              error={
                formik.errors?.lastname && formik.errors.lastname
                  ? `${formik.errors.lastname}`
                  : null
              }
              lastName
            />
          </div>

          <Input
            name={"email"}
            type={"email"}
            onChange={formik.handleChange}
            value={formik.values.email}
            label={"Email"}
            variant={"text"}
            error={
              formik.errors?.email && formik.errors.email
                ? `${formik.errors.email}`
                : null
            }
            email
          />
          <Input
            name={"password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            label={"Password"}
            variant={"password"}
            error={
              formik.errors?.password && formik.errors.password
                ? `${formik.errors.password}`
                : null
            }
          />
          <Input
            name={"firstname"}
            label={"Confirm Password"}
            variant={"password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={passwordError}
          />
          <Button type variant={"dark-button"} disabled={!!passwordError}>
            Sign Up
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
              Create an account with{" "}
              <Image
                src={"/images/google.png"}
                width={24}
                height={24}
                alt="google-logo"
              />
            </p>
            <p>
              {" "}
              Already have an account?{" "}
              <Link className="link" href="/login">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="right">
        <div className="icon">
          <Logo_Blue />
        </div>
        <Register_Icon />
      </div>
    </RegisterContainer>
  );
};

export { Register };
