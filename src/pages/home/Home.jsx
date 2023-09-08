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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <Navbar />
      <div className="common-col gap-sm">
        <p style={{ textAlign: "center" }}>{homeTag}</p>
        <div className="category-container common-flex a-center  j-center ">
          {categorySet.map(({ name, img }) => {
            return (
              <div className="">
                {
                  <div className="common-col a-center j-center cat-gap">
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
          <div className="common-flex a-center j-center gap-med">
            {dealsSet.map(({ name, img, note }) => (
              <div className="picks-card" key={name}>
                <div className="picks-card-inner">
                  <img className="picks-img" src={img} alt={name} />
                  <p className="pick-fs common-col a-center j-center">
                    {name} <span style={{ color: "#B6B6B4" }}>{note}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="common-col j-center a-center gap-sm border-gray pd-med mr-med layout-mr ">
          <div className="common-flex a-center gap-xs">
            <h3 className="fm-cur">
              Daily Doses of Artful Inspiration: Elevate Your Everyday
            </h3>
            {homeEverydayInspirationSetOne?.map(({ img, name }) => {
              return (
                <div className="inspiration-set-one ">
                  <img src={img} alt={name} />
                </div>
              );
            })}
          </div>
          <div className="common-flex a-center gap-xs">
            {homeEverydayInspirationSetTwo?.map(({ img, name }) => {
              return (
                <div className="inspiration-set-one ">
                  <img src={img} alt={name} />
                </div>
              );
            })}
            <h3 className="fm-cur">
              Crafting Beauty in the Ordinary: Where Everyday Life Meets
              Artistic Expression
            </h3>
          </div>
        </div>

        <div className="common-col j-center a-center gap-sm border-gray pd-med mr-med layout-mr ">
          <div className="common-flex a-center gap-xs">
            {posterImgOne?.map(({ img, text, video }) => {
              return (
                <div className="inspiration-set-one">
                  {img ? (
                    <img src={img} alt={text} />
                  ) : (
                    <video style={{ width: "20rem", height: "10rem" }} controls>
                      <source src={video} type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
          </div>
          <div className="common-flex a-center gap-xs">
            {posterImgTwo?.map(({ img, text, video }) => {
              return (
                <div className="inspiration-set-one ">
                  {img ? (
                    <img src={img} alt={text} />
                  ) : (
                    <video style={{ width: "20rem", height: "10rem" }} controls>
                      <source src={video} type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
          </div>

          <div className="common-flex a-center gap-xs">
            <div className="common-flex gap-xs">
              <video style={{ width: "40%", height: "40%" }} controls>
                <source
                  src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/20221102_155505_taoz7r.mp4"
                  type="video/mp4"
                ></source>
                Your browser does not support the video tag.
              </video>
              <div className="three-layout-grid gap-xxs">
                {multipleImgSet.map(({ img, text }) => {
                  return (
                    <div>
                      <img src={img} alt={text} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="common-col a-center gap-sm pd-med gradient-green">
          <h2 className="fs-bg top-picks">What is Store?</h2>

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

      <footer className="common-flex js-evenly footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
