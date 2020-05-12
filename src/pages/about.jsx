import React from "react"
import { Container, Row, Col, Jumbotron, Figure } from "react-bootstrap"

import Layout from "../components/layout"
import VngleDef from "../static/images/vngle-def.png"
import Blake from "../static/images/blake-portrait.png"

export default () => (
  <Layout>
    <Jumbotron className="bg-primary rounded-0" as="section">
      <Container>
        <h1>About Us</h1>
      </Container>
    </Jumbotron>
    <Container as="article">
      <h2>“Various angles” on news for communities by communities.</h2>
      <p>
        Vngle is a decentralized grassroots news network bringing coverage to
        underreported parts of society. We address news deserts, areas that get
        limited to no news coverage, by capturing human-interests stories that
        go underrepresented.
      </p>
      <Figure className="m-auto">
        <Figure.Image alt="Vngle definition" src={VngleDef} />
        <Figure.Caption>Definition of Vngle</Figure.Caption>
      </Figure>
      <p>
        Through partnering with communities, we provide grassroots coverage and
        reporting tools to areas that have little to no daily news. Our
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
      <img />
      <p>
        There’s 3,143 counties in the United States and over 2,000 are
        considered news deserts. Blake noticed this problem as he was
        registering people to vote in Ferguson, MO.
      </p>
      <p>
        As he went door to door, Blake began asking locals of Ferguson their
        point of view on what they thought about the city and he found many of
        their experiences shocking. They revealed stories that news
        organizations weren’t covering. Soon Blake found himself wondering if
        local communities across America were under reported on too.
      </p>
      <h2>That curiosity led to Vngle.</h2>
    </Container>
  </Layout>
)
