import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import style from "./classes.module.scss";


function Classes() {
    return (
      <Container className={style.Container}>
        <Row><h1>Classes</h1></Row>
        <Row><h6>Paladin</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-paladin-900x506.jpg"/></Row>
        <Row><h6>Sorceress</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-sorceress-900x506.jpg"/></Row>
        <Row><h6>Necromancer</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-necromancer-900x506.jpg"/></Row>
        <Row><h6>Barbarian</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-barbarian-900x506.jpg"/></Row>
        <Row><h6>Druid</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-druid-900x506.jpg"/></Row>
        <Row><h6>Amazon</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-amazon.jpg"/></Row>
        <Row><h6>Assasin</h6><Image fluid src="https://www.pcgamesn.com/wp-content/uploads/2021/05/diablo-2-resurrected-classes-assassin-900x506.jpg"/></Row>
      </Container>
    );
}

export default Classes;