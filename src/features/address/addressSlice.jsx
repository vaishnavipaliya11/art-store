import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "./helpers/getAddress";
import { postAddress } from "./helpers/postAddress";
import { getSingleAddress } from "./helpers/getSingleAddress";
import { updateAddress } from "./helpers/updateAddress";

export const initialState = {
  allAddress: [],
  addressDetailsInput: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    mobileNumber: "",
    fullName: "",
  },
  singleAddress: {},
  selectedAddressId: "",
  isEditMode: false,
  addressLoading:true
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
    setSelectedAddress: (state, action) => {
      state.isEditMode = !state.isEditMode;
      state.selectedAddressId = action.payload;
    },
    setEditAddress: (state, action) => {
      state.addressDetailsInput = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.addressLoading = true;
      })
      .addCase(getAddress.fulfilled, (state, { payload }) => {
        state.allAddress = payload;
        state.addressLoading = false;
      })
      .addCase(getAddress.rejected, (state) => {
        state.addressLoading = false;
      });
    builder
      .addCase(postAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddress.fulfilled, (state, { payload }) => {
        state.allPosts = payload;
        state.loading = false;
      })
      .addCase(postAddress.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(getSingleAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleAddress.fulfilled, (state, { payload }) => {
        state.singleAddress = payload;
        state.loading = false;
      })
      .addCase(getSingleAddress.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAddress.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateAddress.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const { setAddressInput, setSelectedAddress, setEditAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
