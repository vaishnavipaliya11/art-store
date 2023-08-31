import { makeApiCall } from "../../../util/CommonApiCall";
import { deleteProdParam } from "../../../util/apiCallParams";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteProduct = createAsyncThunk("product/create", async (id) => {
  try {
    const responseData = await makeApiCall(deleteProdParam(id));

    return responseData.products;
  } catch (error) {
    console.error("API Error:", error);
  }
});
