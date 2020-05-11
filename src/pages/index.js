import React, { useState, useEffect } from "react"
import { Jumbotron, Container, Card, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Nanogram from "nanogram.js"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Layout from "../components/layout"
import NewsSubForm from "../components/newsSubForm"
import SEO from "../components/seo"
import HeroImg from "../static/images/hero.svg"
import MozillaLogo from "../static/images/mozilla.png"
import ColumbiaLogo from "../static/images/columbia-tamer.png"
import GoodieNationLogo from "../static/images/goodie-nation.png"

const IndexPage = () => {
  const [instaFeed, setInstaFeed] = useState(null)

  useEffect(() => {
    const fetchInstaFeed = async () => {
      const instaParser = new Nanogram()
      const response = await instaParser.getMediaByUsername("vnglestories")

      setInstaFeed(response)
    }

    fetchInstaFeed()
  }, [])

  if (instaFeed === null) {
    return <div className="loading">LOADING</div>
  } else {
    return (
      <Layout>
        <SEO title="Decentralized grassroots news network for news deserts." />

        <Jumbotron className="bg-primary rounded-0" as="section">
          <HeroContainer>
            <h1 className="text-center">
              A decentralized grassroots news network for news deserts.
            </h1>
            <Row>
              <Col className="text-center" lg md sm>
                <img alt="Man reading newspaper" src={HeroImg}></img>
              </Col>
              <Col
                lg
                md
                sm
                className="d-flex flex-column justify-content-center"
              >
                <Card className="shadow border-0">
                  <Card.Body>
                    <Card.Title className="mb-4" as="h4">
                      Sign up for our newsletter!
                    </Card.Title>
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
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </HeroContainer>
        </Jumbotron>

        <section className="call-to-action">
          <div className="flex-container">
            <div className="content">
              <h1>Think something needs coverage?</h1>
              <p>
                Request special coverage on your city or upload your own content
                to show what's happening locally.
              </p>
            </div>
            <div className="coverage-action">
              {/* <Button size="large" shape="round">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn0-K37ukwXDy-A5KjNrvuGKAsGgbO-Aqk6i0uVllwf5SNNg/viewform">
                    Request Coverage
                  </a>
                </Button> */}

              {/* <h2>OR</h2>
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
                  </Form.Item> */}
            </div>
          </div>
        </section>

        <section className="stories container">
          <div className="header">
            <img
              alt="Instagram post"
              src={instaFeed.profile.profile_pic_url}
              className="avatar"
            />
            <h2>@vnglestories</h2>
          </div>
          <div className="gallery">
            {instaFeed.profile.edge_owner_to_timeline_media.edges.map(
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

const HeroContainer = styled(Container)`
  & {
    h1 {
      font-size: calc(9px + 4vw);
      font-weight: 900;
      margin-top: 0.7em;
      margin-bottom: 1.5em;
    }

    img {
      width: calc(100px + 25vw);
    }
  }
`

export default IndexPage
