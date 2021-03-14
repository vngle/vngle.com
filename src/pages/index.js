import React from "react";
import { Link } from "gatsby";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Image,
  Badge,
} from "react-bootstrap";
import styled from "styled-components";
import { graphql } from "gatsby";
import awsvideo from "../aws-video-exports";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import SimpleSubForm from "../components/SimpleSubForm";

import World from "../../static/images/landing/world.svg";

const IndexPage = ({ data: { storiesFeatured } }) => {
  return (
    <Layout>
      <SEO title="Nonpartisan Grassroots Reality News" />

      <HeroContainer>
        <h1 className="display-4 font-weight-bolder text-center">
          Various Angles of
          <br />
          Nonpartisan Reality News
        </h1>
        <h1 className="display-4 font-weight-bolder text-center">
          <span className="highlight">For the People</span>
          <br />
          <span className="highlight">By the People</span>
        </h1>

        <img src={World} alt="" className="hero-img" />
      </HeroContainer>

      <Container fluid>
        <Slider>
          {storiesFeatured.listVodAssets.items.map(({ title, id, video }) => {
            return (
              <div key={id}>
                <Image
                  alt={title}
                  src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                  width="100%"
                  className="shadow"
                  rounded
                />
              </div>
            );
          })}
        </Slider>
      </Container>

      <Jumbotron className="bg-primary py-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="mb-0 font-sans-serif text-center">
                Follow Our Stories!
              </h1>
            </Col>
            <Col>
              <SimpleSubForm />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Layout>
  );
};

const HeroContainer = styled(Container)`
  position: relative;
  margin-top: 2rem;

  .hero-img {
    width: 80%;
    position: absolute;
    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0.4;
  }
`;

export const query = graphql`
  {
    storiesFeatured: allStory {
      listVodAssets(limit: 10) {
        items {
          title
          id
          video {
            id
          }
        }
      }
    }
    storiesGeorgia: allStory {
      listVodAssets(limit: 10, filter: { tags: { contains: "georgia" } }) {
        items {
          title
          id
          video {
            id
          }
        }
      }
    }
    storiesNational: allStory {
      listVodAssets(limit: 10, filter: { tags: { contains: "usa" } }) {
        items {
          title
          id
          video {
            id
          }
        }
      }
    }
  }
`;

export default IndexPage;
