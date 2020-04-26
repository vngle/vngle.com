/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import { Row, Col } from "antd"
import {
  GithubOutlined,
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons"
import "antd/dist/antd.css"

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
            <Row gutter={16}>
              <Col span={8}>
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
              </Col>

              <Col span={8}>
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
              </Col>

              <Col span={8}>
                <div className={"social"}>
                  <a>
                    <FacebookFilled />
                  </a>
                  <a>
                    <TwitterOutlined />
                  </a>
                  <a>
                    <InstagramOutlined />
                  </a>
                </div>
              </Col>
            </Row>

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
