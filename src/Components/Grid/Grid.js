import React, { useEffect } from "react";
import Cards from "../Cards/Card";
// import WhatToWatch from "../WhatToWatch/WhatToWatch";
import ErrorHandler from "../ErrorHander/ErrorHandler";

import { NavLink, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Grid.css";

import { useSelector, useDispatch } from "react-redux";
import { loadMovieList } from "../../redux/actions";

function Grid() {
  const location = useLocation();
  const data = useSelector((state) => state.movielist[0].items);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList(location.state));
  }, []);

  console.log(location.state);

  return (
    <div className="grid-main">
      {error ? (
        <ErrorHandler />
      ) : (
        <Container>
          <Row className="Gallary_Container">
            <h1 className="grid-heading">What to Watch</h1>
            {data.map((item) => (
              <Col className="Grid-Card">
                <NavLink
                  to={`/title/${item.id}`}
                  state={item.id}
                  className="NavLink"
                >
                  <Cards item={item} />
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Grid;
