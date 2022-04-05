import React from "react";
import style from "./skills.module.scss";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function Skills() {
  return (
    <Container className={style.Container}>
      <Row>
        <strong>Skill Basics</strong>
        <p>Learn about [Basic Skill Information]</p>
        <p>Learn about [Casting Delays]</p>
        <p>Find a skill using the [Alphabetical Skill Listing]</p>
        <strong>Character Skills</strong>
        <p>
          Click on one of the tabs below to view the skills of the characters.
          For a popup window of the skill trees, click on the red + buttons next
          to the skill tabs.
        </p>
      </Row>
    </Container>
  );
}

export default Skills;
