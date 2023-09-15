import React from "react";
import { deleteCart } from "../../features/cart/helpers/deleteCart";
import { getCart } from "../../features/cart/helpers/getCart";
import { postCart } from "../../features/cart/helpers/postCart";
import { useDispatch } from "react-redux";
import { generateRandomText } from "../../util/generateRadomText";

const CartCard = ({data}) => {
    const dispatch = useDispatch();
    const { title, imageUrl, videoUrl, price, cartItem, id }= data
  return (
    <div className="cart-card-container">
      <div className="common-col gap-xs ">
        {imageUrl ? (
          <img className="img-border" src={imageUrl} />
        ) : (
          <video style={{ width: "20rem", height: "10rem" }} controls>
            <source src={videoUrl} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        )}
        <div className="common-flex gap-xs ">
          <button
            className="btn-remove-secondary"
            onClick={() => {
              dispatch(deleteCart(id));
              dispatch(getCart());
            }}
          >
            Remove
          </button>
          <button className="btn-move-primary">Move to wishlist</button>
        </div>
      </div>
      <div className=" mr-sm-top">
        <h3 className="fs-sm">{title}</h3>
        <div>
          <p className="fs-xs">Quantity : {cartItem.quantity}</p>
          <button
            className="qty-btn"
            onClick={async() => {
            await  dispatch(postCart(id));
              dispatch(getCart());
            }}
          >
            +
          </button>

          <button
            className="qty-btn"
            onClick={async () => {
              await dispatch(deleteCart(id));
              dispatch(getCart());
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="common-col jst-sp-bet">
        <div>
          <h2 className="fs-med">₹{price}</h2>
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
