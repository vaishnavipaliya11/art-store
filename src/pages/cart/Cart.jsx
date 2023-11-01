import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cart/helpers/getCart";
import "../../styles.css";
import "./cart.css";
import { calcultateCartPrice } from "../../util/calculateCartPrice";
import CartCard from "../../components/cartCard/CartCard";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { setCartPrice } from "../../features/product/productSlice";
import Loader from "../../components/loader/Loader";

const Cart = () => {
  const { allCartProducts, cartLoading, qtyLoading } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const data = dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const totalPrice = calcultateCartPrice(allCartProducts);
    dispatch(setCartPrice(totalPrice));
  }, [allCartProducts]);
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <>
          {cartLoading ? <Loader /> : ""}
        </>
        <div>
          {allCartProducts.map((data) => {
            return <CartCard data={data} />;
          })}
          {/* {qtyLoading ? <Loader /> : ""} */}

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
              Total<span> ₹ {calcultateCartPrice(allCartProducts)} </span>
            </p>

            <div className="common-flex jst-sp-bet">
              <button
                className="btn-primary"
                onClick={() => navigate("/address")}
              >
                Add address
              </button>
              <button className="btn-secondary" onClick={()=> navigate("/review")}>
                Go with the default Address
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
