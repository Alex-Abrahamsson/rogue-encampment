import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import style from "./home.module.scss";


function Home() {
  return (
    <Container className={style.Container}>
      <Row className={style.SeeMeRow}>
        <Col className={style.SeeMeCol}>
          <h1>The Rogue Encampment</h1>
          <p>Welcome to The Rogue encampment, the place to be for Diablo II players</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;