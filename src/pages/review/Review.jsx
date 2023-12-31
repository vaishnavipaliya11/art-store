import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../features/address/helpers/getAddress";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { setSelectedAddress } from "../../features/address/addressSlice";
import "./review.css";
import { deleteAddress } from "../../features/address/helpers/deleteAddress";
import { getCart } from "../../features/cart/helpers/getCart";
import { generateRandomRating } from "../../util/generateRating";
import "../../styles.css";
import { postOrder } from "../../features/orders/helpers/postOrder";
import Loader from "../../components/loader/Loader";

const Review = () => {
  const { allAddress, addressLoading } = useSelector((store) => store.address);
  const { allCartProducts } = useSelector((store) => store.cart);
  const { cartPrice } = useSelector((store) => store.product);
  const {isLoggedIn}= useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(allCartProducts, "allCartProducts");

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpayModal = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Something went wrong.");
      return;
    }
    const options = {
      key: "rzp_test_bZE9gTXzid6WZK",
      amount: cartPrice * 100,
      currency: "INR",
      name: "",
      description: "Thanks for shopping with us!",
      image: "/favicon.ico",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        dispatch(postOrder(allCartProducts));
        navigate("/order");
      },

      prefill: {
        name: "Vaishnavi Paliya",
        email: "vaishnavi@gmail.com",
        contact: "7744552200",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    dispatch(getAddress());
    dispatch(getCart());
  }, []);

  console.log(allCartProducts, "allCartProducts");
  return (
    <div>
      <Navbar />
      {addressLoading ? (
        <Loader />
      ) : (
        <>
          <div className="common-flex a-center j-center mr-sm-btm">
            <div className="common-col  js-evenly mr-sm-btm gap-sm">
              <div className="common-flex js-evenly a-center ">
                <h3 className="fs-xbg">Preview the details of order</h3>
                <button
                  className="btn-primary"
                  onClick={() => {
                    isLoggedIn ?
                    displayRazorpayModal() : navigate("/login")
                  }}
                >
                  Proceed to Pay
                </button>
              </div>
              <div className="review-container">
                <div className="address-container">
                  {allAddress.map(
                    ({
                      city,
                      country,
                      mobileNumber,
                      postalCode,
                      street,
                      state,
                      fullName,
                      id,
                    }) => {
                      return (
                        <div className=" address-block img-border">
                          <div className="address-details">
                            <p>{fullName}</p>
                            <p>{street}</p>
                            <p>
                              {city} <span>{postalCode}</span>
                            </p>
                            <p>{state}</p>
                            <p>{country}</p>
                            <p>{mobileNumber}</p>
                          </div>
                          <div className="common-flex a-start gap-xs">
                            <button
                              className="btn-primary"
                              onClick={() => {
                                navigate("/address");
                                dispatch(setSelectedAddress(id));
                              }}
                            >
                              <AiFillEdit />
                            </button>

                            <button
                              className="btn-secondary"
                              onClick={async () => {
                                await dispatch(deleteAddress(id));
                                dispatch(getAddress());
                              }}
                            >
                              <AiTwotoneDelete />
                            </button>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="three-layout-grid">
                  {allCartProducts.map(
                    ({ name, avatar, videoUrl, price, rating, id }) => {
                      return (
                        <div>
                          <div class="product-card">
                            {/* <Link to={`/product/${id}`}> */}
                            <div class="image-container">
                              {avatar ? (
                                <img
                                  src={avatar}
                                  alt="Product Image"
                                  class="product"
                                />
                              ) : (
                                <video
                                  style={{ width: "10rem", height: "15rem" }}
                                  controls
                                >
                                  <source
                                    src={videoUrl}
                                    type="video/mp4"
                                  ></source>
                                  Your browser does not support the video tag.
                                </video>
                              )}
                            </div>

                            {/* </Link> */}
                            <div class="lower-card-info">
                              <Link to={`/product/${id}`}>
                                <h2 class="product-title mr-xs">{name}</h2>
                                <p class="mr-xs">
                                  {generateRandomRating(rating)}
                                </p>
                                <p class="product-price">{price} </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
