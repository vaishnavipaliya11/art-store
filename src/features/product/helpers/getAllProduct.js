import { makeApiCall } from "../../../util/CommonApiCall";
import { getAllProductsParam } from "../../../util/apiCallParams";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/all", async () => {
  try {
    const responseData = await makeApiCall(getAllProductsParam);

    return responseData.products;
  } catch (error) {
    console.error("API Error:", error);
  }
});
