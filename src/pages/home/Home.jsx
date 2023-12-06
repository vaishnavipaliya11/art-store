import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./home.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  categorySet,
  dealsSet,
  homeTag,
  projectDetails,
  homeEverydayInspirationSetOne,
  homeEverydayInspirationSetTwo,
  posterImgOne,
  posterImgTwo,
  posterTagOne,
  posterTagTwo,
  multipleImgSet,
} from "../../constansts";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProd } from "../../features/product/helpers/getCategoryProd";
import { addCategories } from "../../features/product/productSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filterProd, categories } = useSelector((store) => store.product);

  return (
    <div className="main-container">
      <Navbar />
      <div className="common-col gap-sm">
        <p style={{ textAlign: "center" }}>{homeTag}</p>
        <div className="category-container common-flex a-center  j-center ">
          {categorySet.map(({ name, img, apicat }) => {
            return (
              <div className="">
                {
                  <div
                    className="common-col a-center j-center cat-gap"
                    onClick={() => {
                      {
                        categories.includes(apicat)
                          ? dispatch(
                              addCategories(
                                categories?.filter((data) => data !== apicat)
                              )
                            )
                          : dispatch(addCategories([...categories, apicat]));
                      }
                      navigate("/products");
                    }}
                  >
                    <img className="img-br-half cat-img" src={img} alt={name} />
                    <p className="cat-fs">{name}</p>
                  </div>
                }
              </div>
            );
          })}
        </div>

        <div className="common-col gap-sm layout-mr">
          <h2 className="fs-bg top-picks" onClick={() => navigate("/products")}>
            Top Picks for you <AiOutlineArrowRight className="arrow" />{" "}
          </h2>
          <div className="picks-container common-flex a-center j-center gap-med">
            {dealsSet.map(({ name, img, note }) => (
              <div
                className="picks-card img-border cr-pointer "
                key={name}
                onClick={() => navigate("/products")}
              >
                <div className="picks-card-inner">
                  <img className="picks-img" src={img} alt={name} />
                  <p className="pick-fs common-col a-center j-center ">
                    {name} <span style={{ color: "#B6B6B4" }}>{note}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="common-col j-center a-center gap-sm border-gray pd-med mr-med layout-mr img-border max-width">
          <div className="common-flex a-center gap-xs">
            <p className="fm-cur">
              Daily Doses of Artful Inspiration: Elevate Your Everyday
            </p>
            <div className="inspiration-set-one-parent">
              {homeEverydayInspirationSetOne?.map(({ img, name }) => {
                return (
                  <div className="inspiration-set-one ">
                    <img src={img} alt={name} className="img-border " />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="common-flex a-center gap-xs">
            <div className="inspiration-set-two-parent">
              {homeEverydayInspirationSetTwo?.map(({ img, name }) => {
                return (
                  <div className="inspiration-set-one ">
                    <img src={img} alt={name} className="img-border " />
                  </div>
                );
              })}
            </div>
            <p className="fm-cur">
              Crafting Beauty in the Ordinary: Where Everyday Life Meets
              Artistic Expression
            </p>
          </div>
        </div>

        <div className="common-col j-center a-center gap-sm border-gray pd-med mr-med layout-mr img-border poster-width">
          <div className="common-flex a-center gap-xs poster-img">
            {posterImgOne?.map(({ img, text, video }) => {
              return (
                <div className="inspiration-set-one">
                  {img ? (
                    <img
                      src={img}
                      alt={text}
                      className="img-border poster-img"
                    />
                  ) : (
                    <video
                      style={{
                        maxWidth: "20rem",
                        height: "10rem",
                        borderRadius: "5px",
                      }}
                      className="img-border"
                      controls
                      autoPlay
                    >
                      <source src={video} type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
          </div>
          <div className="common-flex a-center gap-xs poster-container">
            {posterImgTwo?.map(({ img, text, video }) => {
              return (
                <div className="inspiration-set-one ">
                  {img ? (
                    <img
                      src={img}
                      alt={text}
                      className="img-border poster-img"
                    />
                  ) : (
                    <video
                      style={{ width: "20rem", height: "10rem" }}
                      className="img-border"
                      controls
                    >
                      <source src={video} type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="abcd">
          <div className="common-col a-center gap-sm pd-med gradient-green max-width">
            <h2 className="fs-bg top-picks">What is Arto-G?</h2>

            <div className="projectDetails-container layout-mr">
              {projectDetails.map(({ heading, description }) => {
                return (
                  <div>
                    <h3 className="fs-med fm-cur ">{heading}</h3>
                    <p className="fm-cur ">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="common-flex js-evenly footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
