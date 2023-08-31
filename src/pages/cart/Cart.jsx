import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cart/helpers/getCart";
import "../../styles.css";
import "./cart.css";
import { generateRandomText } from "../../util/generateRadomText";
import { calcultateCartPrice } from "../../util/calculateCartPrice";
import { deleteCart } from "../../features/cart/helpers/deleteCart";
import { postCart } from "../../features/cart/helpers/postCart";
import CartCard from "../../components/cartCard/CartCard";

const Cart = () => {
  const { allCartProducts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const data = dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div>
          {allCartProducts.map((data) => {
            return <CartCard data={data} />;
          })}

          <div className="common-col a-center j-center">
            {" "}
            {allCartProducts.length === 0 ? "Cart is empty" : ""}
          </div>
        </div>
        {allCartProducts?.length > 0 ? (
          <div>
            <h2 className="price-head">Price Details</h2>
            <div class="horizontal-line"></div>

            <p className="common-flex jst-sp-bet">
              Item(s) total{" "}
              <span> ₹ {calcultateCartPrice(allCartProducts)} </span>
            </p>
            <p className="common-flex jst-sp-bet">
              No of Items <span> {allCartProducts?.length} </span>
            </p>
            <p className="common-flex jst-sp-bet">
              Delivery(To India) <span className="text-green-clr"> FREE </span>
            </p>
            <div class="horizontal-line"></div>

            <p className="common-flex jst-sp-bet">
              Total<span>  ₹ {calcultateCartPrice(allCartProducts)} </span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
