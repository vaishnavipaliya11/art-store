import React from "react";
import { deleteCart } from "../../features/cart/helpers/deleteCart";
import { getCart } from "../../features/cart/helpers/getCart";
import { postCart } from "../../features/cart/helpers/postCart";
import { useDispatch } from "react-redux";
import { generateRandomText } from "../../util/generateRadomText";
import {
  decreaseCartQty,
  editCart,
} from "../../features/cart/helpers/editCartI";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();
  const { name, avatar, videoUrl, price, cartQty, id } = data;

  const updateQty = () => {
    dispatch(editCart({ id: id, payload: data }));
    dispatch(getCart());
  };

  return (
    <div className="cart-card-container">
      <div className="common-col gap-xs ">
        {avatar ? (
          <img className="cart-img img-border" src={avatar} />
        ) : (
          <video style={{ width: "20rem", height: "10rem" }} controls>
            <source src={videoUrl} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        )}
        <div className="common-flex gap-xs ">
          <button
            className="btn-remove-secondary"
            onClick={async () => {
              await dispatch(deleteCart(id));
              dispatch(getCart());
            }}
          >
            Remove
          </button>
          <button className="btn-move-primary">Move to wishlist</button>
        </div>
      </div>
      <div className=" mr-sm-top">
        <h3 className=" mr-zero fs-sm">{name}</h3>
        <div>
          <p className="fs-xs">Quantity : {cartQty}</p>

          <button
            className="qty-btn"
            onClick={async () => {
              if (cartQty > 1) {
                await dispatch(decreaseCartQty({ id: id, payload: data }));
              } else {
                await dispatch(deleteCart(id));
              }
              dispatch(getCart());
            }}
          >
            -
          </button>
          <button className="qty-btn" onClick={updateQty}>
            +
          </button>
        </div>
      </div>
      <div className="common-col jst-sp-bet mr-zero">
        <div>
          <h2 className="fs-med mr-zero">₹{price}</h2>
          <p className="text-gray">{generateRandomText()}</p>
        </div>
        <div>
          <p>
            Delivery: <span className="text-green-clr">FREE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
