import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addWishlistParam } from "../wishlistParams/wishlistParams";

export const postWishlist = createAsyncThunk("wishlist/add", async (id) => {
  try {
    const responseData = await makeApiCall(addWishlistParam(id));

    console.log(responseData, "postWishlist");
    return responseData.products;
  } catch (error) {
    console.error("API Error:", error);
  }
});
