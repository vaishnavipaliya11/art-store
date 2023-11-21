import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../features/wishlist/helpers/getWishlist";
import ProductCard from "../../components/productCard/ProductCard";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { allwishlistProducts } = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getWishlist());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="common-flex wrap gap-sm wishlist-prod-container">
        {allwishlistProducts?.length === 0 ? (
          <div>
            <p>
              Your shopping journey begins with a wishlist. Add items and stay
              organized
              
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate("/products")}
            >
              Browse Collection
            </button>
          </div>
        ) : (
          <>
            {" "}
            {allwishlistProducts?.map((data) => {
              return <ProductCard data={data} />;
            })}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
