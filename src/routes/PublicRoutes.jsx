import React from "react";
import Home from "../pages/home/Home";
import AllProducts from "../pages/allProducts/AllProducts";
import Login from "../pages/login/Login";
import Signup from "../pages/sign_up/Signup";
import { Route, Router, Routes } from "react-router-dom";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import AddNewProd from "../pages/addNewProd/AddNewProd";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import Address from "../pages/address/Address";
import Review from "../pages/review/Review";
import Order from "../pages/order/Order";
import { Profile } from "../pages/profile/Profile";

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/product/:product_id" element={<SingleProduct />}></Route>

        {/* private routes */}
        <Route path="/add-new-prod" element={<AddNewProd />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/order" element={<Order />}></Route>

      </Routes>
    </div>
  );
};

export default PublicRoutes;
