import { useSelector } from "react-redux";
import  useAuth  from "./useAuth";
import { useRouter } from "next/router";
import { BigSpinner } from "@/components/Spinner/BigSpinner";


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  
  if (!currentUser) {
    // Redirect to "/login" if the user is not authenticated
    router.push("/login");
    return <BigSpinner/>; // Return null or a loading spinner while redirecting
  }

  // Render the children if the user is authenticated
  return children;
};

export default ProtectedRoute ;
