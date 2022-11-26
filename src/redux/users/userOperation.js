import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInUserApi, signUpUserApi } from "../../utils/fetch/fetch";

export const registerUser = createAsyncThunk(
  "user/registration",
  async (userData, thunkApi) => {
    try {
      const res = await signUpUserApi(userData);
      return res.status;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, thunkApi) => {
    try {
      const res = await signInUserApi(userData);
      console.log("res :>> ", res);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
