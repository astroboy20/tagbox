import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import {toast} from "react-toastify"

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response && error.response.data.message) ||
        error.message ||
        error.toString() ||
        message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data.message) ||
      error.message ||
      error.toString() ||
      message;

    return thunkAPI.rejectWithValue(message);
  }
});

export const login_with_google = createAsyncThunk("auth/google", async(_, thunkAPI)=>{
  try {
    return await authService.loginWithGoogle()
  } catch (error) {
    const message =
    (error.response && error.response.data.message) ||
    error.message ||
    error.toString() ||
    message;

  return thunkAPI.rejectWithValue(message);
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
        state.message = action.payload.message;
        toast.success(state.message)
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = false;
        state.message = action.payload;
        toast.error(action.payload)
      })
      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
        state.message = action.payload.message;
        toast.success(state.message)
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = false;
        state.message = action.payload;
        toast.error(action.payload)
      })
      //login-with-google
      .addCase(login_with_google.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login_with_google.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
        state.message = action.payload;
        console.log(action.payload)
        toast.success(state.message)
      })
      .addCase(login_with_google.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = false;
        state.message = action.payload;
        toast.error(action.payload)
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
