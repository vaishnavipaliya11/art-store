import React from "react";
import "./card.css";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";
import { generateRandomRating } from "../../util/generateRating";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { deleteProduct } from "../../features/product/helpers/deleteProduct";
import { postCart } from "../../features/cart/helpers/postCart";
import { getCart } from "../../features/cart/helpers/getCart";
import { setEditedProductId } from "../../features/product/productSlice";
const ProductCard = ({ data }) => {
  const { isAdmin } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const {
    title,
    price,
    imageUrl,
    videoUrl,
    description,
    highlights,
    userId,
    id,rating
  } = data;
  const navigate = useNavigate();

  //  <Link to={`/singleproduct/${_id}`}>
  return (
    <div class="product-card">
      {/* <Link to={`/product/${id}`}> */}
      <div class="image-container">
        {isAdmin ? (
          <button
            class="edit-btn"
            onClick={() => {
              dispatch(setEditedProductId(id));
              navigate("/add-new-prod");
            }}
          >
            <AiTwotoneEdit />
          </button>
        ) : (
          <button class="wishlist-btn">❤️</button>
        )}
        {imageUrl ? (
          <img src={imageUrl} alt="Product Image" class="product-image" />
        ) : (
          <video style={{ width: "10rem", height: "15rem" }} controls>
            <source src={videoUrl} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* </Link> */}
      <div class="lower-card-info">
        <Link to={`/product/${id}`}>
          <h2 class="product-title mr-xs">{title}</h2>
          <p class="mr-xs">{generateRandomRating(rating)}</p>
          <p class="product-price">
            {price}{" "}
            <span className="fs-span text-gray">
              (40% off) <span className="fs-span text-gray">free delivery</span>
            </span>
          </p>
        </Link>
        <p class="mr-xs"> </p>
        <div class="buttons">
          {isAdmin ? (
            <button
              class="btn-primary"
              onClick={() => dispatch(deleteProduct(id))}
            >
              Delete{" "}
            </button>
          ) : (
            <button
              class="btn-primary"
              onClick={() => {
                dispatch(postCart(id));
                // dispatch(getCart())
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
