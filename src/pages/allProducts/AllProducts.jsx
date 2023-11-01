import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import  Sidebar  from "../../components/filterSideBar/SideBar";
import ProductCard from "../../components/productCard/ProductCard";
import { getProducts } from "../../features/product/helpers/getAllProduct";
import { useDispatch, useSelector } from "react-redux";
import "../../styles.css";
import {
  filterProdLowToHigh,
  setEditedProductIdNull,
  setSingleProdNull,
} from "../../features/product/productSlice";
import Loader from "../../components/loader/Loader";

const AllProducts = () => {
  // Define the API call parameters in an object
  const dispatch = useDispatch();
  const { allProducts, editedProductId, productLoading } = useSelector(
    (store) => store.product
  );
  console.log(allProducts, "allProducts");
  useEffect(() => {
    try {
      dispatch(getProducts());
    } catch (error) {
      console.error("API Error:", error);
    }
  }, []);

  useEffect(() => {
    dispatch(setEditedProductIdNull(editedProductId));
    dispatch(setSingleProdNull());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="all-prod-container">
        <Sidebar />
        <div className="common-flex wrap gap-xxs a-start">
          {productLoading ? <Loader /> : ""}

          {allProducts?.map((data) => {
            return <ProductCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
