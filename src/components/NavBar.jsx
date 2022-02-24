import React, { Component } from "react";
import { Col, Row, Nav } from "react-bootstrap";

let navData = [
  {
    name: "contacts",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
];

class NavBar extends Component {
  render() {
    return (
      <div className="top-navbar-class">
        <Row className="navRow-class">
          <Col md={2} style={{}}>
            <div className="Logo-div-wrapper">
              <img width="70px " src="/interaction.svg" />
            </div>
          </Col>
          <Col md={8} style={{ display: "flex", justifyContent: "end" }}>
            <Nav className="nav-ul-wrapper-class" style={{}}>
              {navData.length !== 0 &&
                navData.map((navlink) => (
                  <Nav.Link href="#home">{navlink.name.toUpperCase()}</Nav.Link>
                ))}
            </Nav>
          </Col>
          <Col md={2} style={{ display: "flex" }}>
            <Nav
              className="nav-ul-wrapper-class"
              style={{ flexWrap: "nowrap" }}
            >
              <Nav.Link href="#home">icon</Nav.Link>
              <Nav.Link href="#home">smth</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavBar;
