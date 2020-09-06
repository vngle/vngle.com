import React from "react";
import { Container, Row, Col, Nav, Badge } from "react-bootstrap";
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import styled from "styled-components";

import Link from "./Link";

import Logo from "../../static/images/logo.png";

export default () => (
  <Container as="footer" className="text-center pt-5">
    <Row>
      <Col sm className="m-auto">
        <SocialRow className="justify-content-around mb-5">
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
        </SocialRow>
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
          <Link
            to="https://www.notion.so/vngle/Careers-Vngle-ef8a5667e86b4c129a88538d04ae3f00"
            className="nav-link text-muted"
          >
            Careers
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
          <Nav.Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScpXPlS3MOqr9-P5E4A_F2JFt4dfspI-OY2W-xlAPWUOT9yoA/viewform"
            className="text-muted"
          >
            <Badge variant="primary">Feedback</Badge>
          </Nav.Link>
        </FooterNav>
      </Col>
    </Row>

    <Col className="justify-content-center mt-3">
      <p>
        Copyright {new Date().getFullYear()},{" "}
        <Link to="/" title="Vngle">
          Vngle
        </Link>
        . All rights reserved.
      </p>
    </Col>
  </Container>
);

const SocialRow = styled(Row)`
  font-size: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const FooterNav = styled(Nav)`
  font-size: 14px;

  & .nav-link .badge {
    font-size: 14px;
  }
`;
