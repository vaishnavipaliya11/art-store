import { createSlice } from "@reduxjs/toolkit";
import { getWishlist } from "./helpers/getWishlist";
import { postWishlist } from "./helpers/postWishlist";
import { deleteWishlist } from "./helpers/deleteWishlist";
import toast from "react-hot-toast";

export const initialState = {
  allwishlistProducts: [],
  loading: true,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishlist.fulfilled, (state, { payload }) => {
        state.allwishlistProducts = payload;
        state.loading = false;
      })
      .addCase(getWishlist.rejected, (state) => {
        state.loading = false;
      });
      builder
      .addCase(postWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(postWishlist.fulfilled, (state, { payload }) => {
        console.log(payload);
        toast.success("Added to Wishlist");
        // state.singleProd = payload;
        state.loading = false;
      })
      .addCase(postWishlist.rejected, (state) => {
        state.loading = false;
      });
      builder
      .addCase(deleteWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWishlist.fulfilled, (state, { payload }) => {
        toast.success("Removed from Wishlist");

        state.loading = false;
      })
      .addCase(deleteWishlist.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default wishlistSlice.reducer;
