import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/features/authSlice";
import { useRouter } from "next/router";
import { RotatingLines, ThreeCircles } from "react-loader-spinner";
import {toast} from "react-toastify"

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
    if (user && redirecting) {
      router.push("/"); 
      toast.success("Request was successul")
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
