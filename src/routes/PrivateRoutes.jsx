import React from "react";
import Cart from "../pages/cart/Cart";
import Order from "../pages/order/Order";
import Signup from "../pages/sign_up/Signup";
import AddNewProd from "../pages/addNewProd/AddNewProd";
import { Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/add-new-prod" element={<AddNewProd />}></Route>
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
