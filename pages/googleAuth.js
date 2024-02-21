import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/features/authSlice";
import { useRouter } from "next/router";

const GoogleAuth = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get("token");
    console.log(token);
    if (token) {
      dispatch(updateUser(token));
      router.push("/");
    }
  }, [router]);
  return <div>googleAuth</div>;
};

export default GoogleAuth;
