import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartParam } from "../cartCallParams.js/addToCartParam";

export const postCart = createAsyncThunk("cart/create", async (payload) => {
  try {
    const responseData = await makeApiCall(addToCartParam(payload));
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
