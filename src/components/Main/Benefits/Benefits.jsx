import React from 'react';
import s from './Benefits.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Benefits() {
  return (
    <div className={s.benefits}>
          <Container className={s.about}>
      <Row>
        <Col md="5" className={s.text}>
          <p>Our team has created more than 4 years of successful solutions for our clients. 
            We know how to make things work and we are always looking for new ways to simplify and improve your life. 
            Contact us today to see how we can help you!</p>
          <Button className={s.contact}><NavLink to='/contacts'>Contacts</NavLink></Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Benefits;
