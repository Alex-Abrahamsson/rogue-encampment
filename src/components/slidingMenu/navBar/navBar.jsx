import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navBar.module.scss";

export const NavBar = () => {
  return (
    <Container>
      <Row>
        <Col centered>
          <Link to="/rogue-encampment" className={style.hrefLink}>
            {"Home"}
          </Link>
          <Link to="/basics" className={style.hrefLink}>
            {"Basics"}
          </Link>
          <Link to="/classes" className={style.hrefLink}>
            {"Classes"}
          </Link>
          <Link to="/skills" className={style.hrefLink}>
            {"Skills"}
          </Link>
          <Link to="/items" className={style.hrefLink}>
            {"Items"}
          </Link>
          <Link to="/monsters" className={style.hrefLink}>
            {"Monsters"}
          </Link>
          <Link to="/npcs" className={style.hrefLink}>
            {"Npcs"}
          </Link>
          <Link to="/quests" className={style.hrefLink}>
            {"Quests"}
          </Link>
          <Link to="/shrines" className={style.hrefLink}>
            {"Shrines"}
          </Link>
          <Link to="/maps" className={style.hrefLink}>
            {"Maps"}
          </Link>
          <Link to="/faq" className={style.hrefLink}>
            {"FAQ"}
          </Link>
          <Link to="/files" className={style.hrefLink}>
            {"Files"}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
