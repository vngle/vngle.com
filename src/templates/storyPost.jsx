import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Disqus } from "gatsby-plugin-disqus";

import Layout from "../components/layout";
import SEO from "../components/seo";

import useSiteMetadata from "../hooks/use-site-metadata";

export default ({ pageContext: { post }, location }) => {
  const { siteUrl } = useSiteMetadata();
  const disqusConfig = {
    url: `${siteUrl}${location.pathname}`,
    identifier: post.node.id,
  };
  const caption = post.node.edge_media_to_caption.edges[0].node.text;

  return (
    <Layout>
      <SEO title="College Park" />
      <Container>
        <Row>
          <Col md={6} sm={12} className="mb-3">
            {post.node.is_video ? (
              <div className="embed-responsive embed-responsive-16by9 rounded shadow">
                <video
                  controls
                  className="embed-responsive-item"
                  poster={post.node.display_url}
                  autoPlay
                  playsInline
                >
                  <source src={post.node.video_url} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                  <track
                    src=""
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                </video>
              </div>
            ) : (
              <Image
                src={post.node.display_url}
                width="100%"
                alt={caption}
                thumbnail
                className="shadow"
              />
            )}
          </Col>
          <Col>
            <p className="mb-5">{caption}</p>

            <Disqus config={disqusConfig} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
