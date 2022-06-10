import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Card from "../Cards/Card";

import "./MoviePick.css";
import {
  faAngleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function MoviePick() {
  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="container MoviePick">
        <div className="MoviePick-Heading">
          <h4 className="MoviePick-Heading-Large d-flex align-items-center">
            Top Picks
            <FontAwesomeIcon icon={faChevronRight} className="px-2" />
          </h4>
          <p className="MoviePick-Heading-small">
            TV Shows and Movies just for you
          </p>

          <div className="MoviePick-Cards" style={{ border: "1px solid red" }}>
            <Carousel style={{ border: "1px solid red" }}>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
              <Carousel.Item>
                <Card />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePick;
