import React from 'react';
import s from './Main.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Benefits from './Benefits/Benefits';
import Post from './Post/Post';
import MainServices from './Services/Services';
import { Button } from 'react-bootstrap';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import Globe from './Globe/Globe';
import MainContacts from './Contacts/Contacts';

function Main() {

  return (
    <div className={s.mainbg}>
      <Container>
        <Row>
          <Col lg="5" className={s.intro}>
            <h1>Let’s Create your<br/>unique design<br/>together!</h1>
            <p>Our goal is create the best for our customers. You just need to explore our services and find the best solution for you and your business.</p>
            <div className={s.btns}>
            <Button className={s.portfolio_btn}><NavLink to='/portfolio'>Portfolio</NavLink></Button>
            <Button className={s.services_btn}><NavLink className={s.link} to='/services'>Services</NavLink></Button>
            </div>
          </Col>
          <Col lg="7">
            <Globe />
          </Col>
        </Row>
      </Container>
      <Benefits />
      <MainServices />
      <Post />
      {/* <MainContacts /> */}
      {/* <Container>
      <Row>
        <Col className={s.intro}>
          <h1 className={s.years}><a className={s.seven}>7+</a> years of design experience</h1>
          <p className={s.para}>Let's Create Your Unique Design Together</p>
          <p className={s.loves}>Loves by <a className={s.two}>200</a> + customers</p>
          <MainCarousel />
        </Col>
      </Row>
      <Row>
        <Col>
          <Benefits />
        </Col>
      </Row>
    </Container>
    <Post />
    <MainServices /> */}
    </div>
  );
}

export default Main;
