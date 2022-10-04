import React, { useState, useEffect, useContext, FC } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DiceLogo from "../assets/dice-logo.svg";
import NavDropdown from 'react-bootstrap/NavDropdown';

const DungeonNavBar: FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbrand-style navbar-brand">
          <Link to="/party-home" className="navbar-brand">
            <img src="https://i.imgur.com/Rax2KDv.png" style={{ width: 70, height: 70, paddingBottom: 10, marginRight: 10 }} />Natural One
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>

            <Nav.Link>
              <Link to="/make-party">
                Make a New Party
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              Edit Parties
            </Nav.Link>
            <Nav.Link eventKey={3}>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DungeonNavBar;