import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel className="banner">
        <Carousel.Item>
          <img
            className="img-fluid  w-100"
            src={"https://i.ibb.co/bHMX38z/banner1.png"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid w-100"
            src={"https://i.ibb.co/BNLrrjW/banner2.png"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid  w-100"
            src={"https://i.ibb.co/J7G2MzS/banner3.png"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
