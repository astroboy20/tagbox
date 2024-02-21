import axios from "axios";

const API_URL = "https://tagbox.onrender.com/v1/user";

//register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

//login user
const loginWithGoogle = async () => {
 window.location.href = ("https://tagbox.onrender.com/v1/google");
 
};

const authService = {
  register,
  login,
  loginWithGoogle
};

export default authService;
