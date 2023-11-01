import React, { useEffect } from "react";
import "./card.css";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";
import { generateRandomRating } from "../../util/generateRating";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiTwotoneHeart, AiTwotoneEdit } from "react-icons/ai";
import { deleteProduct } from "../../features/product/helpers/deleteProduct";
import { postCart } from "../../features/cart/helpers/postCart";
import { getCart } from "../../features/cart/helpers/getCart";
import { setEditedProductId } from "../../features/product/productSlice";
import { postWishlist } from "../../features/wishlist/helpers/postWishlist";
import { getWishlist } from "../../features/wishlist/helpers/getWishlist";
import { deleteWishlist } from "../../features/wishlist/helpers/deleteWishlist";
import { getProducts } from "../../features/product/helpers/getAllProduct";

const ProductCard = ({ data }) => {
  const { isAdmin } = useSelector((store) => store.auth);
  const { allwishlistProducts } = useSelector((store) => store.wishlist);
  const { allProducts } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const {
    name,
    price,
    avatar,

    description,
    highlights,

    id,
    category,
    rating,
  } = data;
  const navigate = useNavigate();

  const productIdsInWishlist = allwishlistProducts.map(
    (product) => product.wishlistItem.productId
  );

  const handleWishlistClick = async (cardProdId) => {
    if (productIdsInWishlist.includes(cardProdId)) {
      await dispatch(deleteWishlist(id));
      dispatch(getWishlist());
    } else {
      await dispatch(postWishlist(id));
      dispatch(getWishlist());
    }
  };

  useEffect(() => {
    // dispatch(getWishlist());
  }, []);

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
          <button
            class="wishlist-btn"
            onClick={() => {
              handleWishlistClick(id);
            }}
          >
            {productIdsInWishlist.includes(id) ? (
              <AiTwotoneHeart className="icon" />
            ) : (
              <AiOutlineHeart className="icon" />
            )}
          </button>
        )}
        {avatar ? (
          <img
            src={avatar}
            alt="Product Image"
            class="product-image"
            height={236}
            width={297}
          />
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
          <h2 class="product-title mr-xs">{name}</h2>
          <p class="mr-xs">
            {category}
            <span>{generateRandomRating(rating)}</span>
          </p>
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
              onClick={() => {
                dispatch(deleteProduct(id));
              }}
            >
              Delete{" "}
            </button>
          ) : (
            <button
              class="btn-primary"
              onClick={async () => {
                await dispatch(postCart(data));

                dispatch(getCart());
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
