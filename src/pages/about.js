import React from "react";
import { Container, Row, Col, Jumbotron, Figure } from "react-bootstrap";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import VngleDef from "../../static/images/about/vngle-def.png";
import Team from "../../static/images/about/profiles";

export default () => {
  const team = [
    { name: "Blake Stoner", position: "Founder & Chief Reporter" },
    { name: "Jaime Fernandez", position: "Strategy & Partnerships" },
    { name: "Matthew Ramsay", position: "Operations & Outreach" },
    { name: "Kenneth Chen", position: "Technology Lead" },
    { name: "Majestic Gay", position: "Reporter in College Park, GA" },
  ].map((profile, i) => {
    return { ...profile, img: Team[i] };
  });

  return (
    <Layout>
      <SEO
        title="A Grassroots News Network"
        description="Vngle is a decentralized grassroots news network covering pressing underrepresented reality coverage on cities across America. Our coverage is for the people, by the people."
      />

      <Jumbotron className="bg-primary" as="section">
        <Container>
          <h1 className="mb-0">
            We cover the stories you don’t hear and the perspectives you don’t
            get.
          </h1>
        </Container>
      </Jumbotron>

      <Container as="article">
        <section>
          <h2>“Various angles” on news for communities by communities.</h2>
          <p>
            Vngle is a decentralized grassroots news network bringing coverage
            to underreported parts of society. We address news deserts, areas
            that get limited to no news coverage, by capturing human-interests
            stories that go underrepresented.
          </p>
          <blockquote class="blockquote font-weight-bold font-italic font-serif text-center">
            <h2>
              “Vngle's mission is to build a more interconnected society, by
              ensuring every person in every city has diverse local coverage.”
            </h2>
          </blockquote>

          <Figure className="d-block">
            <Figure.Image
              alt="Vngle definition"
              src={VngleDef}
              className="d-block mx-auto"
            />
            <Figure.Caption className="text-center">
              Definition of Vngle
            </Figure.Caption>
          </Figure>
          <p>
            Through partnering with communities, we provide grassroots coverage
            and reporting tools to areas that have little to no daily news. Our
            grassroots reporting serves as the last mile for local coverage,
            bringing hyperlocal depth to pressing matters and supplying active
            stories with viewpoints from all sides of communities.
          </p>
          <Row className="my-4">
            <Col className="m-auto" sm>
              <h2>The concept of Vngle started in Ferguson, Missouri</h2>
            </Col>
            <Col sm>
              <div className="embed-responsive embed-responsive-4by3 rounded">
                <iframe
                  src="https://www.youtube.com/embed/OrAt9NfUrmE?modestbranding=1"
                  title="Pritchett press conference"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="embed-responsive-item"
                ></iframe>
              </div>
            </Col>
          </Row>
          <p>
            Over 64% of the United States is considered a news desert. Blake
            noticed this problem as he was registering people to vote in
            Ferguson, MO.
          </p>
          <p>
            As he went door to door, Blake began asking locals of Ferguson their
            point of view on what they thought about the city and he found many
            of their experiences shocking. They revealed stories that news
            organizations weren’t covering. Soon Blake found himself wondering
            if local communities across America were under reported on too.
          </p>
          <p>
            <b>That curiosity led to Vngle.</b>
          </p>
        </section>
        <section>
          <h1 className="text-center mb-5">Our Team</h1>
          <Row>
            {team.map((profile, i) => (
              <Col lg={4} md={6} xs={12} key={i} className="text-center mb-4">
                <h2>{profile.name}</h2>
                <p>{profile.position}</p>
                <ProfileImg
                  src={profile.img}
                  alt="Profile of team members"
                  width="100%"
                />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Layout>
  );
};

const ProfileImg = styled.img`
  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.primary};
`;
