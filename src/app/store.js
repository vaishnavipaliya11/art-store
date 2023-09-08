import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import addressReducer from "../features/address/addressSlice";
import orderReducer from "../features/orders/orderSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart:cartReducer,
    wishlist:wishlistReducer,
    order:orderReducer,
    address:addressReducer
  },
});
