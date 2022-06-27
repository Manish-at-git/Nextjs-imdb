import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";

import image from "../../assets/images/share.png";
import { loadMovieList } from "../../redux/actions";

import Categories from "./Categories/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";

function MovieList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMEssage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const datalist = useSelector((state) => state.movielist);
  const signedIn = useSelector((state) => state.registeredUser);
  const dispatch = useDispatch();
  let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  let data = Array.from(datalist);

  const [sortDirection, setsortDirection] = useState("Ranking");

  useEffect(() => {
    dispatch(loadMovieList(location.state.url));
  }, [location.state.url]);

  // console.log(location.state.url);
  const showError = (error) => {
    let authError = error.message;
    let errorSplit = authError.split("/");
    let errorSplitString = errorSplit[1].toString();
    let errorMessageList = errorSplitString.split(")");
    let errorMsg = errorMessageList[0].toString();
    setErrorMEssage(errorMsg);
  };

  let list;
  let signInError;

  const watchlist = (user) => {
    console.log(signedIn);
    if (!(signedIn.toString().trim() === "")) {
      let duplicate = false;
      localStorageList.forEach((item) => {
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
  try {
    // console.log(users);
    list = data[0].items
      .sort((a, b) => {
        return sortDirection === "Ranking" ? a.rank - b.rank : a.year - b.year;
      })
      .slice(0, 20)
      .filter((user) => {
        if (searchTerm == "") {
          return user;
        } else if (
          user.title
            .trim()
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
        ) {
          return user;
        }
      })
      .map((user) => (
        <tr>
          <td>
            <img
              className="table-image"
              src={user.image}
              style={{ width: "50px" }}
            />
            <small className="table-row">
              {user.rank}.{" "}
              <NavLink
                to={`/title/${user.id}`}
                state={user.id}
                className="MovieList-NavLink"
              >
                <span className="blueName">{user.title}</span>
              </NavLink>
              {/* <small>`${user.year}`</small> */}
              <small style={{ fontSize: "0.9em" }}>{`(${user.year})`}</small>
              {console.log(user.id)}
            </small>
          </td>
          <td
            style={{
              fontSize: "0.8rem",
            }}
          >
            <FontAwesomeIcon
              icon={solidStar}
              style={{
                color: "#f5c518",
                padding: "0 5px",
              }}
              size="lg"
            />
            <b>{user.imDbRating}</b>
          </td>
          <td>
            <FontAwesomeIcon
              icon={thinStar}
              style={{ color: "grey", opacity: "0.5" }}
            />
          </td>
          <td>
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "grey", cursor: "pointer" }}
              onClick={() => watchlist(user)}
            />
          </td>
        </tr>
      ));
  } catch (error) {
    console.log(error);
  }

  const sortByYear = (e) => {
    const sortDirection = e.target.value;

    setsortDirection(sortDirection);
  };

  return (
    <div className="MovieList">
      <div className="container MovieList-container">
        {errorMessage && (
          <Alert variant="danger">
            <Alert.Heading>Please Sign in to bookmark</Alert.Heading>
          </Alert>
        )}

        {errorMessage && (
          <Alert variant="danger">
            <Alert.Heading>Please Sign in to bookmark</Alert.Heading>
          </Alert>
        )}
        <div className="MovieList-main">
          <div className="MovieList-page">
            <div className="MovieList-headerpage">
              <div className="MovieList-head">
                <h5>IMDb Charts</h5>
                <h3 className="MovieList-header">
                  IMDb {location.state.title}
                </h3>
                <small className="MovieList-byline">
                  IMDb {location.state.title} as rated by regular IMDb voters.
                </small>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </div>
            <hr />
            <div className="MovieList-LowerHeader">
              <div className="MovieList-title">
                <small className="showing">
                  Showing {location.state.title}
                </small>
              </div>
              <div className="MovieList-sort">
                <label for="sort">Sort by : </label>
                <select
                  name="sort"
                  id="sort"
                  form="sortform"
                  onChange={sortByYear}
                >
                  <option value="Ranking">Ranking</option>
                  <option value="Release">Release</option>
                </select>
                <input
                  type="text"
                  placeholder="Search Here"
                  id="search_input"
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
            <div className="MovieList-list">
              <div>
                <table>
                  <tr style={{ border: "none" }}>
                    <th
                      style={{
                        width: "70%",
                        fontSize: "0.8rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">IMDb</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">Your</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                  {list}
                </table>
              </div>
            </div>
          </div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
