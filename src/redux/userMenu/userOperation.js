import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBurgersApi,
  getNoodlesApi,
  getPizzasApi,
  getRollsApi,
  getSetsApi,
} from "../../utils/fetch/fetch";

export const getRolls = createAsyncThunk("menu/rolls", async (_, thunkApi) => {
  try {
    const data = await getRollsApi();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const getSets = createAsyncThunk("menu/sets", async (_, thunkApi) => {
  try {
    const data = await getSetsApi();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const getPizzas = createAsyncThunk(
  "menu/pizzas",
  async (_, thunkApi) => {
    try {
      const data = await getPizzasApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getBurgers = createAsyncThunk(
  "menu/burgers",
  async (_, thunkApi) => {
    try {
      const data = await getBurgersApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getNoodles = createAsyncThunk(
  "menu/noodles",
  async (_, thunkApi) => {
    try {
      const data = await getNoodlesApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
