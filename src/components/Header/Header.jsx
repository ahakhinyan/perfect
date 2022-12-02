import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from './Header.module.css';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <Navbar bg="opac" fixed='top' expand="lg">
    <Container className={s.navik}>
      <Navbar.Brand><NavLink className={s.brand} to='/'>Perfect Pixel</NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-right flex-grow-1 pe-3">
          <Nav.Link><NavLink className={s.link} to='/about'>About Us</NavLink></Nav.Link>
          <Nav.Link><NavLink className={s.link} to='/services'>Services</NavLink></Nav.Link>
          <Nav.Link><NavLink className={s.link} to='/portfolio'>Portfolio</NavLink></Nav.Link>
          <Nav.Link><NavLink className={s.link} to='/contacts'>Contacts</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    // <div className={s.header}>
    //   <div className={s.logo}>
    //     <NavLink className={s.brand} to='/'>Perfect Pixel</NavLink>
    //   </div>
    //   <div className={s.links}>
    //     <NavLink className={s.link} to='/about'>About Us</NavLink>
    //     <NavLink className={s.link} to='/services'>Services</NavLink>
    //     <NavLink className={s.link} to='/portfolio'>Portfolio</NavLink>
    //     <NavLink className={s.link} to='/contacts'>Contacts</NavLink>
    //   </div>
    //   <div className={s.academy}>
    //     <a href="/academy">Academy</a>
    //   </div>
    // </div>
  );
}

export default Header;
