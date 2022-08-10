import React from "react";
import { Container, Row, Col, Nav, Badge } from "react-bootstrap";
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import styled from "styled-components";

import Link from "./Link";

import Logo from "../images/logo.png";

const Footer = () => (
  <Container as="footer" className="text-center pt-5">
    <Row>
      <Col sm className="m-auto">
        <SocialContainer className="mb-5">
          <a href="https://www.instagram.com/vnglestories/">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/vnglestories/">
            <FiFacebook />
          </a>
          <a href="https://www.linkedin.com/company/vngle/">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/vnglestories">
            <FiTwitter />
          </a>
        </SocialContainer>
        <div className="mb-4">
          <Link to="/">
            <img alt="Vngle logo" src={Logo} height={47} />
          </Link>
          <p className="mt-3">"Various angles" near you.</p>
        </div>
      </Col>
      <Col className="text-center" sm>
        <FooterNav>
          <Link
            to="https://www.notion.so/vngle/Careers-Vngle-ef8a5667e86b4c129a88538d04ae3f00"
            className="nav-link text-muted"
          >
            Jobs
          </Link>
          <Link to="/services" className="nav-link text-muted">
            Services
          </Link>
          <Link to="/faq" className="nav-link text-muted">
            FAQ
          </Link>
          <Link to="/wwan" className="nav-link text-muted">
            Where We Are Now
          </Link>
          <Link to="/about" className="text-muted nav-link">
            About
          </Link>
          <Link to="/privacy" className="text-muted nav-link">
            Privacy
          </Link>
          <Link to="/terms" className="text-muted nav-link">
            Terms of Use
          </Link>
          <Link to="/press" className="text-muted nav-link">
            Press
          </Link>
          <Nav.Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScpXPlS3MOqr9-P5E4A_F2JFt4dfspI-OY2W-xlAPWUOT9yoA/viewform"
            className="text-muted"
          >
            <Badge variant="primary">Feedback / Contact</Badge>
          </Nav.Link>
        </FooterNav>
      </Col>
    </Row>
    <Row>
      <Col className="justify-content-center mt-3">
        <p>3707 Main Street Suite #39, Atlanta, GA 30337, United States</p>
        <p>
          Copyright {new Date().getFullYear()},{" "}
          <Link to="/" title="Vngle">
            Vngle
          </Link>
          . All rights reserved.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;

const SocialContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  font-size: 1.5rem;

  a {
    color: var(--bs-dark);
  }
`;

const FooterNav = styled(Nav)`
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  font-size: 14px;

  & .nav-link .badge {
    font-size: 14px;
  }
`;
