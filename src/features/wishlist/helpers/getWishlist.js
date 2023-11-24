import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWishlistUrl } from "../../../constansts";
import axios from "axios";

export const getWishlist = createAsyncThunk("wishlist/get", async () => {
  try {
    const response = await axios.get(getWishlistUrl);
    if (response.status === 200) {
      return response.data;
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
