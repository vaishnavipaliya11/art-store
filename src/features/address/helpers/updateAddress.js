import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateAddressParam } from "../addressParams/addressParams";

export const updateAddress = createAsyncThunk(
  "address/update",
  async ({ id, payload }) => {
    try {
      console.log(id, "id", payload, "updateAddress-payload");
      const responseData = await makeApiCall(updateAddressParam(id, payload));

      return responseData.address;
    } catch (error) {
      console.error("API Error:", error);
    }
  }
);
