import { makeApiCall } from "../../../util/CommonApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { singleAddressParam } from "../addressParams/addressParams";
import axios from "axios";

export const getSingleAddress = createAsyncThunk(
  "address/get-single",
  async (id) => {
    try {
      const response = await axios.get(`https://6527947d917d673fd76dd8f1.mockapi.io/address/${id}`);
      if (response.status === 200) {
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
