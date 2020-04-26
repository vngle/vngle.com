/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"Vngle"}>
                      <img alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      Decentralized grassroots news network for news deserts.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>Vngle</h4>
                    <ul>
                      <li>
                        <Link to="/about" title={"About"}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/tipline" title={"Tipline"}>
                          Tipline
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" title={"Blog"}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a
                          className={"links__special"}
                          href={"https://www.vngle.com/"}
                          title={
                            "We look forward to receiving your great feedback"
                          }
                        >
                          Feedback
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"social"}>
                    <a href="https://twitter.com/histaffio" title={"Twitter"}>
                      <img alt={"Twitter"} src={iconTwitter} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/histaff/"
                      title={"LinkedIn"}
                    >
                      <img alt={"LinkedIn"} src={iconLinkedin} />
                    </a>
                    <a href="https://github.com/histaff" title={"GitHub"}>
                      <img alt={"GitHub"} src={iconGitHub} />
                    </a>
                    <a
                      href="https://www.instagram.com/histaff.io/"
                      title={"Instagram"}
                    >
                      <img alt={"Instagram"} src={iconInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{" "}
                <a href="/" title={"Vngle"}>
                  Vngle
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
