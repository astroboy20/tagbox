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
  const response = await axios.post(`${API_URL}/google`);
  return response.data;
};

const authService = {
  register,
  login,
  loginWithGoogle
};

export default authService;
