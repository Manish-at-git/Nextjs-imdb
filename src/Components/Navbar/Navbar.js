import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";
import NavbarLogo2 from "../../assets/images/NavbarLogo2.png";

import "./Navbar.css";
import NavLinks from "./NavbarLink/NavLinks";
import Search from "../Search/Search";

import { useSelector, useDispatch } from "react-redux";
import { loadSearch } from "../../redux/actions/index";
import { navbarToggle } from "../../redux/actions";

function Navbar() {
  const toggle = useSelector((state) => state.navbarToggle);
  const searchdata = useSelector((state) => state.search);
  const signinData = useSelector((state) => state.register);
  const dispatch = useDispatch();
  let navbarNotToggled = true;
  console.log(signinData);

  const changeState = () => {
    dispatch(navbarToggle(navbarNotToggled));
  };

  console.log(toggle);
  let slide = {};
  toggle ? (slide = { position: "absolute", top: "-100%" }) : (slide = null);

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container-fluid Navbar-main">
        <nav className="container Navbar">
          <NavLink to="/">
            <img className="logo logo1" src={logo} />
          </NavLink>
          <span className="menu" onClick={changeState}>
            <FontAwesomeIcon icon={faBars} className="nav-icons" />
            Menu
          </span>
          <span className="Search">
            <input
              className="search-input"
              type="text"
              placeholder="Search IMDb"
              onChange={(event) => {
                setSearch(event.target.value);
                console.log(search);
              }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="iconss"
              style={{
                color: "grey",
                backgroundColor: "#fff",
                padding: "9px 10px",
                borderRadius: "3px",
                marginLeft: "2px",
              }}
              onClick={() => {
                dispatch(loadSearch(search));
              }}
            />
          </span>
          <img className="logo logo2" src={NavbarLogo2} />
          <div className="verticle-line"></div>
          <a src="" className="watchlist">
            <FontAwesomeIcon icon={faBookmark} className="nav-icons" />
            Watchlist
          </a>
          <NavLink to="/signin" className="SignIn">
            {/* {console.log(signinData)} */}
            {signinData == "" ? "Sign In" : "Sign Out"}
          </NavLink>
          <span className="lang">
            EN
            <FontAwesomeIcon icon={faCaretDown} className="nav-icons" />
          </span>
        </nav>
        <NavLinks slide={slide} />
      </div>
      {search ? <Search props={searchdata} /> : null}
      {/* {console.log(searchdata)} */}
      {/* <Search /> */}
    </>
  );
}

export default Navbar;
