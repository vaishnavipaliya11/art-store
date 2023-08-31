import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartParam } from "../cartCallParams.js/addToCartParam";

export const postCart = createAsyncThunk("cart/create", async (id) => {
  try {
    const responseData = await makeApiCall(addToCartParam(id));

    console.log(responseData, "postCart");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
