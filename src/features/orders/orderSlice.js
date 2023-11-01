import { createSlice } from "@reduxjs/toolkit";
import { getOrder } from "./helpers/getOrder";

export const initialState = {
  allOrders: [],
  orderLoading: true,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state) => {
        state.orderLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        console.log(payload, "payload");
        state.allOrders = payload;
        state.orderLoading = false;
      })
      .addCase(getOrder.rejected, (state) => {
        state.orderLoading = false;
      });
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
