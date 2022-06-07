import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./NavLink.css";

function NavLink({ title, movieList }) {
  return (
    <div className="NavLink">
      <h4>{title}</h4>
    </div>
  );
}

export default NavLink;
