import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/features/authSlice";
import { useRouter } from "next/router";
import { RotatingLines, ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";
import Head from "next/head";

const GoogleAuth = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const { isSuccess, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      dispatch(updateUser(token));
      setRedirecting(true);
    }
  }, [router]);

  useEffect(() => {
    if (user) {
      router.push("/host-event");
      toast.success("Login Successful");
    }
  }, [isSuccess, redirecting, router]);

  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Google</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
    </>
  );
};

export default GoogleAuth;
