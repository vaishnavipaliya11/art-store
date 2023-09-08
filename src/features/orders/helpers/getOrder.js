import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderParam } from "../orderParams/orderParam";

export const getOrder = createAsyncThunk("order/get", async () => {
  try {
    const responseData = await makeApiCall(getOrderParam());

    console.log(responseData, "getOrder");
    return responseData?.orders;
  } catch (error) {
    console.error("API Error:", error);
  }
});
