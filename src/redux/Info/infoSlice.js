import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    currentInfo: null,
  },
  reducers: {
    setCurrentInfo: (state, action) => {
      state.currentInfo = action.payload;
    },
  },
});

export const { setCurrentInfo } = infoSlice.actions;
export default infoSlice.reducer;
