import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles.css";
// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpg';
// import image3 from './images/image3.jpg';

const ImageCarousel = () => {
  const carouselStyles = {
    width: "100%",
    height: "30rem",
    // position: "relative",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "top",
    // backgroundSize: "cover",
    display: "flex",
    justifyContent: "center", // Center images horizontally
    alignItems: "center",
  };
  const imageStyles = {
    objectFit: "cover", // Maintain aspect ratio and cover container
    width: "100%",
    height: "100%",
  };
  return (
    <Carousel autoPlay interval={3000} infiniteLoop style={carouselStyles}>
      <div className="crousel-img">
        <img
          style={imageStyles}
          src=" https://images.pexels.com/photos/318238/pexels-photo-318238.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 1"
        />
      </div>
      <div className="crousel-img">
        <img
          style={imageStyles}
          src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 2"
        />
      </div>
      <div className="crousel-img">
        <img
          style={imageStyles}
          src="https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 3"
        />
      </div>
      <div className="crousel-img">
        <img
          style={imageStyles}
          src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 4"
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
