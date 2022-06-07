import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./NavLink.css";
import logo from "./logo-NavbarLink.png";
import closeButtonNavlink from "./close-button-NavLink.png";
import NavLink from "./NavLinks/NavLink";

function NavLinks() {
  return (
    <div className="container NavLinks">
      <div className="NavLink-logo">
        <img src={logo} />
        <span>
          <img src={closeButtonNavlink} />
        </span>
      </div>
      <div>
        <NavLink title="Movies" />
      </div>
    </div>
  );
}

export default NavLinks;
