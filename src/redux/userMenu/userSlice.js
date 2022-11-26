import { createSlice } from "@reduxjs/toolkit";
import {
  getBurgers,
  getNoodles,
  getPizzas,
  getRolls,
  getSets,
} from "./userOperation";

const userMenuSlice = createSlice({
  name: "menu",
  initialState: {
    product: [],
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getRolls.pending](state) {
      state.isLoading = true;
    },
    [getRolls.fulfilled](state, { payload }) {
      state.product = [...payload];
      state.isLoading = false;
    },
    [getRolls.rejected](state) {
      state.isLoading = false;
    },
    [getSets.pending](state) {
      state.isLoading = true;
    },
    [getSets.fulfilled](state, { payload }) {
      state.product = [...payload];
      state.isLoading = false;
    },
    [getSets.rejected](state) {
      state.isLoading = false;
    },
    [getPizzas.pending](state) {
      state.isLoading = true;
    },
    [getPizzas.fulfilled](state, { payload }) {
      state.product = [...payload];
      state.isLoading = false;
    },
    [getPizzas.rejected](state) {
      state.isLoading = false;
    },
    [getBurgers.pending](state) {
      state.isLoading = true;
    },
    [getBurgers.fulfilled](state, { payload }) {
      state.product = [...payload];
      state.isLoading = false;
    },
    [getBurgers.rejected](state) {
      state.isLoading = false;
    },
    [getNoodles.pending](state) {
      state.isLoading = true;
    },
    [getNoodles.fulfilled](state, { payload }) {
      state.product = [...payload];
      state.isLoading = false;
    },
    [getNoodles.rejected](state) {
      state.isLoading = false;
    },
  },
});
// export const { setGoogleData, logoutUser } = authSlice.actions;
export default userMenuSlice.reducer;
