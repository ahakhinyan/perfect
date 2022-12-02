import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainServices from './../Main/Services/Services'
import Globe from '../Main/Globe/Globe';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import s from './Services.module.css';
import Service from './../../img/Services.svg'

function Services() {
  return (
    <div className={s.services}>
      <Container>
        <Row>
          <Col lg="5" className={s.intro}>
            <h1>Choose what<br/>you need for<br/>success!</h1>
            <p>We will help you choose the best service for your needs. We have a variety of services to choose from, so we can find the one that’s right for you.</p>
            <div className={s.btns}>
            <Button className={s.portfolio_btn}><NavLink to='/about'>About Us</NavLink></Button>
            <Button className={s.services_btn}><NavLink className={s.link} to='/portfolio'>Portfolio</NavLink></Button>
            </div>
          </Col>
          <Col lg="7" className={s.image}>
            <img src={Service} alt="Services"/>
          </Col>
        </Row>
      </Container>
      <MainServices />
    </div>
  );
}

export default Services;
