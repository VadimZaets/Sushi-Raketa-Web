import { createSlice } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    deliveryInfo: [],
  },
  reducers: {
    //  setDeliveryInfo: (state, action) => {
    //    console.log("action :>> ", action);
    //    state.deliveryInfo.push({ ...action.payload });
    //  },
  },
  extraReducers: {
    //  [userOrder.pending]: (state) => ({}),
    //  [userOrder.fulfilled]: (state, { payload }) => ({}),
    //  [userOrder.rejected]: (state, { payload }) => ({}),
  },
});

export const { setDeliveryInfo } = deliverySlice.actions;
export default deliverySlice.reducer;
