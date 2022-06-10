import React from "react";
import "./MovieList.css";

import image from "./share.png";
import img from "./list.png";

import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MovieList() {
  return (
    <div className="MovieList">
      <div className="container MovieList-container">
        <div className="MovieList-main">
          <div className="MovieList-page">
            <div className="MovieList-headerpage">
              <div className="MovieList-head">
                <h5>IMDb Charts</h5>
                <h3 className="MovieList-header">IMDb Top 250 Movies</h3>
                <small className="MovieList-byline">
                  IMDb Top 250 as rated by regular IMDb voters.
                </small>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </div>
            <hr />
            <div className="MovieList-LowerHeader">
              <div className="MovieList-title">
                <small>Showing 250 Titles</small>
              </div>
              <div className="MovieList-sort">
                <label for="sort">Sort by : </label>
                <select name="sort" id="sort" form="sortform">
                  <option value="Ranking">Ranking</option>
                  <option value="Release">Release</option>
                </select>
              </div>
            </div>
            <div className="MovieList-list">
              <div>
                <table>
                  <tr>
                    <th
                      style={{
                        width: "70%",
                        fontSize: "0.9rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th>IMDb</th>
                    <th>Your</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>
                      <img className="table-image" src={img} />
                      <small className="table-row">
                        1. The Shawshank Redemption (1994)
                      </small>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={solidStar}
                        style={{ color: "gold" }}
                      />
                      9.2
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={thinStar}
                        style={{ color: "grey" }}
                      />
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ color: "grey" }}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="MovieList-sideBar">
            <div className="Sidebar-header">
              <h5>You Have Seen</h5>
              <span>
                <span className="bold">0</span>/250 (0%)
              </span>
              <div className="Sidebar-check">
                <input type="checkbox" />
                <label>Hide titles I've seen</label>
              </div>
            </div>
            <hr />
            <div className="category">
              <h6>Top Rated Movies by Genre</h6>
              <small>Action</small>
              <small>Adventure</small>
              <small>Animation</small>
              <small>Biography</small>
              <small>Comedy</small>
              <small>Crime</small>
              <small>Drama</small>
              <small>Action</small>
              <small>Adventure</small>
              <small>Animation</small>
              <small>Biography</small>
              <small>Comedy</small>
              <small>Crime</small>
              <small>Drama</small>
              <small>Action</small>
              <small>Adventure</small>
              <small>Animation</small>
              <small>Biography</small>
              <small>Comedy</small>
              <small>Crime</small>
              <small>Drama</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
