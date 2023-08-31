import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartParam } from "../cartCallParams.js/addToCartParam";

export const getCart = createAsyncThunk("cart/all", async () => {
  try {
    const responseData = await makeApiCall(getCartParam());

    console.log(responseData, "getCart");
    return responseData.products;
  } catch (error) {
    console.error("API Error:", error);
  }
});
