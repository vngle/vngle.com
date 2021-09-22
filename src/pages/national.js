import React from "react";
import styled from "styled-components";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import StorySlider from "../components/StoryCarousel";
import NewsSubCard from "../components/NewsSubCard";
import InstaFeed from "../components/frontPage/InstaFeed";

const NationalPage = () => {
  return (
    <Layout>
      <Seo title={`United States`} />

      <StyledJumbotron>
        <CoverImage src="https://source.unsplash.com/1lefgZFxtBU" alt="" />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">United States</h1>
          </Col>
        </Row>
      </StyledJumbotron>

      <Container>
        <div className="mb-5">
          <StorySlider />
        </div>
        <Row className="my-5">
          <Col md={8}>
            Want to share your story with us? Schedule a time and we’ll handle
            the rest. If you want our team to come out to your community, just
            let us know via info@vngle.com
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
      </Container>

      <Container as="section" className="mt-5">
        <h1 className="display-4">
          Here's a peak into some of the latest verified stories from across the
          U.S.
        </h1>
        <InstaFeed filter={["national"]} isPreview={true} />
      </Container>
    </Layout>
  );
};

const StyledJumbotron = styled(Jumbotron)`
  position: relative;
  background-color: transparent;
  color: var(--bs-light);
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

export default NationalPage;
