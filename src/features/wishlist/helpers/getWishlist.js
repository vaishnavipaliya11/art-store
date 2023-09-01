import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWishlistParam } from "../wishlistParams/wishlistParams";

export const getWishlist = createAsyncThunk("wishlist/get", async () => {
  try {
    const responseData = await makeApiCall(getWishlistParam());

    console.log(responseData, "getWishlist");
    return responseData.products;
  } catch (error) {
    console.error("API Error:", error);
  }
});
