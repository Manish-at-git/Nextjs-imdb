import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API_KEY";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import ErrorHandler from "../ErrorHander/ErrorHandler";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { useDispatch, useSelector } from "react-redux";
import { loadMovieList, loadSingleImages } from "../../redux/actions";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Cast from "./Cast/Cast";

import "./SingleMovie.css";

function SingleMovie() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => state.movielist);
  const isLoading = useSelector((state) => state.isLoading);
  const singleData = useSelector((state) => state.singleMovieData);
  const signedIn = useSelector((state) => state.registeredUser);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  // console.log(singleImage);
  console.log(location);
  let bookmarked = [];
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    dispatch(
      loadMovieList(
        `https://imdb-api.com/en/API/Title/${API_KEY}/${location.state}`
      )
    );
  }, [id]);

  useEffect(() => {
    dispatch(loadSingleImages(location.state));
  }, [id]);

  const watchlist = (user) => {
    console.log(signedIn);
    if (!(signedIn.toString().trim() === "")) {
      let duplicate = false;
      localStorageList.forEach((item) => {
        // bookmarked.push(item.id);
        if (item.id === user.id) {
          duplicate = true;
          console.log("dupliocate");
          console.log(duplicate);
        }
      });

      if (duplicate === false) {
        localStorageList.push(user);
        localStorage.setItem(signedIn, JSON.stringify(localStorageList));
      }
    } else {
      navigate("/register");
    }
  };

  var genre;
  var cast;
  var similars;
  var images;
  var trailer;
  var title;
  var imDbRating;
  var image;
  var plot;
  var stars;
  var writers;
  var directors;
  var metacriticRating;

  try {
    metacriticRating = data[0].metacriticRating;
    stars = data[0].stars;
    writers = data[0].writers;
    directors = data[0].directors;
    plot = data[0].plot;
    image = data[0].image;
    imDbRating = data[0].imDbRating;
    title = data[0].title;
    trailer = singleData[0].trailerdata.linkEmbed;
  } catch (error) {
    console.log(error);
  }
  try {
    genre = data[0].genreList;
    console.log(genre);
  } catch (error) {
    console.log(error);
  }

  try {
    cast = data[0].actorList;
  } catch (error) {
    console.log(error);
  }

  try {
    similars = data[0].similars;
  } catch (error) {
    console.log(error);
  }

  try {
    images = singleData[0].imagesData.items;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            paddingTop: "300px",
          }}
        >
          <BeatLoader color="#f5c518" cssOverride={override} size={20} />
        </div>
      ) : error ? (
        <ErrorHandler />
      ) : (
        <>
          <div className="SingleMovie-main1 container-fluid">
            <div className="SingleMovie container">
              <div className="SingleMovie-heading d-flex justify-content-between">
                <div className="SingleMovie-heading-title">
                  <h1>{title ? title : console.log("no movie")}</h1>
                </div>
                <div className="SingleMovie-heading-info">
                  <div className="heading">
                    <span className="block">IMDB RATING</span>
                    <span className="block">
                      <FontAwesomeIcon
                        icon={solidStar}
                        size="lg"
                        style={{ color: "#f5c518" }}
                      />
                      <span className="rating">
                        {" "}
                        <span className="boldLarge">
                          {imDbRating ? imDbRating : console.log("errro")}
                        </span>
                        /10
                      </span>
                    </span>
                  </div>
                  <div className="heading">
                    <span className="block">YOUR RATING</span>
                    <span className="block">
                      <FontAwesomeIcon
                        icon={thinStar}
                        size="lg"
                        style={{ color: "#5799ef" }}
                      />
                      <span className="rating" style={{ color: "#5799ef" }}>
                        {" "}
                        Rate
                      </span>
                    </span>
                  </div>
                  <div className="heading">
                    <span className="block">POPULARITY</span>
                    <span className="block">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        size="lg"
                        style={{ color: "green" }}
                      />
                      <span className="rating">
                        {" "}
                        {imDbRating ? imDbRating : console.log("errro")}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="SingleMovie-card">
                <div className="SingleMovie-poster card-element">
                  <img src={image ? image : console.log("error")} />
                </div>
                <div className="SingleMovie-trailer card-element">
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src={trailer}>
                      {/* {console.log(trailer)} */}
                    </iframe>
                  </div>
                </div>
                <div className="SingleMovie-media card-element ">
                  <div className="SingleMovie-images card-element">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faImages}
                      size="lg"
                      style={{ color: "white" }}
                    />
                    <small>Images</small>
                  </div>
                  <div className="SingleMovie-images">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faFilm}
                      size="lg"
                      style={{ color: "white" }}
                    />
                    <small>Videos</small>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="SingleMovie-info" style={{ width: "60%" }}>
                  <div className="categories">
                    {genre &&
                      genre.map((item) => (
                        <span className="categories-action">{item.value}</span>
                      ))}
                  </div>
                  <div className="description">
                    {plot ? plot : console.log("error")}
                  </div>
                  <hr className="description-line" />
                  <div className="director">
                    <span className="director-bold">Director</span>
                    <span className="director-blue">
                      {" "}
                      {directors ? directors : console.log("error")}
                    </span>
                  </div>
                  <hr className="description-line" />
                  <div className="director">
                    <span className="director-bold">Writer</span>
                    <span className="director-blue">
                      {" "}
                      {writers ? writers : console.log("error")}
                    </span>
                  </div>
                  <hr className="description-line" />
                  <div className="director">
                    <span className="director-bold">Stars</span>
                    <span className="director-blue">
                      {" "}
                      {stars ? stars : console.log("error")}
                    </span>
                  </div>
                </div>
                <div
                  className="SingleMovie-info watchlist-bookmark"
                  style={{ width: "40%" }}
                >
                  <div className="See-Showtime">
                    <FontAwesomeIcon icon={faPlus} size="md" />
                    {"  "}
                    See Showtime
                  </div>
                  <div className="Watchlist" onClick={() => watchlist(...data)}>
                    <span>
                      <FontAwesomeIcon icon={faPlus} size="md" />
                      {"  "}
                      Add to Watchlist{" "}
                    </span>
                    <FontAwesomeIcon icon={faAngleDown} size="md" />
                  </div>
                  <div className="bookmark-down">
                    <span>
                      <b>
                        <span className="boldLarge">2.1K</span>
                      </b>
                      User reviews
                    </span>
                    <span>
                      <b>
                        <span className="boldLarge">320</span>
                      </b>
                      Critic reviews
                    </span>
                    <span>
                      <b>
                        <span
                          className="boldLarge"
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          {metacriticRating
                            ? metacriticRating
                            : console.log("error")}
                        </span>
                      </b>
                      Metascore
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div
              className="container"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="SingleMovie-main2 container"
                style={{ width: "60%" }}
              >
                <div className="">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    // loop={true}
                    // loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {images &&
                      images.slice(0, 10).map((item) => (
                        <SwiperSlide>
                          <div className="slider-image">
                            <img src={item.image} />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>

                <div>
                  <div className="gridCast">
                    {cast &&
                      cast.slice(0, 8).map((item) => (
                        <div style={{ padding: "10px" }}>
                          <div className="Cast-item inline">
                            <img
                              src={item.image}
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                            />
                          </div>
                          <div className="cast-img inline">
                            <div className="Cast-Name">{item.name}</div>
                            <div className="Cast-desc">
                              {item.asCharacter.slice(0, 40)}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="container">
                  <hr className="description-line" />
                  <div className="director">
                    <span className="director-bold">Director</span>
                    <span className="director-blue">
                      {" "}
                      {directors ? directors : console.log("error")}
                    </span>
                  </div>
                  <hr className="description-line" />
                  <div className="director">
                    <span className="director-bold">Writer</span>
                    <span className="director-blue">
                      {" "}
                      {writers ? writers : console.log("error")}
                    </span>
                  </div>
                  <hr className="description-line" />
                  <div className="director">
                    <span className="director-bold">Stars</span>
                    <span className="director-blue">
                      {" "}
                      {stars ? stars : console.log("error")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-sidebar">
                {similars &&
                  similars.slice(0, 8).map((item) => (
                    <NavLink
                      to={`/title/${item.id}`}
                      state={item.id}
                      className="search-NavLink"
                    >
                      <div className="single-sidebar-box">
                        <div className="watched-series">
                          <small className="watched-series-span">
                            {item.title}
                          </small>
                          <small className="created-year-span">
                            {item.imDbRating}
                          </small>
                        </div>
                        <img src={item.image} className="created-year" />
                      </div>
                    </NavLink>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SingleMovie;
