import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Links.css";

function Links() {
  return (
    <div className="Link">
      <h3 className="Heading">
        {/* <FontAwesomeIcon icon="fa-solid fa-film-simple" /> */}
        Movie
      </h3>
      <span className="links">Popular Movies</span>
      <span className="links">Box Office </span>
      <span className="links">Rating</span>
    </div>
  );
}

export default Links;
