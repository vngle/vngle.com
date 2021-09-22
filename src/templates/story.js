/**
 * Template page for Vngle stories
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Disqus } from "gatsby-plugin-disqus";
import ReactPlayer from "react-player";
import "styled-components/macro";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";

import useSiteMetadata from "../hooks/useSiteMetadata";

/**
 *
 * @param {object} pageContext Data about page passed from createPage() function
 * @param {object} location URL location info of this page
 */
const StoryTemplate = ({
  pageContext: { title, author, id, caption, video, src },
  location,
}) => {
  const { siteUrl } = useSiteMetadata();

  // configure Disqus to enable public commenting and engagement
  const disqusConfig = {
    url: `${siteUrl}${location.pathname}`,
    identifier: id,
  };

  return (
    <Layout>
      <Seo title={title} />
      <Container>
        <Row>
          <Col>
            <p
              css={`
                font-weight: 500;
              `}
            >
              {caption}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} className="mb-3 mx-auto">
            <ReactPlayer url={src} controls width="100" height="100%" />
          </Col>

          {/* {mediaContent.map(content => {
            let mediaElement;

            if (content.file.contentType.includes("image")) {
              mediaElement = (
                <Image
                  src={content.fixed.src}
                  width="100%"
                  alt="Media content of a story"
                  rounded
                  className="shadow"
                />
              );
            } else if (content.file.contentType.includes("video")) {
              mediaElement = (
                <div className="embed-responsive embed-responsive-16by9 rounded shadow">
                  <video
                    controls
                    className="embed-responsive-item"
                    autoPlay
                    playsInline
                  >
                    <source
                      src={content.file.url}
                      type={content.file.contentType}
                    />
                    Sorry, your browser doesn't support embedded videos.
                    <track
                      src=""
                      kind="captions"
                      srcLang="en"
                      label="english_captions"
                    />
                  </video>
                </div>
              );
            } else {
              mediaElement = (
                <audio>
                  <track
                    src=""
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                </audio>
              );
            }

            return (
              <Col xs={12} sm={6} className="mb-3 mx-auto" key={content.id}>
                {mediaElement}
              </Col>
            );
          })} */}
        </Row>
        <Row>
          <Col>
            <Disqus config={disqusConfig} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default StoryTemplate;
