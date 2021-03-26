import React from "react";
import styled from "styled-components";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import StorySlider from "../components/StoryCarousel";
import NewsSubCard from "../components/NewsSubCard";
import InstaFeed from "../components/frontPage/InstaFeed";

import GaFlag from "../../static/images/landing/ga-flag.svg";

const GeorgiaPage = () => {
  return (
    <Layout>
      <SEO title={`Georgia`} />

      <StyledJumbotron>
        <CoverImage src="https://source.unsplash.com/tjdu7p_PaEM" alt="" />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">Georgia</h1>
          </Col>
        </Row>
      </StyledJumbotron>

      <Container>
        <div className="mb-5">
          <StorySlider fetchNum={50} interval={10000} hashTags={["Georgia"]} />
        </div>
        <Row className="my-5">
          <Col md={8}>
            Want to share your story with us? Schedule your a time and we’ll
            handle the rest. If you want our team to come out to your community,
            just let us know via info@vngle.com
          </Col>
          <Col>
            <Button size="lg" href="https://calendly.com/vngle/georgia">
              Sign Up
            </Button>
          </Col>
        </Row>
        <NewsSubCard
          title="Get the nonpartisan pulse on what's going on near you."
          subtitle="Sign up for balanced coverage on everything from local campaigns, state politics, to COVID-19 updates."
        />
        <img
          src={GaFlag}
          alt=""
          width="60%"
          className="shadow my-5 d-block mx-auto"
        />
      </Container>

      <Container as="section" className="mt-5">
        <h1 className="display-4">
          Here's a peak into some of the latest reality stories from across
          Georgia
        </h1>
        <InstaFeed filter={["georgia"]} isPreview={true} />
      </Container>
    </Layout>
  );
};

const StyledJumbotron = styled(Jumbotron)`
  position: relative;
  background-color: transparent;
  color: var(--light);
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 0) 0%,
    rgba(33, 37, 41, 0.3) 50%,
    rgba(33, 37, 41, 0.9) 100%
  );
  padding-top: 9rem;
  padding-bottom: 2rem;

  h1 {
    font-weight: 800;
    text-align: center;
  }

  h4 {
    font-family: Inter, sans-serif;
  }

  .row {
    align-items: center;
  }
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export default GeorgiaPage;
