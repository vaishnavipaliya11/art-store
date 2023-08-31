import { makeApiCall } from "../../../util/CommonApiCall";
import { addNewProductParam } from "../../../util/apiCallParams";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewProd = createAsyncThunk(
  "product/create",
  async (payload) => {
    console.log("called");
    try {
      const responseData = await makeApiCall(addNewProductParam(payload));

      console.log(makeApiCall(addNewProductParam(payload)),"makeApiCall(addNewProductParam(payload))");
      console.log(responseData, "createNewProd");
      return responseData;
    } catch (error) {
      console.error("API Error:", error);
    }
  }
);
