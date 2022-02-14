import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import styled from "styled-components";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";

import VngleDef from "@images/team/vngle-def.png";
import Team from "@images/team/profiles";

const TeamPage = () => {
  const team = [
    { name: "Blake Stoner", position: "Founder & Chief Reporter" },
    { name: "Shweta Jain", position: "Research & Development" },
    { name: "Jaime Fernandez", position: "Strategic Partnerships" },
    { name: "Alex Rhodd", position: "Data & Digital Forensics" },
    { name: "Kenneth Chen", position: "Technology Lead" },
    { name: "Marcus Figueiredo", position: "Sales" },
    { name: 'Devante "Don" Griffin', position: "Special Operations" },
    { name: "Majestic Gay", position: "Collegiate Reporting Lead" },
  ].map((profile, i) => {
    return { ...profile, img: Team[i] };
  });

  return (
    <Layout>
      <Seo
        title="A Grassroots News Agency"
        description="Vngle is a decentralized grassroots news network covering pressing underrepresented verified coverage on cities across America. Our coverage is for the people, by the people."
      />

      <section className="bg-primary p-5 mb-5" as="section">
        <Container>
          <h1 className="mb-0">
            We're a tribe of grassroots strategists, technologists, and change
            makers working to combat misinformation and underrepresentation in
            America.
          </h1>
        </Container>
      </section>

      <Container as="article">
        <section>
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

          <Row className="my-4">
            <Col className="m-auto" sm>
              <h2>The concept of Vngle was born in Ferguson, Missouri</h2>
            </Col>
            <Col sm>
              <div className="ratio ratio-4x3 rounded">
                <iframe
                  src="https://www.youtube.com/embed/OrAt9NfUrmE?modestbranding=1"
                  title="Pritchett press conference"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
          <p>
            Vngle is a response to growing misinformation and
            underrepresentation that's plaguing so much of America.
          </p>
          <p>
            Our origin is rooted in grassroots work and seeing the systemic
            problems local communities face. This work started in Ferguson, MO,
            where social injustice is real but goes incredibly underreported.
            Ferguson like so many other underrepresented cities is a news
            desert, a place that gets little to no original reporting. Today,
            over 64% of America, millions of people, do not get daily original
            news on their area. These areas are where misinformation grows the
            most.
          </p>
          <p>
            <b>
              We started Vngle to address these critical issues through
              empowering communities to bring various angles verified local news
              to their area.
            </b>
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default TeamPage;

const ProfileImg = styled.img`
  border-radius: 50%;
  border: 10px solid var(--bs-primary);
`;
