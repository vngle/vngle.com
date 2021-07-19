import React from "react";
import { Container, Row, Col, Jumbotron, Figure } from "react-bootstrap";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import InstaFeed from "../components/frontPage/InstaFeed";

import Wwan from "../../static/images/wwan.png";

const citiesTraveled = [
  "Atlanta, GA",
  "College Park, GA",
  "Savannah, GA",
  "Louisville, KY",
  "New York, NY",
  "Syracuse, NY",
  "Los Angeles, CA",
  "San Francisco, CA",
  "Oakland, CA",
  "Las Vegas, NV",
  "Boulder, CO",
  "Denver, CO",
  "Honolulu, HI",
  "Aberdeen, MS",
  "Jackson, MS",
  "Charlotte, NC",
  "Washington D.C.",
  "Chattanooga, TN",
  "Memphis, TN",
  "New Orleans, LA",
  "U.S. Virgin Islands (St Croix/St Thomas)",
  "San Juan, Puerto Rico",
];

const WwanPage = () => (
  <Layout>
    <Seo
      title="Where We Are Now Series"
      description="Where We Are Now is Vngle’s traveling series uncovering how America’s culture is changing from coast to coast. Let us know your thoughts on where we should go next."
    />

    <Jumbotron className="bg-primary" as="section">
      <Container>
        <h1 className="mb-0">
          <em>Where We Are Now</em> is our nonpartisan grassroots documentary
          series to understand the state of America from cross cultural
          perspectives across the country. The research done through it, helps
          bring needed coverage to underrepresented parts of America.
        </h1>
      </Container>
    </Jumbotron>

    <section>
      <Container>
        <Figure className="d-block mb-5">
          <Figure.Image
            alt="Where we are now poster"
            src={Wwan}
            width="50%"
            className="d-block mx-auto"
          />
        </Figure>
      </Container>

      <Container as="article" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <InstaFeed filter={["wwan"]} />
          </Col>
          <Col>
            <h2 className="mb-4">Cities we've traveled to thus far:</h2>
            <Row>
              {citiesTraveled.map(city => (
                <Col key={city} lg={3} md={4} sm={6} className="mb-4">
                  <p>
                    <em>{city}</em>
                  </p>
                </Col>
              ))}
            </Row>
            <p>
              Today, the United States of America is in a new era of
              polarization. There is much debate over national issues, but a
              lesser focus on the reality of local affairs within different
              communities. Because of that, many regional concerns are
              overlooked and buried by constant media buzz. The truth is,
              America is only as great as the lump sum of all its parts. To
              understand America holistically, it must be viewed through
              "various angles" from across the nation.
            </p>
            <p>
              Through <strong>Where We Are Now</strong> we are exploring the
              current state of America from regional and local points of view.
              This initiative will feature current perspectives in cities across
              the nation while highlighting details on how far we’ve come as a
              nation and how far we still have to go. The intent is to create an
              impartial production that gives common consideration to the
              conditions of communities across America while serving as a beacon
              for collective conversation.
            </p>
            <p>
              <strong>
                Keep up with <u>Where We Are Now</u> by following @VngleStories
                on{" "}
                <a href="https://www.instagram.com/vnglestories/">Instagram</a>,{" "}
                <a href="https://www.facebook.com/vnglestories/">Facebook</a>,{" "}
                <a href="https://www.linkedin.com/company/vngle/">Linkedin</a>,
                & <a href="https://twitter.com/vnglestories">Twitter</a>.
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);

export default WwanPage;
