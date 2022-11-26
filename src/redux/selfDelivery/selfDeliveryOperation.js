import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSelfDeliveryApi } from "../../utils/fetch/fetch";
export const userOrderSelfDelivery = createAsyncThunk(
  "user/selfDelivery",
  async (orderInfo, thunkApi) => {
    console.log("object", orderInfo);
    try {
      const result = await userSelfDeliveryApi(orderInfo);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
