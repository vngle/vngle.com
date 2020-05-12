import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav, Badge } from "react-bootstrap"
import styled from "styled-components"

import Logo from "../static/images/logo.png"
import Facebook from "../static/images/icons/facebook.svg"
import Instagram from "../static/images/icons/instagram.svg"
import Linkedin from "../static/images/icons/linkedin.svg"
import Twitter from "../static/images/icons/twitter.svg"

export default () => (
  <Container as="footer" className="text-center">
    <Row>
      <Col sm className="m-auto">
        <Row className="justify-content-around mb-5">
          <a href="https://www.facebook.com/vnglestories/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/vnglestories/">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/vnglestories">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company/vngle/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </Row>
        <div className="mb-4">
          <Link to="/">
            <img alt="Vngle logo" src={Logo} height={47} />
          </Link>
          <p className="mt-3">"Various angles" on your city.</p>
        </div>
      </Col>
      <Col className="text-center" sm>
        <FooterNav className="flex-column">
          <Nav.Item className="pb-2 text-uppercase font-weight-bold">
            Vngle
          </Nav.Item>
          <Link to="/wwan" className="nav-link text-muted">
            Where We Are Now
          </Link>
          <Nav.Link
            href="https://docs.google.com/forms/d/1ymGkcekuWk_1SPl0r6lp9uleQKGbHE6dTx4aY1jrNT0/edit"
            className="text-muted"
          >
            Tipline
          </Nav.Link>
          <Nav.Link href="https://medium.com/vngle" className="text-muted">
            Blog
          </Nav.Link>
          <Link to="/about" className="text-muted nav-link">
            About
          </Link>
          <Nav.Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScpXPlS3MOqr9-P5E4A_F2JFt4dfspI-OY2W-xlAPWUOT9yoA/viewform"
            className="text-muted"
          >
            <Badge variant="primary">Feedback</Badge>
          </Nav.Link>
        </FooterNav>
      </Col>
    </Row>

    <Row as={Col} className="justify-content-center mt-3">
      <p>
        Copyright {new Date().getFullYear()}, {` `}{" "}
        <Link to="/" title="Vngle">
          Vngle
        </Link>
        . All rights reserved.
      </p>
    </Row>
  </Container>
)

const FooterNav = styled(Nav)`
  font-size: 14px;

  & .nav-link .badge {
    font-size: 14px;
  }
`
