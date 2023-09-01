import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../features/wishlist/helpers/getWishlist";
import ProductCard from "../../components/productCard/ProductCard";
import Navbar from "../../components/navbar/Navbar";

const Wishlist = () => {
  const { allwishlistProducts } = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist());
  }, []);
  return (
    <div >
      <Navbar />
      <div className="common-flex wrap gap-sm wishlist-prod-container">
        {allwishlistProducts.map((data) => {
          return (
            <div>
              <ProductCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
