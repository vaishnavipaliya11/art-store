import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { singleAddressParam } from "../addressParams/addressParams";

export const getSingleAddress = createAsyncThunk(
  "address/get-single",
  async (payload) => {
    try {
      const responseData = await makeApiCall(singleAddressParam(payload));

      console.log(responseData, "postAddress");
      return responseData;
    } catch (error) {
      console.error("API Error:", error);
    }
  }
);
