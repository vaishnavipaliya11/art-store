import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,
  authUser: "",
  loading: true,
  isAdmin: false,
  loggedUser: {
    name: "",
    password: "",
  },
  firebaseEmail: "",
  authToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedUser: (state) => {
      const logUser = localStorage.getItem("userDetails") ? true : false;
      console.log(logUser, "logUser");
      // state.isLoggedIn = action.payload
      state.isLoggedIn = logUser;
    },
    logOutUser: (state) => {
      localStorage.removeItem("userDetails");
      // state.isLoggedIn = action.payload
      state.isLoggedIn = false;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setFirebaseEmail: (state, action) => {
      state.firebaseEmail = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder;
  },
});
export const { setLoggedUser, logOutUser, setFirebaseEmail, setAuthToken } =
  authSlice.actions;
export default authSlice.reducer;
