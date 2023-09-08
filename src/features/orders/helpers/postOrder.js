import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postOrderParam } from "../orderParams/orderParam";

export const postOrder = createAsyncThunk("order/post", async () => {
  try {
    const responseData = await makeApiCall(postOrderParam());

    console.log(responseData, "postOrder");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});