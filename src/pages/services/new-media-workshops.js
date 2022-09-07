import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import Background from "@images/services/workshop_background.jpeg";
import EventBG from "@images/services/workshop-expert.jpg";
import MediaBG from "@images/services/future-media.jpg";
import SubForm from "@components/Forms/SubForm";

import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const workshops = () => {
  return (
    <Layout>
      <HeroContainer className="main-banner">
        <motion.div
          animate={{ y: [100, 0], scale: [3.5, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="logo-container">
            <img
              src="../../images/logo.png"
              alt="Vngle Logo"
              className="vngle-logo"
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [360, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="center-content">
            <h1 className="main-title">New Media Workshops</h1>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, delay: 1.1 }}
        >
          <div className="center-content">
            <Button className="animated-btn" href="#SubForm">
              Work with Us Today
            </Button>
          </div>
        </motion.div>

        <img src={Background} alt="" className="hero-img" />
      </HeroContainer>

      <Fade bottom>
        <HeroContainer className="card-container">
          <div className="text-card">
            <h1 className="sub-title">
              Create impact & expose your community to the latest media trends.
            </h1>
            <h1>
              Training experinces for communities, content creators and evolving
              media teams.
            </h1>
          </div>
        </HeroContainer>
      </Fade>

      <div className="container px-5">
        <SplitSection className="gx-4 top-container">
          <Col md={6}>
            <Fade left>
              <div className="content p-md-5">
                <Heading className="card-title">
                  Reporting
                  <br />
                  <br />
                </Heading>

                <h2>
                  Vngle empowers aspiring content creators, media teams and more
                  with custom workshops to advance your outreach strategies and
                  appeal through cross-cultural content strategies.
                </h2>
              </div>
            </Fade>
          </Col>

          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../../images/services/media-creator.jpeg"
                alt="Hand holding mics"
              />
            </Fade>
          </Col>
        </SplitSection>
      </div>

      <div className="container px-5">
        <SplitSection className="gx-4">
          <Col className="image" md={6}>
            <Fade left>
              <StaticImage
                src="../../images/services/web3.jpeg"
                alt="Hand holding mics"
              />
            </Fade>
          </Col>

          <Col md={6}>
            <Fade right>
              <div className="content p-md-5">
                <Heading className="card-title">
                  Web3
                  <br />
                  <br />
                </Heading>
                <h2>
                  We give insights into the future of media, sharing concepts
                  from web3, decentralization, and how to leverage blockchain
                  technology.
                </h2>
              </div>
            </Fade>
          </Col>
        </SplitSection>
      </div>

      <div className="container px-5">
        <SplitSection className="gx-4">
          <Col md={6}>
            <Fade left>
              <div className="content p-md-5">
                <Heading className="card-title">
                  Misinformation
                  <br />
                  <br />
                </Heading>
                <h2>
                  Our practices help attendees grow in understanding how to
                  identify and deter misinformation, to help you be seen as a
                  more responsbile leader in your community.
                </h2>
              </div>
            </Fade>
          </Col>

          <Col className="image" md={6}>
            <Fade right>
              <StaticImage
                src="../../images/services/misinformation.jpeg"
                alt="Hand holding mics"
              />
            </Fade>
          </Col>
        </SplitSection>
      </div>

      <HeroContainer className="main-banner">
        <Fade bottom>
          <div className="logo-container">
            <img
              src="../../images/logo.png"
              alt="Vngle Logo"
              className="vngle-logo"
            />
          </div>
        </Fade>

        <Fade bottom>
          <div className="center-content">
            <h1 className="main-title">Host an Event with Us</h1>
          </div>
        </Fade>

        <Fade bottom>
          <div className="center-content">
            <h1 className="logo-title">
              Our workshop experts will aid your community in strategizing about
              the future and how they can best leverage new tools & technology.
            </h1>
          </div>
        </Fade>

        <img src={EventBG} alt="" className="hero-img" />
      </HeroContainer>

      <Fade bottom>
        <HeroContainer className="card-container">
          <div className="text-card">
            <h3 className="card-title">Past Event</h3>
            <h1>
              A Vngle New Media Workshop with the aSTEAM Village community in
              Kansas City, Missouri:
            </h1>
          </div>
        </HeroContainer>
      </Fade>

      <SwiperContainer>
        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          effect={"fade"}
          speed={800}
          slidesPerView={1}
          pagination={true}
          loop
          className="myswiper"
        >
          <SwiperSlide className="swiperslide">
            <StaticImage src="../../images/services/past-event-x.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <StaticImage src="../../images/services/past-event-y.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <StaticImage src="../../images/services/past-event-z.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>

      <HeroContainer className="main-banner">
        <Fade bottom>
          <div className="logo-container">
            <img
              src="../../images/logo.png"
              alt="Vngle Logo"
              className="vngle-logo"
            />
          </div>
        </Fade>

        <Fade bottom>
          <div className="center-content">
            <h1 className="main-title">
              Let’s create the future of media with your organization
            </h1>
          </div>
        </Fade>

        <Fade bottom>
          <div className="center-content">
            <h1 className="logo-title line-style">Reach out below</h1>
          </div>
        </Fade>

        <img src={MediaBG} alt="" className="hero-img" />
      </HeroContainer>

      {/* <HeroContainer id="SubForm"> */}
      <div id="SubForm"></div>
      <SubForm id="SubForm" />
      {/* </HeroContainer> */}
    </Layout>
  );
};

const SwiperContainer = styled.div`
  .myswiper {
    width: 90%;
    border-radius: 30px;
    margin: 50px auto;
    height: 40rem;
    opacity: 0.9;

    .swiperslide {
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .swiper-pagination-bullet-active {
    background-color: white !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
  }

  // h1 {
  //   text-align: center;
  //   font-family: Inter, sans-serif;
  //   color: white;
  // }
`;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "bold"};
  font-size: clamp(1rem, 7vw, ${(props) => props.size || "2.6rem"});
  text-align: ${(props) => (props.center ? "center" : "left")};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};

  &.card-title {
    font-family: "Playfair Display", serif;
    text-align: center;
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
  width: 100%;

  &.main-banner {
    min-height: 44rem;
    padding: 8rem;
  }

  h1 {
    text-align: center;
    font-family: Inter, sans-serif;
  }

  .logo-container {
    max-width: 10rem;
    margin: 0 auto;
    padding-top: 10px;
  }

  .vngle-logo {
    object-fit: cover;
    max-width: 10rem;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
  }

  .logo-title {
    font-size: 30px;
  }

  .center-content {
    padding-top: 10px;
    justify-content: center;
    display: flex;
  }

  .main-title {
    font-size: 55px;
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
    opacity: 0.5;
  }

  &.card-container {
    padding: 0rem 2rem;
    max-width: 70rem;
  }

  .row {
    background-color: #f5f5f7;
  }

  .text-card {
    background-color: #ffffff;
    margin: 20px 10px;
    padding: 40px;
    border-radius: 30px;

    .sub-title {
      color: #0cc3dc;
    }
  }

  .card-title {
    justify-content: center;
    display: flex;
    padding-bottom: 10px;
  }

  &.two-container {
    position: flex;
    padding: 30px;
  }

  .line-style {
    text-decoration: underline;
  }
`;

const SplitSection = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-bottom: 0em;
  }

  .text-container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 30px;
  }

  .content {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 30px;
    height: 100%;
    transition: transform 1s;
  }

  .gatsby-image-wrapper {
    img {
      border-radius: 30px;
    }
  }
`;

export default workshops;
