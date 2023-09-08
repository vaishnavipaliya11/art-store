import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./helpers/getAllProduct";
import { getSingleProduct } from "./helpers/getSingleProduct";
import { deleteProduct } from "./helpers/deleteProduct";
import { getCategoryProd } from "./helpers/getCategoryProd";

export const initialState = {
  allProducts: [],
  singleProd: {},
  loading: true,
  editedProductId: "",
  isEditProduct: false,
  categories: [],
  filterProd: {
    rating: 2,
    price: 1,
    lowtoHigh: false,
    hightoLow: false,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setEditedProductId: (state, action) => {
      state.editedProductId = action?.payload;
      state.isEditProduct = true;
    },
    setEditedProductIdNull: (state, action) => {
      state.editedProductId = null;
      state.isEditProduct = false;
    },
    setSingleProdNull: (state, action) => {
      state.singleProd = [];
    },
    filterProdLowToHigh: (state) => {
      state.filterProd.lowToHigh = true;
      state.allProducts = [...state.allProducts].sort(
        (a, b) => a.price - b.price
      );
    },
    filterProdHighToLow: (state, action) => {
      state.filterProd.hightoLow = true;
      state.filterProd.lowtoHigh = false;
      state.allProducts = [...state.allProducts].sort(
        (a, b) => b.price - a.price
      );
    },
    filterRatingOneAbove: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.rating >= 1
      );
    },
    filterRatingTwoAbove: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.rating >= 2
      );
    },
    filterRatingThreeAbove: (state, action) => {
      // state.filterProd.hightoLow = true;
      // state.filterProd.lowtoHigh=false
      state.allProducts = state.allProducts.filter(
        (product) => product.rating >= 3
      );
    },
    filterRatingFourAbove: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.rating >= 4
      );
    },
    addCategories: (state, action) => {
      console.log(action.payload, "action.payload");
      return {
        ...state,
        categories: [...state.categories, ...action.payload], // Add new categories from payload
      };
    },
    filterCategories: (state, action) => {
      let allProducts = [...state.allProducts];

      if (categories.length > 0) {
        allProducts = allProducts.filter((prod) =>
          categories.includes(prod.categoryName)
        );
      }

      return allProducts;
    },

    clearFilter: (state) => {
      (state.filterProd.categories = []),
        (state.filterProd.hightoLow = false),
        (state.filterProd.rating = 0);
      state.filterProd.lowtoHigh = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.allProducts = payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.singleProd = payload;
        state.loading = false;
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.allProducts = payload;
        state.loading = false;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(getCategoryProd.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryProd.fulfilled, (state, { payload }) => {
        state.allProducts = payload;
        state.loading = false;
      })
      .addCase(getCategoryProd.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const {
  setEditedProductId,
  setEditedProductIdNull,
  setSingleProdNull,
  filterCategories,
  filterProdHighToLow,
  filterProdLowToHigh,
  filterRatingFourAbove,
  filterRatingOneAbove,
  filterRatingThreeAbove,
  filterRatingTwoAbove,
  addCategories,
  clearFilter,
} = productSlice.actions;
export default productSlice.reducer;
