import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles.css";
import Navbar from "../../components/navbar/Navbar";
import "./singleProd.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../features/product/helpers/getSingleProduct";
import { splitSentences } from "../../util/splitSentence";
import { ImEarth } from "react-icons/im";
import { FaHandHoldingHand, FaHandsHoldingCircle } from "react-icons/fa6";
import { MdOutlineBusiness } from "react-icons/md";
import ReadMoreText from "../../components/readMoreText/ReadMoreText";
import { postCart } from "../../features/cart/helpers/postCart";
import { generateRandomRating } from "../../util/generateRating";
import Loader from "../../components/loader/Loader";
import { getCart } from "../../features/cart/helpers/getCart";
const SingleProduct = () => {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const { singleProd, singleProdLoading } = useSelector(
    (store) => store.product
  );
  console.log(singleProd, "singleProd");

  const {
    name,
    avatar,
    description,
    highlights,
    category,
    price,
    videoUrl,
    rating,
  } = singleProd;

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
    // prodHighlights = splitSentences(highlights);
  }, []);

  return (
    <div>
      <Navbar />
      {singleProdLoading ? (
        <Loader />
      ) : (
        <div class="single-prod-container">
          <div class="image-container mr-sm-btm">
            {avatar ? (
              <img src={avatar} alt={name} className="img-border " />
            ) : (
              <video src={videoUrl} controls></video>
            )}
          </div>
          <div class="product-details common-col gap-xs  mr-sm-btm">
            <div>
              <p class="title fs-med">{name}</p>
              <p class="title">{generateRandomRating(rating)}</p>
            </div>
            <div>
              <p class="price ">₹ {price}</p>
              <p class="font-sm text-gray">
                Easy Returns and Exchange available
              </p>
            </div>
            <div>
              <button
                class="btn-primary"
                onClick={async () => {
                  await dispatch(postCart(singleProd));
  
                  dispatch(getCart());
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className="three-layout-grid mr-sm-btm">
              <div className="common-col a-center js-center gap-xxs mr-sm ">
                <ImEarth className="logo-clr" />
                <p className="lines-ft">We care about our planet! </p>
              </div>
              <div className="common-col a-center js-center gap-xxs mr-sm ">
                <MdOutlineBusiness className="logo-clr" />
                <p className="lines-ft">
                  Every product tells a story, shop local
                </p>
              </div>
              <div className="common-col a-center js-center gap-xxs mr-sm ">
                {/* <FaHandHoldingHand  /> */}
                <FaHandsHoldingCircle className="logo-clr" />
                <p className="lines-ft">Handmade with care</p>
              </div>
            </div>
            <div>
              <h3 class="section-title">Description</h3>
              <ReadMoreText text={description} maxLength={250} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
