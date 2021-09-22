import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { Disqus } from "gatsby-plugin-disqus";

import PritchettHeadshot from "../images/pritchett-campaign/headshot.jpg";

import Layout from "@components/Layouts/MainLayout";
import Seo from "@components/Seo";
import NewsSubCard from "@components/NewsSubCard";
import useSiteMetadata from "@hooks/useSiteMetadata";

export default function PritchettCampaignPage() {
  const { siteUrl } = useSiteMetadata();
  const disqusConfig = {
    url: `${siteUrl}/pritchett`,
    identifier: "pritchett",
  };

  return (
    <Layout>
      <Seo
        title="Linda Pritchett, Candidate for GA State Senator in District 39"
        description="Grassroots coverage on Linda Pritchett’s campaign for Georgia State Senate Seat in District 39. Listen to her intimate response to the eviction and arrest during her press conference (it’s a Vngle exclusive)."
      />

      <section className="bg-primary p-5 mb-5">
        <Container>
          <h1 className="display-3 fw-bold">Linda Pritchett</h1>
          <h2 className="mb-0 font-sans-serif">
            Candidate for GA State Senator in District 39
          </h2>
        </Container>
      </section>

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
            Linda Pritchett is endorsed by Bernie Sanders's Political Revolution
            (Runoff on Dec 1st)
          </h1>
          <h2>
            Bernie Sanders's organization Our Revolution has endorsed Linda
            Pritchett for the December 1st runoff for Georgia's State Senate
            seat in District 39.
          </h2>
          <div className="ratio ratio-4x3 rounded">
            <iframe
              src="https://www.youtube.com/embed/9CyDI9wfFZs?autoplay=1&modestbranding=1&mute=1"
              title="Pritchett press conference"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </VideoContainer>

        <VideoContainer>
          <h1 className="display-5">
            Georgia Voter Suppression in State Senate Runoff
          </h1>
          <h2>
            Georgia voters have to use 2 machines to vote for the remainder of
            John Lewis's term & State Senate in District 39.
          </h2>
          <div className="ratio ratio-4x3 rounded">
            <iframe
              src="https://www.youtube.com/embed/V1f6nbrk6wg?autoplay=1&modestbranding=1&mute=1"
              title="Pritchett press conference"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </VideoContainer>

        <VideoContainer>
          <h1 className="display-5">
            Linda Pritchett built the bus stops on Old National Highway
          </h1>
          <h2>
            Who built the new Marta benches that go down Old National Highway?
            It was Linda Becquer Pritchett, candidate for GA Senate District 39.
          </h2>
          <div className="ratio ratio-4x3 rounded">
            <iframe
              src="https://www.youtube.com/embed/Na-4vCeJBpE?autoplay=1&modestbranding=1&mute=1"
              title="Pritchett press conference"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </VideoContainer>

        <VideoContainer>
          <h1 className="display-5">
            Pritchett: Vine City had gone neglected for far too long
          </h1>
          <h2>
            Linda Pritchett says as State Senator of District 39 she will focus
            on revitalizing areas like these. Check out our full coverage on her
            campaign here: Vngle.com/Pritchett
          </h2>
          <div className="ratio ratio-4x3 rounded">
            <iframe
              src="https://www.youtube.com/embed/si_qBCdJgt8?autoplay=1&modestbranding=1&mute=1"
              title="Pritchett press conference"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </VideoContainer>

        <VideoContainer>
          <h1 className="display-5">
            Pritchett's Press Conference Responding to Arrest
          </h1>
          <h2>
            Vngle covered Linda Pritchett's full press conference following her
            home eviction.
          </h2>
          <div className="ratio ratio-4x3 rounded">
            <iframe
              src="https://www.youtube.com/embed/QO5TmVo1lZo?autoplay=1&modestbranding=1&mute=1"
              title="Pritchett press conference"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
          <div className="ratio ratio-4x3 rounded">
            <iframe
              src="https://www.youtube.com/embed/zqHwPFoz7-Y?modestbranding=1"
              title="Pritchett qualifying video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
}

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
