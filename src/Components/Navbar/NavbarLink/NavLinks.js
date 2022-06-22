import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./NavLink.css";
import logo from "../../../assets/images/logo-NavbarLink.png";
import closeButtonNavlink from "../../../assets/images/close-button-NavLink.png";
import Links from "./Links/Links";

import { useDispatch } from "react-redux";
import { navbarClicked } from "../../../redux/actions/index";

function NavLinks({ slide }) {
  const dispatch = useDispatch();

  const toggled = () => {
    dispatch(navbarClicked());
  };

  const Movies = [
    {
      link: "/top250",
      Name: "Top 250 Movies",
      category: "Top 250 Movies",
      url: "https://imdb-api.com/en/API/Top250Movies/k_1yw64100",
    },
    {
      link: "/popular",
      Name: "Popular Movies",
      category: "popular",
      url: "https://imdb-api.com/en/API/MostPopularMovies/k_1yw64100",
    },
    {
      link: "/popular",
      Name: "Box Office",
      category: "Top Box Office",
      url: "https://imdb-api.com/en/API/BoxOffice/k_1yw64100",
    },
  ];
  const TV = [
    {
      link: "/top250",
      Name: "Top 250 TV Shows",
      category: "Top 250 TV Shows",
      url: "https://imdb-api.com/en/API/Top250TVs/k_1yw64100",
    },
    {
      link: "/popular",
      Name: "Popular TV Shows",
      category: "Popular TV Shows",
      url: "https://imdb-api.com/en/API/MostPopularTVs/k_1yw64100",
    },
    {
      link: "/popular",
      Name: "Rating",
      category: "Rating",
      url: "https://imdb-api.com/en/API/MostPopularTVs/k_1yw64100",
    },
  ];
  const Awards = [
    {
      link: "/top250",
      Name: "Academy",
      category: "Academy Awards",
      url: "https://jsonplaceholder.typicode.com/users",
    },
    {
      link: "/popular",
      Name: "Others",
      category: "Other Awards",
      url: "https://jsonplaceholder.typicode.com/comments",
    },
  ];
  return (
    <div className="container NavLinks" style={slide}>
      <div className="NavLink-logo">
        <img src={logo} />
        <span className="close-button">
          <img src={closeButtonNavlink} onClick={toggled} />
        </span>
      </div>
      <div className="LinkCards">
        <Links title="Movies" List={Movies} />
        <Links title="TV Shows" List={TV} />
        <Links title="Awards" List={Awards} />
      </div>
    </div>
  );
}

export default NavLinks;
