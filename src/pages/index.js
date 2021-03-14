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

const IndexPage = ({ data: { storiesFeatured } }) => {
  return (
    <Layout>
      <SEO title="Nonpartisan Grassroots Reality News" />

      <Container fluid>
        <Slider>
          {storiesFeatured.listVodAssets.items.map(({ title, id, video }) => {
            return (
              <div key={id}>
                <img
                  alt={title}
                  src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                  width="100%"
                  className="shadow"
                />
              </div>
            );
          })}
        </Slider>
      </Container>
    </Layout>
  );
};

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
