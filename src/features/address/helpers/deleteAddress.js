import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteAddress = createAsyncThunk("address/delete", async (id) => {
  try {
    const response = await axios.delete(`https://6527947d917d673fd76dd8f1.mockapi.io/address/${id}`);
    console.log(response, "deleteAddress");
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
});
