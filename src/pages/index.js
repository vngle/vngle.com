import React from "react";
import { Link } from "gatsby";
import { Container, Image, Button } from "react-bootstrap";
import styled from "styled-components";
import { graphql } from "gatsby";
import awsvideo from "../aws-video-exports";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import Grid from "../components/Grid";
import List from "../components/List";
import SubForm from "../components/SubForm";

import World from "../../static/images/landing/world.svg";

const IndexPage = ({
  data: { storiesFeatured, storiesGeorgia, storiesNational },
}) => {
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

        <div className="btn-container">
          <Button size="lg" href="https://blake680703.typeform.com/to/zwc2R2og">
            Request a story
          </Button>
          <Button
            size="lg"
            href="https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true"
          >
            Report a story
          </Button>
        </div>

        <img src={World} alt="" className="hero-img" />
      </HeroContainer>

      <Container fluid>
        <Slider>
          {storiesFeatured.byType.items.map(({ title, id, video }) => {
            return (
              <SlideThumbnail key={id}>
                <Image
                  alt={title}
                  src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                  width="100%"
                  className="shadow"
                  rounded
                />
                <Link to={`/stories/${id}`} className="stretched-link" />
              </SlideThumbnail>
            );
          })}
        </Slider>
      </Container>

      <SubForm />

      <Container>
        <div className="mb-5">
          <FeedTitle>Georgia Stories</FeedTitle>
          <Grid items={storiesGeorgia.byType.items} />
          <div className="text-center">
            <Button as={Link} to="/georgia" size="lg" className="">
              See more
            </Button>
          </div>
        </div>

        <div>
          <FeedTitle>National Stories</FeedTitle>
          <List items={storiesNational.byType.items} />
        </div>
      </Container>
    </Layout>
  );
};

const HeroContainer = styled(Container)`
  position: relative;
  margin-top: 2rem;

  .btn-container {
    text-align: center;

    .btn {
      border-radius: 50px;
      margin-bottom: 1rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

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
    opacity: 0.2;
  }
`;

const SlideThumbnail = styled.div`
  height: 100%;

  img {
    height: inherit;
    object-fit: cover;
  }
`;

const FeedTitle = styled.h1`
  font-family: Inter, sans-serif;
  text-align: center;
  font-size: 4rem;
`;

export const query = graphql`
  {
    storiesFeatured: allStory {
      byType(
        type: "Story"
        sortDirection: DESC
        filter: { tags: { contains: "featured" } }
      ) {
        items {
          title
          id
          createdAt
          video {
            id
          }
        }
      }
    }
    storiesGeorgia: allStory {
      byType(
        type: "Story"
        sortDirection: DESC
        limit: 10
        filter: { tags: { contains: "georgia" } }
      ) {
        items {
          title
          id
          createdAt
          video {
            id
          }
        }
      }
    }
    storiesNational: allStory {
      byType(
        type: "Story"
        limit: 20
        sortDirection: DESC
        filter: { tags: { contains: "usa" } }
      ) {
        items {
          title
          id
          createdAt
          video {
            id
          }
        }
      }
    }
  }
`;

export default IndexPage;
