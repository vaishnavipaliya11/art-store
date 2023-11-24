import { createAsyncThunk } from "@reduxjs/toolkit";
import { postWishlistUrl } from "../../../constansts";
import axios from "axios";

export const postWishlist = createAsyncThunk(
  "wishlist/add",
  async (payload) => {
    console.log("wishlist-post");
    
    try {
      const response = await axios.post(postWishlistUrl, payload);
      if (response.status === 200) {
        console.log(response, "wishlist-post");
        return response?.data;
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
  }
);
