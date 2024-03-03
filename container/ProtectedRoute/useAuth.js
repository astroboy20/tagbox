import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  }, [user]);
  return { currentUser };
};

export default useAuth;
