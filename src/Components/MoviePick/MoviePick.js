import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../Cards/Card";
import img from "./poster.png";
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
            <FontAwesomeIcon icon="fa-solid fa-pipe" />
            Top Picks
            <FontAwesomeIcon icon={faChevronRight} className="px-2" />
          </h4>
          <p className="MoviePick-Heading-small">
            TV Shows and Movies just for you
          </p>

          <div className="MoviePick-Cards">
            <Swiper
              slidesPerView={5}
              spaceBetween={40}
              slidesPerGroup={2}
              loop={false}
              loopFillGroupWithBlank={false}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePick;
