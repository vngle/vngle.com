import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Navbar, Nav, Button } from "react-bootstrap"
import logo from "../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Navbar collapseOnSelect expand="lg" className="p-5">
      <Navbar.Brand>
        <Link to="/" title={siteTitle}>
          <img alt="Vngle logo" src={logo} height="47" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end text-center">
        <Nav>
          <Button
            href="https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true"
            size="lg"
          >
            Join Us
          </Button>
          <Nav.Link>Where We Are Now</Nav.Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Nav.Link href="https://docs.google.com/forms/d/1ymGkcekuWk_1SPl0r6lp9uleQKGbHE6dTx4aY1jrNT0/edit">
            Tipline
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  & {
    .navbar {
      .navbar-nav {
        .nav-link,
        .btn {
          color: ${props => props.theme.colors.dark};
          font-weight: bold;
          font-size: 1.25rem;
          margin-left: 1rem;
          margin-right: 1rem;
        }

        .nav-link:hover {
          color: ${props => props.theme.colors.primary};
          transition: color 0.3s;
        }
      }

      .navbar-toggler {
        border: none;
        font-size: 1.5rem;

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(30, 28, 33)' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
      }
    }
  }
`

export default Header
