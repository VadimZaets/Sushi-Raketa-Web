import { createAsyncThunk } from "@reduxjs/toolkit";
import Router from "next/router";
import { userDeliveryApi } from "../../utils/fetch/fetch";
export const userOrderDelivery = createAsyncThunk(
  "user/delivery",
  async (orderInfo, thunkApi) => {
    console.log("object", orderInfo);
    try {
      const result = await userDeliveryApi(orderInfo);
      Router.push("/success");
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
