import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postAddress = createAsyncThunk(
  "address/post",
  async (payload) => {
    console.log("called postAddress",payload);
    try {
      const response = await axios.post(`https://6527947d917d673fd76dd8f1.mockapi.io/address`,payload);
      if (response.status === 200) {
        console.log(response,"postAddress");
        const address = response?.data;
        return address;
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