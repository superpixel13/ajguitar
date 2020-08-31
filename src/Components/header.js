import React from 'react'
import '../App.css';
import AJlogo from '../AJ Pictures/logo.png'
import {
  Navbar,
} from "react-bootstrap";
export default function Header () {
    return (
      <div>
        <Navbar variant="dark" bg="dark" expand="lg" className="navStyle justify-content-md-center">
          <Navbar.Brand href="#home" className="brand">
            <img
              alt=""
              src={AJlogo}
              width="50"
              height="auto"
              className="d-inline-block align-top"
            />{" "}
            AJ GUITAR SETUP
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
}
