import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "./helpers/getCart";
import { postCart } from "./helpers/postCart";

export const initialState = {
  allCartProducts: [],

  loading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.allCartProducts = payload;
        state.loading = false;
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
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
    //   builder
    //   .addCase(deleteProduct.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(deleteProduct.fulfilled, (state, { payload }) => {
    //     state.allProducts = payload;
    //     state.loading = false;
    //   })
    //   .addCase(deleteProduct.rejected, (state) => {
    //     state.loading = false;
    //   });
  },
});
export default cartSlice.reducer;
