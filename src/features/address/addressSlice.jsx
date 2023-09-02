import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "./helpers/getAddress";
import { postAddress } from "./helpers/postAddress";
import { getSingleAddress } from "./helpers/getSingleAddress";

export const initialState = {
  allAddress: [],
  addressDetailsInput: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    mobileNumber: "",
    fullName:""
  },
  singleAddress:{},
  selectedAddressId:"",
  isEditMode:false
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
    setSelectedAddress:(state,action) =>{
      state.isEditMode=true
      state.selectedAddressId= action.payload
    },
    setEditAddress:(state,action) =>{
      state.addressDetailsInput= action.payload
      
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddress.fulfilled, (state, { payload }) => {
        console.log(payload,"payload");
        state.allAddress = payload;
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
  },
});
export const { setAddressInput,setSelectedAddress ,setEditAddress} = addressSlice.actions;
export default addressSlice.reducer;
