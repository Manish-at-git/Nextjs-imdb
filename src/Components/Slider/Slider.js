import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Card from "../Cards/Card";

import "./Slider.css";

function Slider() {
  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="container MoviePick">
        <div className="MoviePick-Heading">
          <h4 className="MoviePick-Heading-Large">
            <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
            Top Picks
          </h4>
          <p className="MoviePick-Heading-small">
            TV Shows and Movies just for you
          </p>

          <div className="MoviePick-Cards">
            <Carousel>
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

export default Slider;
