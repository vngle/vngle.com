import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container, Navbar, Nav, Dropdown, Button } from "react-bootstrap"

import Logo from "../../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Navbar collapseOnSelect expand="lg" className="p-4">
      <Container>
        <Navbar.Brand>
          <Link to="/" title={siteTitle}>
            <img alt="Vngle logo" src={Logo} height="47" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end text-center">
          <Nav>
            <Nav.Item>
              <Link to="/wwan" className="nav-link" eventkey="1">
                Where We Are Now
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link" eventkey="2">
                About
              </Link>
            </Nav.Item>
            <Nav.Link href="https://medium.com/vngle" eventkey="3">
              Blog
            </Nav.Link>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Button}>Get Involved</Dropdown.Toggle>
              <Dropdown.Menu role="menu">
                <Dropdown.Item
                  role="menuitem"
                  href="http://eepurl.com/g1cJk5"
                  eventkey="4.1"
                >
                  Subscribe For Updates
                </Dropdown.Item>
                <Dropdown.Item
                  role="menuitem"
                  href="https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true"
                  eventkey="4.2"
                >
                  Report a Story
                </Dropdown.Item>
                <Dropdown.Item
                  role="menuitem"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdn0-K37ukwXDy-A5KjNrvuGKAsGgbO-Aqk6i0uVllwf5SNNg/viewform"
                  eventkey="4.3"
                >
                  Request Coverage
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
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

          .nav-link {
            padding: 0;
            margin: 0;
          }

          .nav-link:hover {
            color: ${props => props.theme.colors.dark};
            transition: color 0.3s;
          }
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
