import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import StorySlider from "../components/Sliders/StoryCarousel";

import NewsSubCard from "../components/Cards/NewsSubCard";
import Grid from "../components/Grids/Grid";
import List from "../components/Grids/List";
import { Link, graphql } from "gatsby";
import SinContainer from "@components/Containers/SingleContainer";

import DroneVideo from "../images/cover/drone.mp4";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 500;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const GeorgiaPage = ({ data: { storiesGeorgia, storiesNational } }) => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <Layout>
      <Seo title="Our Coverage" />

      <Header>
        <div className="content-wrapper">
          <div className="text-wrapper d-flex">
            <h1 className="display-2 font-sans-serif fw-bolder text-light">
              Our Coverage
            </h1>
          </div>
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            className="login-video"
          >
            <source src={DroneVideo} type="video/mp4" className="login-vid" />
            <track kind="captions" />
          </video>
        </div>

        <Container>
          <h1 className="display-2 font-sans-serif fw-bolder text-light">
            Our Coverage
          </h1>
        </Container>
      </Header>

      {/* --------------------Based In Georgia--------------------*/}
      <SinContainer
        title="We are Based in Georgia, but Our Work Reaches Nationally"
        titleColor={"white"}
        bgColor={"black"}
      />
      {/* --------------------Navbar--------------------*/}
      <Navbar>
        <nav className="navbar navbar-expand-lg navbar-light" id="Top">
          <li className="nav-item rounded">
            <a className="display-3" href="#Georgia">
              Georgia
            </a>
          </li>
          <li className="nav-item rounded">
            <a className="display-3" href="#National">
              National
            </a>
          </li>
        </nav>
      </Navbar>

      {/* --------------------Slider--------------------*/}
      <Container className="mt-4">
        <div className="mb-5">
          <StorySlider fetchNum={50} interval={10000} hashTags={["Georgia"]} />
        </div>
      </Container>

      {/* --------------------Stay Updated--------------------*/}
      <Container>
        <NewsSubCard
          title="Stay Updated And Follow Our Movement."
          subtitle="Sign up for balanced coverage on everything from local campaigns, state politics, to COVID-19 updates."
        />
      </Container>

      {/* --------------------Georgia Title--------------------*/}

      <StyledJumbotron className="mb-5" id="Georgia">
        <CoverImage
          src="https://images.unsplash.com/photo-1504983376254-592a0ea9b0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80"
          alt="Georgia"
        />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">Georgia Stories</h1>
          </Col>
        </Row>
      </StyledJumbotron>

      <Navbar className="sticky-top">
        <div className="sticky">
          <a className="btn btn-primary fw-bolder reveal active" href="#Top">
            Back to Top
          </a>
        </div>
      </Navbar>

      {/* --------------------Georgia Stories--------------------*/}
      <Container>
        <div className="mb-5">
          <Grid items={storiesGeorgia.byType.items} />
          <div className="text-center">
            <Button as={Link} to="/georgia" size="lg" className="">
              See more
            </Button>
          </div>
        </div>
      </Container>
      {/* --------------------National Title--------------------*/}
      <StyledJumbotron className="mb-5" id="National">
        <CoverImage
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">National Stories</h1>
          </Col>
        </Row>
      </StyledJumbotron>

      <Container>
        {/* --------------------National Stories--------------------*/}
        <div>
          <List items={storiesNational.byType.items} />
        </div>

        <Header>
          <Container>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf80FHwD9CVDZK954uUQ_-_0nkMvBGYT1vZ6nHvXsD12H7fDg/viewform"
              target="blank"
              className="display-3 text-black"
            >
              Work With Us Today!
            </a>
          </Container>
        </Header>
      </Container>
    </Layout>
  );
};

const StyledJumbotron = styled.div`
  margin-top: 2rem;
  position: relative;
  background-color: transparent;
  color: var(--bs-light);
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 0) 0%,
    rgba(33, 37, 41, 0.3) 50%,
    rgba(33, 37, 41, 0.9) 100%
  );
  padding-top: 9rem;
  padding-bottom: 2rem;

  h1 {
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
  }

  h4 {
    font-family: Inter, sans-serif;
  }

  .row {
    align-items: center;
  }
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Header = styled.div`
  position: relative;

  .content-wrapper {
    display: flex;
    position: relative;
    align-items: center;
    min-height: 50vh;
  }

  .text-wrapper {
    z-index: 10;
    background: rgba(0, 0, 0, 0.6);
    padding: 2rem;
  }

  .login-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    object-fit: cover;
  }

  .yellow-text {
    color: #ffcc35;
  }

  h1 {
    margin-bottom: 0;
  }

  @media (max-width: 37rem) {
    h1 {
      font-size: 1rem;
    }
    .content-wrapper {
      min-height: 30vh;
    }
  }
`;

const Navbar = styled.nav`
  margin-top: 2rem;

  nav {
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
    background: var(--bs-primary);
    padding: 1rem;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .reveal {
    opacity: 0;
  }
  .reveal.active {
    opacity: 1;
  }

  @media (max-width: 28rem) {
    a {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
    .sticky > a {
      font-size: 1rem;
    }
  }
`;

export const query = graphql`
  {
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

export default GeorgiaPage;
