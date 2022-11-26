import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./userOperation";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: null, email: null },
    //  accessToken: null,
    //  refreshToken: null,
    //  sid: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.pending](state) {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = { name: payload.name, email: payload.email };
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [loginUser.rejected](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
});
// export const { setGoogleData, logoutUser } = authSlice.actions;
export default userSlice.reducer;
