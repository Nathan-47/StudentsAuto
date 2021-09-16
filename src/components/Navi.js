import React  from 'react';
import '../sass/index.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import navlogo from '../img/logo.png';

const navi = () => {
  
    return (
      <div className="navbar-center">

        {/* When website is on small device then navbar will collapse */}
        <Navbar expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <Link to="/"><img src= {navlogo} alt="Students Auto Logo" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle id="nav-burger" />

        {/* Pages that will be embedded in menu when navbar collapses*/}
        <Navbar.Collapse id="burger-menu">
          <Nav id="nav-text">
            <Link to="cars">CARS</Link>
            <Nav.Link href="#Faq">FAQ</Nav.Link>
            <Nav.Link href="#Contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
}

export default navi;