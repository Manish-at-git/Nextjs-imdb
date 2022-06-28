import React, { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ErrorHandler from "../ErrorHander/ErrorHandler";

import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

function Search(props) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  let SeacrhData;
  let errorData;
  console.log(props);
  try {
    SeacrhData = props.props[0].results;
  } catch (error) {
    console.log(error);
  }
  return (
    <Container className="SearchPop">
      {error ? (
        <ErrorHandler />
      ) : isLoading ? (
        <div
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BeatLoader color="#f5c518" cssOverride={override} size={15} />
        </div>
      ) : SeacrhData ? (
        SeacrhData.map((item) => (
          <>
            <Row className="search-row">
              <Col lg={1} className="search-float-image">
                <div className="whiteNmae">
                  <img src={item.image} />
                </div>
              </Col>
              <Col lg={11} className="search-float-content">
                <NavLink
                  to={`/title/${item.id}`}
                  state={item.id}
                  className="search-NavLink"
                >
                  <div>{item.title}</div>
                </NavLink>
                <div>{item.description}</div>
              </Col>
            </Row>
            <hr className="search-hr" />
          </>
        ))
      ) : (
        console.log("errro")
      )}
    </Container>
  );
}

export default Search;
