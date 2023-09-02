import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressParam } from "../addressParams/addressParams";

export const getAddress = createAsyncThunk("address/get", async (payload) => {
  try {
    const responseData = await makeApiCall(getAddressParam(payload));

    console.log(responseData, "getAddress");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
