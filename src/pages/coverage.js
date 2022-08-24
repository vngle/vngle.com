import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import StorySlider from "../components/Sliders/StoryCarousel";
import ActionCard from "@components/Cards/ActionCard";
import NewsSubCard from "../components/Cards/NewsSubCard";
import Grid from "../components/Grids/Grid";
import List from "../components/Grids/List";
import { Link, graphql } from "gatsby";
import VngleVid from "@images/Vngle.mp4";
import SinContainer from "@components/Containers/SingleContainer";
import TopButton from "@components/BackToTop";

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

const actionCardData = [
  {
    title: "I need coverage",
    text: (
      <>
        Know a topic that's underreported near you? <br /> Text "STORY" to{" "}
        <b>(678) 995-5121</b> OR
      </>
    ),
    btn: {
      to: "https://blake680703.typeform.com/to/zwc2R2og",
      text: "Submit a Tip",
    },
  },
  {
    title: "I want to report",
    text: (
      <>
        Want to be a grassroots reporter for your community?
        <br />
        Click the button below.
      </>
    ),
    btn: {
      to: "/vnglr",
      text: "Be a Vngler",
    },
  },
];

const GeorgiaPage = ({ data: { storiesGeorgia, storiesNational } }) => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);
  return (
    <Layout>
      <Seo title="Our Coverage" />
      <Video>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="display-4 yellow-text fw-bolder background-white">
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
            <source src={VngleVid} type="video/mp4" className="login-vid" />
          </video>
        </div>
      </Video>
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

      <Seo title={`Georgia`} />

      <StyledJumbotron className="mb-5" id="Georgia">
        <CoverImage
          src="https://source.unsplash.com/tjdu7p_PaEM"
          alt="Georgia"
        />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">Georgia Stories</h1>
          </Col>
        </Row>
      </StyledJumbotron>

      <TopButton />
      {/*
      <Navbar className="sticky-top">
        <div className="sticky">
          <a className="btn btn-primary fw-bolder reveal active" href="#Top">
            Back to Top
          </a>
        </div>
      </Navbar>
      */}
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
      </Container>
      <Container>
        <Row className="card-row text-center">
          {actionCardData.map((props, i) => (
            <Col lg={6} sm={12} key={i}>
              <ActionCard {...props}>{props.text}</ActionCard>
            </Col>
          ))}
        </Row>
      </Container>
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
  padding: 10rem 0;

  .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .text-wrap {
    z-index: 10;
    display: flex;
    align-items: center;
  }

  a{
    background: #FECB3E;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    justify-content: center;
  }

  &.background-black {
    background: black;
  }
  @media (max-width: 36.25rem) {
    h2 {
      font-size: 1rem;
      padding-top: 1rem;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 7rem;
      margin-left: 0.75rem;
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

const Video = styled.div`
  position: relative;

  .content-wrapper {
    display: flex;
    position: relative;
    align-items: center;
    min-height: 50vh;
  }

  .text-wrapper {
    z-index: 10;
    margin-top: 35%;
    margin-left: 1rem;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
    padding: 1rem;
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
    border-radius: 1rem;
  }

  @media (max-width: 37rem) {
    .content-wrapper {
      min-height: 30vh;
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
