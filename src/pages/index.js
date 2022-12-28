import React from "react";
import { Link, graphql } from "gatsby";
import { Container, Image, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typed from "react-typed";
import awsvideo from "../aws-video-exports";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import Slider from "../components/Sliders/Slider";
import Grid from "../components/Grids/Grid";
import SubForm from "../components/Forms/SubForm";
import Sub from "../components/Forms/Sub";
import NewBanner from "../components/Banner";
import NewContainer from "../components/Containers/SingleContainer";

import World from "@images/home/world.svg";
import MitGif from "@images/home/mit.gif";

const IndexPage = ({ data: { storiesFeatured, storiesGeorgia } }) => {
  return (
    <Layout>
      <Seo title="Nonpartisan Grassroots Verified News" />

      <HeroContainer className="main-banner text-center">
        <Fade bottom>
          <h1 className="display-4 fw-bolder">
            Amplifying Various Angles
            <br />
            of Grassroots Coverage
          </h1>
        </Fade>

        <p className="font-sans-serif h5">
          <span>&mdash;</span> News and Media Services to Empower Communities
          Everywhere <span>&mdash;</span>
        </p>

        <h2 className="display-4 fw-bolder">
          <span className="highlight">
            Nonpartisan{" "}
            <Typed
              strings={["By the People", "For the People"]}
              typeSpeed={20}
              backDelay={5000}
              showCursor={false}
              loop
            />
          </span>
          <br />
        </h2>
        <img src={World} alt="" className="hero-img" />
      </HeroContainer>

      <Container fluid>
        <NewBanner
          paragraph="Capture your story with our award-winning content services"
          buttonText="CONTACT US"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSf80FHwD9CVDZK954uUQ_-_0nkMvBGYT1vZ6nHvXsD12H7fDg/viewform"
          bgColor="var(--bs-primary)"
        />

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

        <SubForm />

        <NewContainer
          title="We boost equitable local representation across cities:"
          titleColor="white"
          paragraph="Aiding Newsrooms, Brands, Institutions & more in expanding their
        coverage capabilities through Grassroots Content Partnerships."
          bgColor="#222"
        />
      </Container>

      <Container>
        <h1 className="my-5 display-3 font-sans-serif text-center fw-bolder">
          How we can advance your operation
        </h1>

        <MainPageContainer>
          <SplitSection background="var(--bs-primary)" className="gy-3">
            <Col className="image" md={6}>
              <Fade left>
                <StaticImage
                  src="../images/services/newswire.png"
                  alt="City with networks on top"
                />
              </Fade>
            </Col>
            <Col md={6}>
              <Fade right>
                <div className="content p-md-5">
                  <p className="sup">Grassroots Newswire</p>
                  <Heading>
                    Expand your coverage with our visual catalog of local
                    nonpartisan insights.
                  </Heading>
                </div>
              </Fade>
            </Col>
          </SplitSection>

          <SplitSection background="#3cf" className="section2 gy-3">
            <Col md={6}>
              <Fade left>
                <div className="content p-md-5">
                  <p className="sup">Creative Content Services</p>
                  <Heading>
                    End-to-end curated custom content campaigns that connect
                    with local audiences in meaningful ways.
                  </Heading>
                  <a href="https://forms.gle/e6y4Gkna5S9kymdE8">
                    <motion.button
                      className="btn animated-button"
                      whileHover={{ scale: 1.1 }}
                      size="lg"
                      variant="light"
                    >
                      Launch your campaign
                    </motion.button>
                  </a>
                </div>
              </Fade>
            </Col>
            <Col className="image" md={6}>
              <Fade right>
                <StaticImage
                  src="../images/services/sic.png"
                  alt="Hand holding mics"
                />
              </Fade>
            </Col>
          </SplitSection>

          <SplitSection background="#ff52db" className="section2 gy-3">
            <Col md={{ span: 6, order: "last" }}>
              <Fade right>
                <div className="content p-md-5">
                  <p className="sup">New Media Workshops</p>
                  <Heading>
                    Equip your community with the skills & insights to properly
                    thrive in our changing media ecosystem.
                  </Heading>
                  <a href="https://forms.gle/e6y4Gkna5S9kymdE8">
                    <motion.button
                      className="btn animated-button"
                      whileHover={{ scale: 1.1 }}
                      size="lg"
                      variant="light"
                    >
                      Host an event with us
                    </motion.button>
                  </a>
                </div>
              </Fade>
            </Col>
            <Col className="image" md={6}>
              <Fade left>
                <StaticImage
                  src="../images/services/workshop.jpg"
                  alt="Workshop participants group photo"
                />
              </Fade>
            </Col>
          </SplitSection>
        </MainPageContainer>
      </Container>

      <NewContainer
        title="We bring you hyper-local content & insights that’s verified by digital forensics & local experts."
        titleColor="white"
        bgColor="#222"
      />

      <Container className="mt-5">
        <div className="mb-5">
          <Grid items={storiesGeorgia.byType.items} />
          <div className="text-center"></div>
        </div>
      </Container>

      <Container fluid>
        <NewContainer
          title="Our impact won the 🌎 Community Award at MIT."
          titleColor="black"
          bgColor="#cdfd01"
        />
      </Container>

      <Container>
        <img src={MitGif} alt="" width="100%" />
      </Container>

      <Container fluid>
        <Sub />
      </Container>
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
    opacity: 0.2;
  }

  .w4-container {
    background: #f7f7f7;
    text-align: left;
    padding: 10px 10px;

    .btn {
      font-weight: bold;
      background: #000000;
      color: #fffff9;
      text-align: center;
      cursor: pointer;
    }
  }

  .w-container {
    background: #1a0117;
    color: var(--bs-primary);
    text-align: center;
    padding: 1 em;

    .btn {
      font-weight: bold;
      background: var(--bs-primary);
      color: #1a0117;
      text-align: center;
      cursor: pointer;
    }
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
  }
`;

const SplitSection = styled(Row)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  .content {
    background: ${(props) => props.background};
    padding: 2rem;
    border-radius: 10px;
    height: 100%;

    p.sup {
      font-weight: bold;
      font-size: clamp(1rem, 2.5vw, 1.5rem);
    }
  }

  .react-reveal {
    height: 100%;
  }

  .animated-button {
    color: #000;
    background-color: #f7f7f7;
    border-color: #f7f7f7;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
    border-radius: 0.25rem;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (max-width: 47rem) {
    &.section2 {
      flex-direction: column-reverse;
    }
  }
`;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "bold"};
  font-size: clamp(1rem, 7vw, ${(props) => props.size || "2.6rem"});
  text-align: ${(props) => (props.center ? "center" : "left")};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

const MainPageContainer = styled.div`
  // margin-top: 2rem;
  // margin-bottom: 2rem;

  .gatsby-image-wrapper {
    height: 100%;

    img {
      border-radius: 10px;
    }
  }
`;

export default IndexPage;
