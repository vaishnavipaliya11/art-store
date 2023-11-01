import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "./helpers/getCart";
import { postCart } from "./helpers/postCart";
import { decreaseCartQty, editCart } from "./helpers/editCartI";

export const initialState = {
  allCartProducts: [],
  cartLoading: true,
  qtyLoading:false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.allCartProducts = payload;
        state.cartLoading = false;
      })
      .addCase(getCart.rejected, (state) => {
        state.cartLoading = false;
      });
      builder
      .addCase(postCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCart.fulfilled, (state, { payload }) => {
        // state.singleProd = payload;
        state.loading = false;
      })
      .addCase(postCart.rejected, (state) => {
        state.loading = false;
      });
      builder
      .addCase(editCart.pending, (state) => {
        state.qtyLoading = true;
      })
      .addCase(editCart.fulfilled, (state, { payload }) => {
        state.qtyLoading = false;
      })
      .addCase(editCart.rejected, (state) => {
        state.qtyLoading = false;
      });
      builder
      .addCase(decreaseCartQty.pending, (state) => {
        state.qtyLoading = true;
      })
      .addCase(decreaseCartQty.fulfilled, (state, { payload }) => {
        state.qtyLoading = false;
      })
      .addCase(decreaseCartQty.rejected, (state) => {
        state.qtyLoading = false;
      });
  },
});
export default cartSlice.reducer;
