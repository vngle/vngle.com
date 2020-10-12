import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import styled from "styled-components";
import { Disqus } from "gatsby-plugin-disqus";

import PritchettHeadshot from "../../static/images/pritchett-headshot.jpg";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import NewsSubCard from "../components/landing/NewsSubCard";
import useSiteMetadata from "../hooks/useSiteMetadata";

export default () => {
  const { siteUrl } = useSiteMetadata();
  const disqusConfig = {
    url: `${siteUrl}/pritchett`,
    identifier: "pritchett",
  };

  return (
    <Layout>
      <SEO
        title="Linda Pritchett, Candidate for GA State Senator in District 39"
        description="Grassroots coverage on Linda Pritchett’s campaign for Georgia State Senate Seat in District 39. Listen to her intimate response to the eviction and arrest during her press conference (it’s a Vngle exclusive)."
      />

      <Jumbotron className="bg-primary" as="section">
        <Container>
          <h1 className="display-3 font-weight-bold">Linda Pritchett</h1>
          <h2 className="mb-0 font-sans-serif">
            Candidate for GA State Senator in District 39
          </h2>
        </Container>
      </Jumbotron>

      <Container as="article">
        <StyledRow>
          <Col>
            <p>
              Linda Pritchett is an active member of the Fulton County
              Democratic Committee as a Post Seat Holder, and the South Metro
              Democratic Women Council. She has also been appointed to both the
              Grant Evaluation and the Community Services Committee in Fulton
              County. In 2018, she was elected to serve as a State Committee
              Member of the Democratic Party of Georgia. This year Linda serves
              as the Secretary of the Latino Caucus of the Democratic Party. She
              is a recipient of President Barack Obama's Lifetime Achievement
              Award for Service.
            </p>
            <p>
              Professionally, Linda has been a Certified Paralegal for over 15
              years and a former Life Insurance Agency Owner specializing
              Government Employee Benefits.{" "}
              <a href="https://vote4linda.com/">
                Learn more about Pritchett here
              </a>
              .
            </p>
          </Col>
          <Col
            lg={{ span: 4, offset: 1, order: "last" }}
            xs={{ span: 12, order: "first" }}
            className="mb-4"
          >
            <Image
              rounded
              src={PritchettHeadshot}
              alt="Pritchett headshot"
              width="100%"
            />
          </Col>
        </StyledRow>

        <VideoContainer>
          <h1 className="display-5">
            Pritchett's Press Conference Responding to Arrest
          </h1>
          <h2>
            Vngle covered Linda Pritchett's full press conference following her
            home eviction.
          </h2>
          <div className="embed-responsive embed-responsive-4by3 rounded">
            <iframe
              src="https://www.youtube.com/embed/QO5TmVo1lZo?autoplay=1&modestbranding=1&mute=1"
              title="Pritchett press conference"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </VideoContainer>

        <VideoContainer>
          <h1 className="display-5">
            Pritchett's Qualifying Process for GA State Senate
          </h1>
          <h2>
            Our team covered Linda's qualifying process as she officially
            entered the election.
          </h2>
          <div className="embed-responsive embed-responsive-4by3 rounded">
            <iframe
              src="https://www.youtube.com/embed/zqHwPFoz7-Y?modestbranding=1"
              title="Pritchett qualifying video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </VideoContainer>
      </Container>

      <Container>
        <div className="mb-5">
          <NewsSubCard />
        </div>
        <Disqus config={disqusConfig} />
      </Container>
    </Layout>
  );
};

const StyledRow = styled(Row)`
  margin-bottom: 5rem;
`;

const VideoContainer = styled.div`
  margin-bottom: 5rem;

  h1 {
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-weight: 300;
    font-size: 1.5rem;
    font-family: "Inter", sans-serif;
  }
`;
