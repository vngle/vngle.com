import React from "react"
import { Button, Form, Upload } from "antd"
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"
import Nanogram from "nanogram.js"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Layout from "../components/layout"
import NewsSubForm from "../components/newsSubForm"
import SEO from "../components/seo"
import logo from "../../static/images/hero.svg"
import MozillaLogo from "../../static/images/mozilla.png"
import ColumbiaLogo from "../../static/images/columbia-tamer.png"
import GoodieNationLogo from "../../static/images/goodie-nation.png"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      instaFeed: null,
    }
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

          <section className="page-header">
            <div className="container">
              <img alt="Logo" src={logo}></img>

              <div className={"headline"}>
                <h1>
                  A decentralized grassroots news network for news deserts.
                </h1>
              </div>
              <MailchimpSubscribe
                url={process.env.GATSBY_MAILCHIMP_URL}
                render={({ subscribe, status, message }) => (
                  <NewsSubForm
                    status={status}
                    message={message}
                    onSubmitted={formData => subscribe(formData)}
                  />
                )}
              />
            </div>
          </section>

          <section className="stories container">
            <div className="header">
              <img
                alt="Instagram post"
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
                  Request special coverage on your city or upload your own
                  content to show what's happening locally.
                </p>
              </div>
              <div className="coverage-action">
                <Form>
                  <Form.Item>
                    <Button size="large" shape="round">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn0-K37ukwXDy-A5KjNrvuGKAsGgbO-Aqk6i0uVllwf5SNNg/viewform">
                        Request Coverage
                      </a>
                    </Button>
                  </Form.Item>
                  <h2>OR</h2>
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    className="dragger"
                  >
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

          <section className="worked-with">
            <h1>Who We've Worked With</h1>
            <div className="flex-container">
              <a href="https://www.mozilla.org">
                <img alt="Mozilla logo" src={MozillaLogo} />
              </a>
              <a href="https://www8.gsb.columbia.edu/socialenterprise/">
                <img alt="Columbia Tamer Center logo" src={ColumbiaLogo} />
              </a>
              <a href="https://goodienation.org/">
                <img alt="Goodie Nation logo" src={GoodieNationLogo} />
              </a>
            </div>
          </section>
        </Layout>
      )
    }
  }
}

export default IndexPage
