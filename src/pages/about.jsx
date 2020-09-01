import React from "react"
import { Container, Row, Col, Jumbotron, Figure } from "react-bootstrap"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import VngleDef from "../../static/images/about/vngle-def.png"
import Blake from "../../static/images/about/blake-portrait.png"
import Team from "../../static/images/about/profiles"

export default () => {
  const team = [
    { name: "Blake Stoner", position: "Founder & Chief Reporter" },
    { name: "Jaime Fernandez", position: "Strategy & Partnerships" },
    { name: "Matthew Ramsay", position: "Operations & Outreach" },
    { name: "Kenneth Chen", position: "Technology Lead" },
  ].map((profile, i) => {
    return { ...profile, img: Team[i] }
  })

  return (
    <Layout>
      <SEO title="About Us" />

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
          <blockquote class="blockquote">
            <p>
              “Vngle's mission is to build a more interconnected society, by
              ensuring every person in every city has diverse local coverage.”
            </p>
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
          <Row className="pt-4">
            <Col className="m-auto" sm>
              <h2>We ensure all communities get proper representation</h2>
              <p>It all started with this guy:</p>
            </Col>
            <Col sm>
              <Figure>
                <Figure.Image
                  src={Blake}
                  alt="Portrait of founder Blake Stoner"
                  width={400}
                />
              </Figure>
            </Col>
          </Row>
          <p>
            There’s 3,143 counties in the United States and over 2,000 are
            considered news deserts. Blake noticed this problem as he was
            registering people to vote in Ferguson, MO.
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
  )
}

const ProfileImg = styled.img`
  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.primary};
`
