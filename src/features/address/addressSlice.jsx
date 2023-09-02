import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "./helpers/getAddress";
import { postAddress } from "./helpers/postAddress";

export const initialState = {
  allAddress: [],
  addressDetailsInput: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    mobileNumber: "",
  },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressInput: (state, action) => {
      const { name, value } = action.payload;

      return {
        ...state,
        addressDetailsInput: {
          ...state.addressDetailsInput,
          [name]: value,
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(getAddress.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAddress.fulfilled, (state, { payload }) => {
        console.log(payload,"getAddress");
      // state.allPosts = payload?.posts;
      state.loading = false;
    })
    .addCase(getAddress.rejected, (state) => {
      state.loading = false;
    });
    builder
    .addCase(postAddress.pending, (state) => {
      state.loading = true;
    })
    .addCase(postAddress.fulfilled, (state, { payload }) => {
        console.log(payload,"postAddress");
      // state.allPosts = payload?.posts;
      state.loading = false;
    })
    .addCase(postAddress.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { setAddressInput } = addressSlice.actions;
export default addressSlice.reducer;
