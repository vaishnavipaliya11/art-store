import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  deleteWishlistParam } from "../wishlistParams/wishlistParams";

export const deleteWishlist = createAsyncThunk("wishlist/delete", async (id) => {
  try {
    const responseData = await makeApiCall(deleteWishlistParam(id));

    console.log(responseData, "deleteWishlist");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
