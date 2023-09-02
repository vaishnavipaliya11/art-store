import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAddressParam } from "../addressParams/addressParams";

export const deleteAddress = createAsyncThunk("address/delete", async (id) => {
  try {
    const responseData = await makeApiCall(deleteAddressParam(id));

    console.log(responseData, "getCart");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
