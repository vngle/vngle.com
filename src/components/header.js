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
    <nav className={"menu"}>
      <Link to="/about">About</Link>
      <Link to="/tipline">Tipline</Link>
      <Link to="/blog">Blog</Link>
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
