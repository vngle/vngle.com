import React, { useState } from "react"
import { Input, Button, Space, Form, Upload } from "antd"
import {
  MailOutlined,
  EnvironmentOutlined,
  InboxOutlined,
  LoadingOutlined,
} from "@ant-design/icons"
import "antd/dist/antd.css"
import Nanogram from "nanogram.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/hero.svg"

class IndexPage extends React.Component {
  state = {
    instaFeed: null,
  }

  instaParser = new Nanogram()

  componentDidMount() {
    this._asyncRequest = this.instaParser
      .getMediaByUsername("vnglestories")
      .then(instaFeed => {
        this._asyncRequest = null
        this.setState({ instaFeed })
      })
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel()
    }
  }

  render() {
    if (this.state.instaFeed === null) {
      return (
        <div className="loading">
          <LoadingOutlined />
        </div>
      )
    } else {
      return (
        <Layout>
          <SEO title="Decentralized grassroots news network for news deserts." />

          <section className={"page-header"}>
            <img alt="Logo" src={logo}></img>

            <div className={"headline"}>
              <h1>Decentralized grassroots news network for news deserts.</h1>
            </div>

            <Space direction="vertical" size="middle">
              <p>Sign up to receive grassroots news coverage</p>
              <Input
                placeholder="Email"
                prefix={<MailOutlined />}
                size="large"
              />
              <Input
                placeholder="City/Zipcode"
                prefix={<EnvironmentOutlined />}
                size="large"
              />
              <Button type="primary" size="large" shape="round" block>
                Submit
              </Button>
            </Space>
          </section>

          <section className="stories">
            <div className="header">
              <img
                alt="Profile picture of vnglestories instagram"
                src={this.state.instaFeed.profile.profile_pic_url}
                className="avatar"
              />
              <h2>@vnglestories</h2>
            </div>
            <div className="gallery">
              {this.state.instaFeed.profile.edge_owner_to_timeline_media.edges.map(
                (post, i) => (
                  <div className="post" key={i}>
                    <a
                      href={`https://www.instagram.com/p/${post.node.shortcode}`}
                    >
                      <img alt="post" src={post.node.thumbnail_src} />
                    </a>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="call-to-action">
            <div className="flex-container">
              <div className="content">
                <h1>Think something needs coverage?</h1>
                <p>
                  Request coverage upload your own content of what you believe
                  matters in your area.
                </p>
              </div>
              <div className="form">
                <Form>
                  <Form.Item>
                    <Button size="large" shape="round">
                      Request Coverage
                    </Button>
                  </Form.Item>
                  <h2>OR</h2>
                  <Form.Item name="dragger" valuePropName="fileList" noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Documents, photos, videos, etc.
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </section>
        </Layout>
      )
    }
  }
}

export default IndexPage
