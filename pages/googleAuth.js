import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/features/authSlice";
import { useRouter } from "next/router";
import { RotatingLines, ThreeCircles } from "react-loader-spinner";

const GoogleAuth = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false); // State to manage redirection
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      dispatch(updateUser(token));
      setRedirecting(true); // Set redirecting to true when token is received
    }
  }, [router]);

  useEffect(() => {
    if (isSuccess && redirecting) {
      router.push("/"); // Redirect to homepage when isSuccess is true and redirecting is true
    }
  }, [isSuccess, redirecting, router]);

  return (
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
        height="100"
        width="100"
        color="#000"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default GoogleAuth;
