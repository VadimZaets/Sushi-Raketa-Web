import { createSlice } from "@reduxjs/toolkit";

const selfDeliverySlice = createSlice({
  name: "selfDelivery",
  initialState: {
    selfDeliveryInfo: [],
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

export default selfDeliverySlice.reducer;
