import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import { StaticImage } from "gatsby-plugin-image";
import SubForm from "@components/Forms/Sub";

import newswirevideo from "../../images/services/newsWire/Newswire-Header-1.mp4";

const newswire = () => {
  return (
    <Layout>
      <Header>
        <div className="content-wrapper">
          <div className="text-wrapper d-flex">
            <h1 className="display-4 yellow-text fw-bolder lh-sm background-white">
              Expand Your Coverage Capabilities.
              <h1 className="display-4 fw-bold text-white">
                Better Reach Underrepresented Areas Through the Vngle Newswire.
              </h1>
            </h1>
            <nav className="navbar">
              <a href="#Contact" className="btn btn-primary">
                Contact Us Today!
              </a>
            </nav>
          </div>
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            className="login-video"
          >
            <source
              src={newswirevideo}
              type="video/mp4"
              className="login-vid"
            />
            <track kind="captions" />
          </video>
        </div>
      </Header>

      <Section>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="display-4 text-white">
              Our work strengthens the local news ecosystem to help you better
              acurate more verified local insights.
            </h1>
          </div>
          <StaticImage
            src="../../images/services/newsWire/newsroom.jpeg"
            className="background-img"
          />
        </div>
      </Section>
      <Section className="mt-3">
        <div className="container d-flex height">
          <div className="content-wrapper">
            <h1>
              Through partnering with trained local experts, we capture pressing
              grassroots-level stories.
            </h1>
          </div>
          <StaticImage
            src="../../images/services/newsWire/recording.jpg"
            className="picture"
          />
        </div>
      </Section>
      <Section>
        <div className="container d-flex height">
          <StaticImage
            src="../../images/services/newswire.png"
            className="picture"
          />
          <div className="content-wrapper">
            <h1>
              Our content is secured by patented mobile forensics verification
              technology.
            </h1>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container d-flex height">
          <div className="content-wrapper">
            <h1 className="padding">
              Our tech enables us to share a record of exactly where, when, and
              how our content is captured, helping you get transparent insights
              from the ground without being there.
            </h1>
          </div>
          <StaticImage
            src="../../images/services/newsWire/katie-rodriguez-unsplash.jpeg"
            className="picture"
          />
        </div>
      </Section>
      <Content>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="display-5">
              We cover the last mile so you don't have to.
            </h1>
          </div>
          <StaticImage
            src="../../images/services/newsWire/journey.jpg"
            className="background-img-cover"
          />
        </div>
      </Content>
      <Text>
        <h1 className="display-4">
          Vngle's grassroots newsire accelerates your ability to learn from
          diverse audiences to confidently grow your media strategy & combat
          traces of misinformation.
        </h1>
      </Text>
      <Section>
        <div className="content-wrapper img">
          <div className="pic-wrapper"></div>
          <StaticImage
            src="https://source.unsplash.com/w_zE6qlkQKA"
            className="background-img"
          />
        </div>
      </Section>
      <Text>
        <h1 className="display-4">
          We work with media organizations, institutions, and more delivering
          trusted and truly representative hyper-local insights on the
          communites they care about.
        </h1>
      </Text>
      <Section>
        <div className="content-wrapper">
          <div className="top-text">
            <h1 className="display-4 text-white">
              Receive the Various Angles <br />
              you need From Vngle.
            </h1>
          </div>
          <StaticImage
            src="../../images/services/newsWire/roger-erdvig.jpg"
            className="background-img"
          />
        </div>
      </Section>
      <div id="Contact">
        <SubForm />
      </div>
    </Layout>
  );
};

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
    margin-top: 35%;
    margin-left: 1rem;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.6);
    padding-left: 2rem;
    border-radius: 1rem;
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
    h1 {
      font-size: 1rem;
    }
    .content-wrapper {
      min-height: 30vh;
    }
  }
`;

const Text = styled.h1`
  margin: 5rem 2rem;
  h1 {
    font-family: Inter, sans-serif;
  }
  //--------------Media Queries-----------------
  @media (max-width: 47rem) {
    margin: 2rem 1rem;
  }
`;

const Section = styled.div`
  position: relative;

  .text-wrapper {
    z-index: 10;
    margin-top: 50%;
    padding-right: 3rem;
    margin-left: 1rem;
  }

  .pic-wrapper {
    margin-top: 50%;
  }

  .text-wrapper > h1 {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
  }

  .top-text {
    z-index: 10;
    margin-bottom: 50%;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .background-img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .picture {
    max-width: 80%;
    border-radius: 1rem;
  }

  .container > div {
    flex-basis: 100%;
  }

  .height {
    height: 70vh;
  }

  h1 {
    font-family: Inter, sans-serif;
    padding-left: 1rem;
  }

  //--------------Media Queries-----------------
  @media (max-width: 47rem) {
    .height {
      height: 20vh;
      margin-top: 2rem;
    }

    .picture {
      max-width: 50%;
      height: auto;
    }

    .content-wrapper > h1 {
      font-size: 1rem;
      text-align: center;
      padding-left: 0;
    }

    .content-wrapper > .padding {
      padding-top: 2rem;
    }

    .container > div {
      flex-basis: 50%;
    }

    .text-wrapper > h1 {
      margin-top: 25%;
      padding-right: 0;
      font-size: 1.5rem;
    }

    .text-wrapper {
      margin-top: 10%;
    }
  }
`;

const Content = styled.div`
  background: #ffcc35;
  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    color: black;
    margin-top: 3rem;
  }

  .text-wrapper {
    z-index: 10;
    align-items: center;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-wrapper > h1 {
    font-family: Inter, sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 5rem 0;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
  }
  .background-img-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export default newswire;
