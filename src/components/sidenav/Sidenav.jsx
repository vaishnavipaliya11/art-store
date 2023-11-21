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
import { categoriesArr } from "../../constansts";


  const Sidenav = () => {
  const dispatch = useDispatch();
  const { filterProd, categories } = useSelector((store) => store.product);

  const handleSortClick = () => {
    dispatch(filterProdLowToHigh());
  };
  return (
    <div className="mr-sm-top ">
      <div className="common-flex jst-sp-bet">
        <p>Filters</p>
        <button
          className="read-more-btn"
          onClick={() => {
            dispatch(clearFilter());
            dispatch(getProducts());
          }}
        >
          Clear
        </button>
      </div>
      <div className="common-col gap-xs ">
        <div>
          <p className="text-filter">Price</p>
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
                type="radio"
                value={filterProd.hightoLow}
                onChange={() => {
                  dispatch(filterProdHighToLow());
                }}
              />{" "}
              Price- high to low
            </label>
          </div>
        </div>
        <div>
          <p className="text-filter">Categories</p>
          <div className="common-col">
            {categoriesArr.map(({ name, text }) => {
              return (
                <label>
                  <input
                    type="checkbox"
                    // value={filterProd}
                    onChange={async () => {
                      {
                        categories.includes(text)
                          ? dispatch(
                              addCategories(
                                categories?.filter((data) => data !== text)
                              )
                            )
                          : dispatch(addCategories([...categories, text]));
                      }
                      // await dispatch(filterCategories(text));
                    }}
                  />{" "}
                  {name}
                </label>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-filter">Rating</p>
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

export default Sidenav;
