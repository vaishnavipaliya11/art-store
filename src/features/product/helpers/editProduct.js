import { makeApiCall } from "../../../util/CommonApiCall";
import { editProductParam } from "../../../util/apiCallParams";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProduct = createAsyncThunk("product/edit", async (payload) => {
  try {
    const responseData = await makeApiCall(editProductParam(payload));
    console.log(responseData, "editProduct");
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
