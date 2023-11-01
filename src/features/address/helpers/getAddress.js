import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressUrl } from "../../../constansts";
import axios from "axios";

export const getAddress = createAsyncThunk("address/get", async () => {
  try {
    const response = await axios.get(getAddressUrl);
    console.log(response, "response");
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
