import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import imgage from "./image.jpg";
import img from "./img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus as Plus } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import "./CarouselCard.css";

function CarouselCard() {
  return (
    <div className="car">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={imgage} class="d-block w-100" alt="..." />
        <div className="Carousel-Slider">
          <span className="Carousel-Slider-image">
            <img variant="top" src={img} className="card-img" />
            <span className="add-bookmark-span">
              <FontAwesomeIcon icon={Plus} size="lg" className="add-bookmark" />
            </span>
          </span>
        </div>
        <div className="carousel-caption d-none d-md-block">
          <span>
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="lg"
              className="add-bookmark"
            />
          </span>
          <span>
            <h2>First Slider</h2>
            <p>Watch te</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
