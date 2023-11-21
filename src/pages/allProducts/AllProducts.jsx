import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import { getProducts } from "../../features/product/helpers/getAllProduct";
import { useDispatch, useSelector } from "react-redux";
import "../../styles.css";
import {
  setEditedProductIdNull,
  setSingleProdNull,
} from "../../features/product/productSlice";
import Loader from "../../components/loader/Loader";
import Sidenav from "../../components/sidenav/Sidenav";
import { all } from "axios";

const AllProducts = () => {
  const dispatch = useDispatch();

  const { allProducts, editedProductId, productLoading, categories } =
    useSelector((store) => store.product);

  const filterProd =
    categories?.length > 0
      ? allProducts.filter((prod) => categories.includes(prod.category))
      : allProducts;

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
      {productLoading ? (
        <Loader />
      ) : (
        <div className="all-prod-container">
          <Sidenav />
          <div className="five-grid-layout gap-xs a-start">
            {filterProd?.map((data) => {
              return <ProductCard data={data} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
