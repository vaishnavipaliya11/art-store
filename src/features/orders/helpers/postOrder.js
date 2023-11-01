import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postOrderUrl } from "../../../constansts";

export const postOrder = createAsyncThunk("order/post", async (payload) => {
  console.log("payload postOrder", payload);
  try {
    const response = await axios.post(
      "https://6527947d917d673fd76dd8f1.mockapi.io/order",
      { products: payload }
    );
    if (response.status === 200) {
      console.log(response, "postOrder");
      const order = response?.data;
      return order;
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
