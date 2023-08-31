import { makeApiCall } from "../../../util/CommonApiCall";
import { getCategoryProdParam, getSingleProdParam } from "../../../util/apiCallParams";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryProd = createAsyncThunk("product/cat", async (category) => {
  try {
    const responseData = await makeApiCall(getCategoryProdParam(category));

    return responseData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
