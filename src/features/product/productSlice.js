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
    rating: 1,
    price: 1,
    lowtoHigh: false,
    hightoLow: false,
  },
  cartPrice: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCartPrice: (state, action) => {
      state.cartPrice = action.payload;
    },
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
        categories: action.payload,
      };
    },
    filterCategories: (state, action) => {
      console.log("called");

      // Create a copy of all products
      let allfilteredProducts = [...state.allProducts];

      if (state.categories.length > 0) {
        // Filter the products based on selected categories
        const filteredProducts = allfilteredProducts.filter((prod) =>
          state.categories.includes(prod.category)
        );

        // Update the state with the filtered products
        state.allProducts = filteredProducts;
        console.log(state.allProducts, "filteredProducts");
      }

      // Return a new state object with the filtered products
      return state.allProducts;
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
  setCartPrice,
} = productSlice.actions;
export default productSlice.reducer;
