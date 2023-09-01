import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/filterSideBar/SideBar";
import ProductCard from "../../components/productCard/ProductCard";
import { getProducts } from "../../features/product/helpers/getAllProduct";
import { useDispatch, useSelector } from "react-redux";
import "../../styles.css";
import {
  
  filterProdLowToHigh,
  setEditedProductIdNull,
  setSingleProdNull,
} from "../../features/product/productSlice";

const AllProducts = () => {
  // Define the API call parameters in an object
  const dispatch = useDispatch();
  const { allProducts, editedProductId } = useSelector(
    (store) => store.product
  );

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
  // Your product data
  // const products = [
  //   // ... (your product data here)
  // ];

  // Function to filter products by category or multiple categories
  // function filterProductsByCategory(products, categories) {
  //   // Check if 'categories' is an array or a single category
  //   if (Array.isArray(categories)) {
  //       // Filter products matching any of the specified categories
  //       return products.filter(product => categories.includes(product.category));
  //   } else {
  //       // Filter products matching the single specified category
  //       return products.filter(product => product.category === categories);
  //   }
  // }

  // Example usage:

  // Filter products with a single category
  // const singleCategory = "jwel";
  // const singleCategoryProducts = filterProductsByCategory(allProducts, singleCategory);

  // console.log("Products in single category:", singleCategoryProducts);

  // Filter products with multiple categories (an array)
  // const multipleCategories = ["jwel", "decor"];
  // const multiCategoryProducts = filterProductsByCategory(allProducts, multipleCategories);

  // console.log("Products in multiple categories:", multiCategoryProducts);

  // Now, 'productsByCategory' contains products grouped by category with a rating of 3 or above
  console.log(allProducts);

  
  return (
    <div>
      <Navbar />
      <div className="all-prod-container">
        <SideBar />
        <div className="common-flex wrap gap-m a-start">
          {allProducts?.map((data) => {
            return <ProductCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
