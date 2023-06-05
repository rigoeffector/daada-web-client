/*!

=========================================================
* Daada INC - web - v1.0.0
=========================================================

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Daada Inc•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink tag={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="#services">
                  Our Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="#about-us">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
