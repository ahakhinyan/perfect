import React from 'react';
import s from './Services.module.css';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MainServices() {

  return (
    <Container className={s.services}>
      <h1>Services</h1>
<Row className={s.marketing}>
      <Col md="auto">
        <Card className={s.card}>
          <h1>Digital Marketing</h1>
          <div className={s.text}>
              <li>Social Media Marketing</li>
              <li>E-Mail marketing</li>
              <li>SEO</li>
              <li>Google Analytics, Google Console</li>
              <li>Creation of web-sites</li>
          </div>
          <Button className={s.buy_btn}><NavLink to='/services'>Explore</NavLink></Button>
        </Card>
      </Col>
      <Col md="auto">
        <Card className={s.card}>
          <h1>Branding</h1>
          <div className={s.text}>
              <li>Creation and development of corporate identity</li>
              <li>Brand identity</li>
              <li>New product development</li>
              <li>PR</li>
          </div>
          <Button className={s.buy_btn}><NavLink to='/services'>Explore</NavLink></Button>
        </Card>
      </Col>
      <Col md="auto">
        <Card className={s.card}>
        <h1>UI/UX Design</h1>
          <div className={s.text}>
              <li>Modern Design</li>
              <li>Unique Color Scheme</li>
              <li>Customer Journey Map</li>
              <li>Icon Design</li>
              <li>Prototypes</li>
              <li>Web Application</li>
              <li>Mobile Application</li>
          </div>
          <Button className={s.buy_btn}><NavLink to='/services'>Explore</NavLink></Button>
        </Card>
      </Col>

      {/* <Row>
        <Col className={s.card} sm="3">
          <h1>Standart</h1>
          <i className={s.blue}></i>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </Col>
        <Col className={s.card} sm="3">
          <h1>Medium</h1>
        </Col>
        <Col className={s.card} sm="3">
          <h1>Premium</h1>
        </Col>
      </Row> */}
    </Row>
    </Container>
  );
}

export default MainServices;
