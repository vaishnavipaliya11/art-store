import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  allOrders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // builder
    //   .addCase(getAddress.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getAddress.fulfilled, (state, { payload }) => {
    //     console.log(payload, "payload");
    //     state.allAddress = payload;
    //     state.loading = false;
    //   })
    //   .addCase(getAddress.rejected, (state) => {
    //     state.loading = false;
    //   });
    // builder
    //   .addCase(postAddress.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(postAddress.fulfilled, (state, { payload }) => {
    //     state.allPosts = payload;
    //     state.loading = false;
    //   })
    //   .addCase(postAddress.rejected, (state) => {
    //     state.loading = false;
    //   });
  },
});

export default orderSlice.reducer;
