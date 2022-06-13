import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import img from "./poster.png";
import img2 from "./trailer.png";
import "./SingleMovie.css";

function SingleMovie() {
  return (
    <>
      <div className="SingleMovie-main1 container-fluid">
        <div className="SingleMovie container">
          <div className="SingleMovie-heading d-flex justify-content-between">
            <div className="SingleMovie-heading-title">
              <h1>Obi-Wan Kenobi</h1>
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
                    <span className="boldLarge">7.9</span>/10
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
                  <span className="rating"> 1239</span>
                </span>
              </div>
            </div>
          </div>
          <div className="SingleMovie-card">
            <div className="SingleMovie-poster card-element">
              <img src={img} />
            </div>
            <div className="SingleMovie-trailer card-element">
              <img src={img2} />
            </div>
            <div className="SingleMovie-media card-element ">
              <div className="SingleMovie-images ">
                <FontAwesomeIcon
                  className="icon"
                  icon={faImages}
                  size="lg"
                  style={{ color: "white" }}
                />
              </div>
              <div className="SingleMovie-images">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFilm}
                  size="lg"
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>
          <div className="info">
            <div className="SingleMovie-info" style={{ width: "60%" }}>
              <div className="categories">
                <span className="categories-action">Action</span>
                <span className="categories-adventure">Adventure</span>
                <span className="categories-comedy">Comedy</span>
              </div>
              <div className="description">
                From visionary director Robert Eggers comes The Northman, an
                action-filled epic that follows a young Viking prince on his
                quest to avenge his father's murder.
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Director</span>
                <span className="director-blue"> Robert Eggers</span>
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Writer</span>
                <span className="director-blue">
                  {" "}
                  Jim Cash(based on characters created by)Jack Epps Jr.(based on
                  characters created by)Peter Craig(story by)
                </span>
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Stars</span>
                <span className="director-blue">
                  {" "}
                  Tom Cruise Jennifer Connelly Miles Teller
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
              <div className="Watchlist">
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
                      78
                    </span>
                  </b>
                  Metascore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SingleMovie-main2 container-fluid">
        <div className="container" style={{ padding: "20px" }}>
          <div className="Cast">
            Cast <FontAwesomeIcon icon={faAngleRight} size="md" />
          </div>
          <div className="gridCast">
            <div style={{ marginRight: "40px" }}>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
            <div>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
          </div>
          <div className="gridCast">
            <div style={{ marginRight: "40px" }}>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
            <div>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
          </div>
          <div className="gridCast">
            <div style={{ marginRight: "40px" }}>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
            <div>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
          </div>
          <div className="gridCast">
            <div style={{ marginRight: "40px" }}>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
            <div>
              <div className="Cast-item inline">
                <img
                  src={img}
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
                <div className="Cast-Name">Tom Cruise</div>
                <div className="Cast-desc">
                  as Capt. Pete 'Maverick' Mitchell
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="SingleMovie-info" style={{ width: "60%" }}>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">Director</span>
              <span className="director-blue"> Robert Eggers</span>
            </div>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">Writer</span>
              <span className="director-blue">
                {" "}
                Jim Cash(based on characters created by)Jack Epps Jr.(based on
                characters created by)Peter Craig(story by)
              </span>
            </div>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">Stars</span>
              <span className="director-blue">
                {" "}
                Tom Cruise Jennifer Connelly Miles Teller
              </span>
            </div>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">All Cast and Crew</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
