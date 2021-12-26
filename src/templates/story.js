/**
 * Template page for Vngle stories
 */

import React from "react";
import { Container, Row, Col, Breadcrumb, Badge } from "react-bootstrap";
import { Disqus } from "gatsby-plugin-disqus";
import ReactPlayer from "react-player";
import { Link } from "gatsby";
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
  pageContext: { title, id, caption, src: videoUrl, tags, createdAt },
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
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Stories</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col md={8}>
            <h1 className="font-sans-serif">
              {title} <small className="text-secondary">by VngleStories</small>
            </h1>
            <p className="border-top pt-2">
              {new Date(createdAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <ReactPlayer
              url={videoUrl}
              controls
              className="ratio ratio-16x9 mb-4"
              width=""
              height=""
            />

            <p>{caption}</p>

            <div className="mb-4">
              {tags.map((tag, i) => (
                <Badge className="me-1" key={i}>
                  {tag}
                </Badge>
              ))}
            </div>

            <Disqus config={disqusConfig} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default StoryTemplate;
