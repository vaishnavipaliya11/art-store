import { makeApiCall } from "../../../util/CommonApiCall";
import { getSingleProdParam } from "../../../util/apiCallParams";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleProduct = createAsyncThunk(
  "product/single",
  async (id) => {
    try {
      const responseData = await makeApiCall(getSingleProdParam(id));

      return responseData;
    } catch (error) {
      console.error("API Error:", error);
    }
  }
);
