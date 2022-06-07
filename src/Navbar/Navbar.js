import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.png";
import NavbarLogo2 from "./NavbarLogo2.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="container Navbar">
        <img className="logo logo1" src={logo} />
        <span className="menu">Menu</span>
        <span className="Search">
          <input type="text" placeholder="Search IMDb" />
        </span>
        <img className="logo logo2" src={NavbarLogo2} />
        <div className="verticle-line"></div>
        <a src="" className="watchlist">
          Watchlist
        </a>
        <a src="" className="SignIn">
          Sign In
        </a>
        <span className="menu">EN</span>
      </nav>
    </>
  );
}

export default Navbar;
