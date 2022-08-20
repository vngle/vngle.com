import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import { StaticImage } from "gatsby-plugin-image";
import I from "@images/involved/img.png";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import Form from "@components/Forms/Contact";

const becomevngler = () => {
  return (
    <Layout>
      <HeroContainer className="main-banner">
        <div className="main-title">
          <h1> Become a Vngler </h1>
          <img src={I} alt="" className="hero-img" />
        </div>

        <div className="container">
          <h1>Thank you for your interest in joining our media movement!</h1>
          <div class="tittle">
            <h1>Our mission is fueled by 3 essential roles.</h1>
          </div>
        </div>

        <SplitSection background="" className="gy-3">
          <Col md={{ span: 6, order: "last" }}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>Grassroots Reporters:</Heading>
                  Local experts we train to report on their city.
                </p>
              </div>
            </Fade>
          </Col>
          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../images/involved/ko.jpeg"
                alt="man holding camera"
              />
            </Fade>
          </Col>
        </SplitSection>

        <SplitSection background="" className="gy-3">
          <Col md={6}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>Content Editors:</Heading>
                  Creative people who help us get our content to communities &
                  newsrooms
                </p>
              </div>
            </Fade>
          </Col>
          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../images/involved/editor.jpeg"
                alt="An editor editing"
              />
            </Fade>
          </Col>
        </SplitSection>

        <SplitSection background="" className="gy-3">
          <Col md={{ span: 6, order: "last" }}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>Community Organizer:</Heading>
                  Passionate people who help us better connect with local
                  communities.
                </p>
              </div>
            </Fade>
          </Col>
          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../images/involved/bro.jpeg"
                alt="Friends chatting over coffee"
              />
            </Fade>
          </Col>
        </SplitSection>
      </HeroContainer>

      <HContainer>
        <div className="Contact text-center">
          <h1>
            Want to take part? Contact us and let us know how you would like to
            join our growing grassroots community.
          </h1>
        </div>
      </HContainer>
      <Form />
    </Layout>
  );
};

const HeroContainer = styled.div`
  position: relative;
  text-align: center;

  h1 {
    text-aling: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .hero-img {
    object-fit: cover;
    width: 50%;
    height: 100%;
  }

  .container {
    margin-top: 5rem;
    margin-bottom: 8rem;
    text-align: center;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: bold;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .title {
    h1 {
      margin-top: 2rem;
      font-family: "Inter";
      font-style: normal;
      font-weight: bold;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

const SplitSection = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .content {
    background: ${(props) => props.background};
    padding: 2rem;
    border-radius: 10px;
    height: 100%;
    transition: transform 1s;

    p.sup {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      font-size: 2rem;
      font-weight: bold;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .react-reveal {
    height: 100%;
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

const HContainer = styled.div`
  h1 {
    margin-top: 9rem;
    margin-bottom: 9rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default becomevngler;
