import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import Background from "@images/services/creative_content_background.jpeg";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import Form from "@components/Forms/Form";
import { motion } from "framer-motion";

const creativeContent = () => {
  return (
    <Layout>
      <HeroContainer className="main-banner">
        <Container className="d-flex justify-content-center flex-column">
          <motion.div
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.3, delay: 1 }}
          >
            <div className="main-title">
              <h1 className="display-4 fw-bolder">
                Creative Content <br />
                Strategy
              </h1>
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1.3, delay: 2 }}
          >
            <div className="main-title btn-container">
              <Button className="animated-btn">Launch Your Campaign</Button>
            </div>
          </motion.div>
        </Container>
        <img src={Background} alt="" className="hero-img" />
      </HeroContainer>

      <MaContainer>
        <div className="mt display-3">
          <h1>
            <span class="r">
              Craft strategies to better target communities:
            </span>{" "}
            <br />
            Build greater awareness, campaigns, market research & more.
          </h1>
        </div>

        <SplitSection background="" className="section2 gy-3">
          <Col md={6}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup display-2">
                  <Heading>
                    {" "}
                    Leverage our grassroots expertise to create content that
                    maximizes your local connection across the areas you care
                    about.
                  </Heading>
                </p>
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
      </MaContainer>

      <HContainer className="rb-4">
        <h1>
          Our <span class="f">award-winning</span> approach combines :
        </h1>{" "}
        <p class="one"> Community Engagement </p>
        <p class="two"> Media Creation</p>
        <p class="third">And Grassroots Strategy</p>
        <p>
          {" "}
          To make your desired stories resonate across channels to engage{" "}
          <span class="b">the right audiences</span>.
        </p>
      </HContainer>

      <MaContainer>
        <SplitSection background="" className="section2 gy-3">
          <Col md={{ span: 6, order: "last" }}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>
                    {" "}
                    Our content team will work with you to plan your story and
                    document the story you want to capture.{" "}
                  </Heading>
                </p>
              </div>
            </Fade>
          </Col>
          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../../images/services/k.jpg"
                alt="Hand holding camera"
              />
            </Fade>
          </Col>
        </SplitSection>

        <SplitSection background="" className="section2 gy-3">
          <Col md={6}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>
                    {" "}
                    No matter the if it’s on-the-ground or in-the-air, we have
                    the tools to tell your story.{" "}
                  </Heading>
                </p>
              </div>
            </Fade>
          </Col>
          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../../images/services/g.jpg"
                alt="Drone Flying"
              />
            </Fade>
          </Col>
        </SplitSection>

        <SplitSection background="" className="section2 gy-3">
          <Col md={{ span: 6, order: "last" }}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>
                    {" "}
                    We offer end-to-end fulfillment: Whether you need support on
                    reaching your goals, increase distribution, or grow your
                    audience, we got you covered.{" "}
                  </Heading>
                </p>
              </div>
            </Fade>
          </Col>
          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../../images/services/stephen.jpeg"
                alt="Quality Score"
              />
            </Fade>
          </Col>
        </SplitSection>
      </MaContainer>

      <Form />

      <small class="lead text-center fw-bold">
        {" "}
        <br />
        Creative Content Strategy Services are separate from the Vngle newsroom.
        Clients and brands working with Vngle’s Creative Content Strategy
        Services do not influence the editorial discretion of our news reporting
        in any form. Conversely, custom storytelling projects through our
        Creative Content Strategy Services do permit the collaborative input of
        the clients and brands we work with.
      </small>
    </Layout>
  );
};

const HeroContainer = styled(Container)`
  position: relative;
  width: 100%;

  &.main-banner {
    min-height: 44rem;
    padding: 14rem 0rem;
    display: flex;
  }
  h1 {
    font-family: "Playfair Display", serif;
    margin-bottom: 0rem;
    text-align: center;
  }
  .main-title {
    max-width: 35rem;
    justify-content: center;
    display: flex;
  }
  .btn-container {
    padding: 2rem;
  }

  .animated-btn {
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    font-weight: bold;
  }

  .hero-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0.9;
  }

  @media (max-width: 47rem) {
    &.main-banner {
      min-height: 5rem;
      padding: 14rem 0rem;
      display: flex;
    }
  }
`;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "bold"};
  font-size: clamp(3rem, 7vw, ${(props) => props.size || "2.6rem"});
  text-align: ${(props) => (props.center ? "center" : "left")};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

const MaContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  .mt {
    margin-bottom: 4rem;

    .r {
      color: #e612d0;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;

    img {
      border-radius: 10px;
    }
  }

  h1 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    text-align: center;
    font-size: 3rem;
  }
`;

const HContainer = styled(Container)`
  background: black;
  padding-top: 3rem;
  padding-bottom: 1rem;

  h1 {
    color: white;
    font-weight: bold;
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    text-align: left;
    .f {
      color: var(--bs-primary);
    }
  }

  p {
    color: white;
    font-weight: bold;
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    text-align: left;
    .b {
      color: #1ee4f0;
      text-align: center;
    }
  }

  .one {
    color: #1ee4f0;
    text-align: center;
    animation: flip 3s infinite;
    animation-delay: calc(0.3s * var(--i));
    animation-iteration-count: 5;
  }

  .two {
    color: #1ee4f0;
    text-align: center;
    animation: flip 3s infinite;
    animation-delay: calc(0.3s * var(--i));
    animation-iteration-count: 5;
  }

  .third {
    color: #1ee4f0;
    text-align: center;
    animation: flip 3s infinite;
    animation-delay: calc(0.3s * var(--i));
    animation-iteration-count: 5;
  }

  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
`;

const SplitSection = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  .content {
    background: ${(props) => props.background};
    padding: 2rem;
    border-radius: 10px;
    height: 100%;
    transition: transform 1s;
  }

  @media (max-width: 47rem) {
    &.section2 {
      flex-direction: column-reverse;
    }
  }
`;

export default creativeContent;
