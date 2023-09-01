import React, { useEffect } from "react";
import "./card.css";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";
import { generateRandomRating } from "../../util/generateRating";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart,AiTwotoneHeart, AiTwotoneEdit } from "react-icons/ai";
import { deleteProduct } from "../../features/product/helpers/deleteProduct";
import { postCart } from "../../features/cart/helpers/postCart";
import { getCart } from "../../features/cart/helpers/getCart";
import { setEditedProductId } from "../../features/product/productSlice";
import { postWishlist } from "../../features/wishlist/helpers/postWishlist";
import { getWishlist } from "../../features/wishlist/helpers/getWishlist";
import { deleteWishlist } from "../../features/wishlist/helpers/deleteWishlist";

const ProductCard = ({ data }) => {
  const { isAdmin } = useSelector((store) => store.auth);
  const { allwishlistProducts } = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  const {
    title,
    price,
    imageUrl,
    videoUrl,
    description,
    highlights,
    userId,
    id,
    rating,
  } = data;
  const navigate = useNavigate();

  const wishlistItems = allwishlistProducts.map(
    (product) => product.wishlistItem
  );

  const wishlistProductIds = wishlistItems.map(
    (wishlistItem) => wishlistItem.productId
  );

  console.log(wishlistProductIds, "wishlistProductIds");

  console.log(wishlistItems.productId, "wishlistItems");

  const productIdsInWishlist = allwishlistProducts.map(
    (product) => product.wishlistItem.productId
  );

  const handleWishlistClick = (cardProdId) => {
    if (productIdsInWishlist.includes(cardProdId)) {
      dispatch(deleteWishlist(id));
      dispatch(getWishlist());
    } else {
      dispatch(postWishlist(id));
      dispatch(getWishlist());
    }
  };

  useEffect(() => {
    dispatch(getWishlist());
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
              <AiTwotoneHeart  className="icon"/>
            ) : (
              <AiOutlineHeart className="icon"/>
            )}
          </button>
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
