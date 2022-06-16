import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards/Card";

function Grid() {
  const render = true;
  const renderr = false;
  const renderrr = false;
  const renderrrr = false;
  return (
    <>
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ border: "1px solid red" }}
        >
          <Col xs lg="2" style={{ border: "1px solid red" }}>
            <Card />
          </Col>
          <Col xs lg="2" style={{ border: "1px solid red" }}>
            <Card />
          </Col>
          <Col xs lg="2" style={{ border: "1px solid red" }}>
            <Card />
          </Col>
          <Col xs lg="2" style={{ border: "1px solid red" }}>
            <Card />
          </Col>
          <Col xs lg="2" style={{ border: "1px solid red" }}>
            <Card />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Grid;
