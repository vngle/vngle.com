import React from "react";
import { Link, graphql } from "gatsby";
import { Container, Image, Button } from "react-bootstrap";
import styled from "styled-components";
import Typed from "react-typed";
import awsvideo from "../aws-video-exports";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import Slider from "../components/Sliders/Slider";
import Grid from "../components/Grids/Grid";
import List from "../components/Grids/List";
import SubForm from "../components/Forms/SubForm";

import World from "@images/home/world.svg";


const IndexPage = ({
  data: { storiesFeatured, storiesGeorgia, storiesNational },
}) => {
  return (
    <Layout>
      <Seo title="Nonpartisan Grassroots Verified News" />

      <HeroContainer>
        <h1 className="display-4 fw-bolder text-center">
          Various Angles of
          <br />
          Verified Grassroots News
        </h1>
        <h1 className="display-4 fw-bolder text-center">
          <span className="highlight">Nonpartisan</span>
          <br />
          <span className="highlight">
            <Typed
              strings={["By the People", "For the People"]}
              typeSpeed={40}
              backDelay={5000}
              showCursor={false}
              loop
            />
          </span>
          <br />
        </h1>

        <div className="btn-container">
          <Button size="lg" href="https://vngle.typeform.com/to/zwc2R2og">
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
          {storiesFeatured.byType.items.map(({ title, caption, id, video }) => {
            return (
              <SlideThumbnail key={id}>
                <p>{caption}</p>
                <Image
                  alt={title}
                  src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                  width="100%"
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
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 0) 0%,
    rgba(33, 37, 41, 0.5) 70%,
    rgba(33, 37, 41, 0.9) 100%
  );
  color: white;
  overflow: hidden;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  transition: 0.2s;

  p {
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  img {
    position: relative;
    height: inherit;
    object-fit: cover;
    z-index: -1;
  }

  &:hover {
    border: 3px solid var(--bs-primary);
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
          caption
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
