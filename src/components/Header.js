import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Container, Navbar, Nav, Dropdown, Button } from "react-bootstrap";

import Logo from "../../static/images/logo.png";
import Link from "./Link";

const Header = ({ siteTitle }) => {
  const navLinks = [
    { name: "Georgia", to: "/georgia" },
    { name: "College Park", to: "/college-park-georgia" },
    {
      name: "Jobs",
      to: "https://www.notion.so/vngle/Jobs-Vngle-cbe85d3d0e074aeda5c860629a42ad86",
    },
    { name: "About", to: "/about" },
    { name: "Our Team", to: "/team" },
    { name: "For Cities", to: "/vngleforcities" },
  ];
  const dropdownLinks = [
    { name: "Subscribe For Updates", to: "http://eepurl.com/g1cJk5" },
    {
      name: "Become a Reporter",
      to: "https://forms.gle/JuxuSvst9aJTiDAk6",
    },
    {
      name: "Request Coverage",
      to: "https://vngle.typeform.com/to/zwc2R2og",
    },
    { name: "Become an Ally", to: "/ally" },
    { name: "Submit a tip", to: "/report" },
  ];

  return (
    <StyledHeader>
      <Navbar collapseOnSelect expand="lg" className="p-4">
        <Container>
          <Navbar.Brand>
            <Link to="/" title={siteTitle}>
              <img alt="Vngle logo" src={Logo} height="70" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end text-center">
            <Nav>
              {navLinks.map((link, i) => {
                return (
                  <Nav.Item as="div" key={i} className="mx-lg-2">
                    <Link to={link.to} className="nav-link">
                      {link.name}
                    </Link>
                  </Nav.Item>
                );
              })}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Button} className="ml-lg-2">
                  Get Involved
                </Dropdown.Toggle>
                <Dropdown.Menu role="menu">
                  {dropdownLinks.map((link, i) => {
                    return (
                      <Dropdown.Item as="div" key={i} role="menu-item">
                        <Link to={link.to}>{link.name}</Link>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const StyledHeader = styled.header`
  & {
    .navbar {
      .navbar-nav {
        .nav-link,
        .btn {
          color: var(--bs-dark);
          font-weight: bold;
          font-size: 1.25rem;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: var(--bs-primary);
          transition: color 0.3s;
        }

        .dropdown-item a {
          color: var(--bs-dark);
          text-decoration: none;
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
`;

export default Header;
