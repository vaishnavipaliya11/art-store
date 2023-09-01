import React from "react";
import "../../styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  clearFilter,
  filterCategories,
  filterProdHighToLow,
  filterProdLowToHigh,
  filterRatingFourAbove,
  filterRatingOneAbove,
  filterRatingThreeAbove,
  filterRatingTwoAbove,
} from "../../features/product/productSlice";
import { getProducts } from "../../features/product/helpers/getAllProduct";
const Sidebar = () => {
  const dispatch = useDispatch();
  const {filterProd} = useSelector((store) => store.product);

  const handleSortClick = () => {
    dispatch(filterProdLowToHigh());
  };
  return (
    <div>
      <div className="common-flex jst-sp-bet">
        <h3>Filters</h3>
        <button className="read-more-btn" onClick={()=> {
          dispatch(clearFilter())
          dispatch(getProducts())
        }}>Clear</button>
      </div>
      <div className="common-col gap-sm ">
        <div>
          <h2 className="text-filter">Price</h2>
          <div className="common-col">
            <label>
              <input
                type="radio"
                name="sort"
                value={filterProd.lowtoHigh}
                onChange={() => {
                  dispatch(filterProdLowToHigh());
                }}
              />{" "}
              Price- low to high
            </label>
            <label>
              <input
                name="sort"
                type="radio"value={filterProd.hightoLow}
                onChange={() => {
                  dispatch(filterProdHighToLow());
                }}
              />{" "}
              Price- high to low
            </label>
          </div>
        </div>
        <div>
          <h3 className="text-filter">Categories</h3>
          <div className="common-col">
            <label>
              <input
                type="checkbox"
                // value={filterProd}
                onChange={() => {
                  dispatch(filterCategories("gift"));
                }}
              />{" "}
              Gifts
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  dispatch(filterCategories("jwel"));
                }}
              />{" "}
              Jewelry
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  dispatch(addCategories("Decor"));
                  dispatch(filterCategories("Decor"));
                }}
              />{" "}
              Decor
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  dispatch(addCategories("prints"))
                  dispatch(filterCategories("prints"));
                }}
              />{" "}
              Prints
            </label>
          </div>
        </div>
        <div>
          <h3 className="text-filter">Rating</h3>
          <div className="common-col">
            <label>
              <input
                name="rating"
                type="radio"
                onChange={() => {
                  dispatch(filterRatingFourAbove());
                }}
              />{" "}
              4 stars and above
            </label>
            <label>
              <input
                name="rating"
                type="radio"
                onChange={() => {
                  dispatch(filterRatingThreeAbove());
                }}
              />{" "}
              3 stars and above
            </label>
            <label>
              <input
                name="rating"
                type="radio"
                onChange={() => {
                  dispatch(filterRatingTwoAbove());
                }}
              />{" "}
              2 stars and above
            </label>
            <label>
              <input
                name="rating"
                type="radio"
                onChange={() => {
                  dispatch(filterRatingOneAbove());
                }}
              />{" "}
              1 stars and above
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
