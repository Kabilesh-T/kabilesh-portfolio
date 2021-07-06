import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Image from "../Image/Image";

const Content = () =>  (
        <div id="content">
            <Container fluid>
                <Row xs md={1} lg={2}>
                    <Col sm={4} style={{backgroundColor: 'red'}}>1</Col>
                    <Col sm={8}>2</Col>
                </Row>
            </Container>

            <Image number={2}/>
            <Container fluid>
                <Row xs md={1} lg={2}>
                    <Col sm={4} style={{backgroundColor: 'red'}}>1</Col>
                    <Col sm={8}>2</Col>
                </Row>
            </Container>
            <Image number={3}/>
        </div>
    );
export default Content;