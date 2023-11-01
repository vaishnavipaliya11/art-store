import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderUrl } from "../../../constansts";
import axios from "axios";

export const getOrder = createAsyncThunk("order/get", async () => {
  try {
    const response = await axios.get(getOrderUrl);
    console.log(response, "response");
    if (response.status === 200) {
      const orders = response?.data;
      return orders;
    } else {
      console.error(
        "Failed to retrieve orders. Status Code: ",
        response.status
      );
      return null;
    }
  } catch (error) {
    console.error("Error while fetching orders: ", error.message);
    return null;
  }
});
