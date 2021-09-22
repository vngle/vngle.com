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
    { name: "Carley Deardorff", position: "Communication Strategist" },
    { name: "Jaime Fernandez", position: "Strategic Partnerships" },
    { name: "Majestic Gay", position: "Collegiate Reporting Lead" },
    { name: "Marcus Figueiredo", position: "Sales" },
    { name: "Kenneth Chen", position: "Front End Developer" },
    { name: 'Devante "Don" Griffin', position: "Special Operations" },
  ].map((profile, i) => {
    return { ...profile, img: Team[i] };
  });

  return (
    <Layout>
      <Seo
        title="A Grassroots News Network"
        description="Vngle is a decentralized grassroots news network covering pressing underrepresented verified coverage on cities across America. Our coverage is for the people, by the people."
      />

      <section className="bg-primary p-5 mb-5" as="section">
        <Container>
          <h1 className="mb-0">
            Through capturing various angles on cities, we’re creating balanced
            nonpartisan narratives, and more verifiable insights into what’s
            happening across them.
          </h1>
        </Container>
      </section>

      <Container as="article">
        <section>
          <p>
            <b>
              Vngle stands for “various angles”, and it’s a nonpartisan
              grassroots verified news network bringing coverage to
              underrepresented parts of society. We address news deserts, areas
              that get little to no daily or fair news coverage, by capturing
              human-interest stories from all angles.
            </b>{" "}
            Our grassroots reporting serves as the last mile for curating
            diverse local news for cities.
          </p>
          <blockquote className="blockquote fw-bold font-italic font-serif text-center">
            <h2>
              “Vngle's mission is to help build a more interconnected society,
              by connecting every person with diverse comprehensive coverage on
              what’s happening around them.”
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
            Over 64% of the United States is considered a news desert, and Blake
            Stoner noticed this problem as he was registering people to vote in
            Ferguson, MO.
          </p>
          <p>
            As he went door to door, he learned what was happening across the
            city from local perspectives, and realized so many of their
            experiences were shockingly going unreported. That collective gap
            revealed to Blake that many pressing stories across America are not
            being properly covered from all sides.
          </p>
          <p>
            <b>That inspired Blake to start Vngle.</b>
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

export default TeamPage;

const ProfileImg = styled.img`
  border-radius: 50%;
  border: 10px solid var(--bs-primary);
`;
