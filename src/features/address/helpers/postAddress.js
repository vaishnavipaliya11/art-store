import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAddressParam } from "../addressParams/addressParams";

export const postAddress = createAsyncThunk("address/post", async (payload) => {
  try {
    const responseData = await makeApiCall(postAddressParam(payload));

    console.log(responseData, "postAddress");
    return responseData.address;
  } catch (error) {
    console.error("API Error:", error);
  }
});
