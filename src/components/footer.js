import React from "react"
import { Link } from "gatsby"
import "antd/dist/antd.css"
import { Row, Col } from "antd"
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons"

import logo from "../../static/images/logo.png"

export default () => (
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
              <p>Decentralized grassroots news network for news deserts.</p>
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
                  title={"We look forward to receiving your great feedback"}
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
)
