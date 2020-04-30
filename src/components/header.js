import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"logo"}>
      <Link to="/" title={siteTitle}>
        <img alt={"Logo"} src={logo} />
      </Link>
    </div>
    <nav>
      <a
        href="https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true"
        className="join-us"
      >
        Join Us
      </a>
      <Link to="/about">About</Link>
      <a href="https://docs.google.com/forms/d/1ymGkcekuWk_1SPl0r6lp9uleQKGbHE6dTx4aY1jrNT0/edit">
        Tipline
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
