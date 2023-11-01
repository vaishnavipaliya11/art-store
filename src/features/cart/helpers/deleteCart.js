import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCartParam, getCartParam } from "../cartCallParams.js/addToCartParam";

export const deleteCart = createAsyncThunk("cart/delete", async (id) => {
  try {
    const responseData = await makeApiCall(deleteCartParam(id));

    console.log(responseData, "getCart");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
