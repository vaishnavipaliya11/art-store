import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateAddressParam } from "../addressParams/addressParams";

export const updateAddress = createAsyncThunk("address/update", async (id,payload) => {
  try {
    const responseData = await makeApiCall(updateAddressParam(id,payload));

    console.log(responseData, "updateAddress");
    return responseData.address;
  } catch (error) {
    console.error("API Error:", error);
  }
});
