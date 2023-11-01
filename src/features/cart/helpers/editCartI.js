import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editCart = createAsyncThunk(
  "cart/edit-cartQty",
  async ({id, payload}) => {
    console.log(payload,"editcart");
    const url = `https://651d110444e393af2d591767.mockapi.io/cart/${id}`;
    try {
      const response = await axios({
        method: "PUT",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...payload,
          cartQty: payload.cartQty + 1,
        },
      });

      if (response.status === 200) {
        console.log("Cart item updated successfully:", response.data);
        return response.data;
      } else {
        console.error(
          "Failed to update cart item. Status Code: ",
          response.status
        );
        return null;
      }
    } catch (error) {
      console.error("Error while updating cart item: ", error.message);
      return null;
    }
  }
);
export const decreaseCartQty = createAsyncThunk(
  "cart/dec-qty",
  async ({id, payload}) => {
    console.log(payload, "decreaseCartQty payload");
    const url = `https://651d110444e393af2d591767.mockapi.io/cart/${id}`;
    try {
      const response = await axios({
        method: "PUT",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...payload,
          cartQty: payload.cartQty - 1,
        },
      });

      console.log(response, "decreaseCartQty");
      if (response.status === 200) {
        console.log("Cart item updated successfully:", response.data);
        return response.data;
      } else {
        console.error(
          "Failed to update cart item. Status Code: ",
          response.status
        );
        return null;
      }
    } catch (error) {
      console.error("Error while updating cart item: ", error.message);
      return null;
    }
  }
);
