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
    setLoggedUser: (state,action) => {
      state.isLoggedIn = action.payload
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
export const { setLoggedUser } = authSlice.actions;
export default authSlice.reducer;
