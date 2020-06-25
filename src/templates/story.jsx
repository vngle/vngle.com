import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Disqus } from "gatsby-plugin-disqus"

import Layout from "../components/layout"
import SEO from "../components/seo"

import useSiteMetadata from "../hooks/use-site-metadata"

export default ({ pageContext: { story }, location }) => {
  const { siteUrl } = useSiteMetadata()
  const disqusConfig = {
    url: `${siteUrl}${location.pathname}`,
    identifier: story.id,
  }

  return (
    <Layout>
      <SEO title="College Park" />
      <Container>
        <Row>
          {story.mediaContent.map(content => {
            let mediaElement

            if (content.file.contentType.includes("image/")) {
              mediaElement = (
                <Image
                  src={content.fixed.src}
                  width="100%"
                  alt="Media content of a story"
                  rounded
                  className="shadow"
                />
              )
            } else if (content.file.contentType.includes("video/")) {
              mediaElement = (
                <div className="embed-responsive embed-responsive-16by9 rounded shadow">
                  <video
                    controls
                    className="embed-responsive-item"
                    autoPlay
                    playsInline
                  >
                    <source type={content.file.contentType} />
                    Sorry, your browser doesn't support embedded videos.
                    <track
                      src=""
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                </div>
              )
            } else {
              mediaElement = (
                <audio>
                  <track />
                </audio>
              )
            }
            return (
              <Col xs={12} sm={6} lg={4} className="mb-3" key={content.id}>
                {mediaElement}
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col>
            <p className="mb-5">{story.caption.caption}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Disqus config={disqusConfig} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}