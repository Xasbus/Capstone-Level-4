import React from "react";
import Pic1 from "../../assets/showcasePic1.png";
import Pic2 from "../../assets/showcasePic2.jpg";
import Pic3 from "../../assets/showcasePic3.jpg";

const caroSize = {
  width: "80%",
  height: "80%",
};

export function Carousel() {
  return (
    <div
      id="carouselAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" data-testid="carouselTest">
        <div className="carousel-item active">
          <img
            src={Pic1}
            id="caroTooltip1"
            className="d-block w-100"
            alt="Exciting Action"
            style={caroSize}
            data-bs-title="Exciting Action"
            data-bs-toggle="tooltip"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Pic2}
            id="caroTooltip2"
            className="d-block w-100"
            alt="Immersive Gameplay"
            style={caroSize}
            data-bs-title="Amazing Worlds"
            data-bs-toggle="tooltip"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Pic3}
            id="caroTooltip3"
            className="d-block w-100"
            alt="Great Stories"
            style={caroSize}
            data-bs-title="Incredible Graphics"
            data-bs-toggle="tooltip"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
