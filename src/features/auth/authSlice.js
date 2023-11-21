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
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedUser: (state) => {
      const logUser= localStorage.getItem("userDetails") ? true :false
      console.log(logUser,"logUser");
      // state.isLoggedIn = action.payload
      state.isLoggedIn= logUser
    },
    logOutUser: (state) => {
      localStorage.removeItem("userDetails")
      // state.isLoggedIn = action.payload
      state.isLoggedIn= false
    },
  },

  extraReducers: (builder) => {
    builder;
    // .addCase(getAllPosts.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getAllPosts.fulfilled, (state, { payload }) => {
    //   // state.allPosts = payload?.posts;
    //   state.loading = false;
    // })
    // .addCase(getAllPosts.rejected, (state) => {
    //   state.loading = false;
    // });
  },
});
export const { setLoggedUser,logOutUser } = authSlice.actions;
export default authSlice.reducer;
