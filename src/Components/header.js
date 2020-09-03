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
              width="70"
              height="60"
              className="d-inline-block align-top"
            />{" "}
            <p>AJ GUITAR SETUP</p>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
}
