import React from "react";
import "./order.css";
import "../../styles.css";

const OrderCard = ({ data }) => {
  const { name, avatar, price } = data;
  return (
    <div className="common-flex mr-sm">
      <img className="img-border  order-img" src={avatar} />

      <div className=" mr-sm-top">
        <h3 className="fs-sm">{name}</h3>
        <h2 className="fs-med">₹{price}</h2> Delivery:{" "}
        <span className="text-green-clr">FREE</span>
      </div>
    </div>
  );
};

export default OrderCard;
