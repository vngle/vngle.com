import React from "react";
<<<<<<< HEAD
import { useEffect } from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import { StaticImage } from "gatsby-plugin-image";
import I from "@images/involved/img.jpeg";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import Form from "@components/Forms/Contact";
import SubForm from "@components/Forms/SubForm";
import ButtonContainer from "../components/Containers/ButtonContainer";

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

const Becomevngler = () => {

  useEffect(() => {
    
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <Layout>
      <HeroContainer className="main-banner">
        <div>
          <h1> Become a Vngler </h1>
          <img src={I} alt="" className="hero-img" />
        </div>
      </HeroContainer>

      <ButtonContainer
        title="How will you get involved?"
        titleColor="#000000"
        buttonLink="#Form"
        buttonText="Let's talk"
        buttonColor="black"
        butTexCol="White"
        bgColor="#f7f7f7"
      />
      <SubForm />

      <Container>
        <div className="title">
          <h1>Expand Vngle Coverage In Your Area: </h1>
          <h2>Our mission is fueled by 3 essential roles.</h2>
        </div>

        <SplitSection background="" className="section2 gy-3">
=======
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
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
          <Col md={{ span: 6, order: "last" }}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>Grassroots Reporters:</Heading>
<<<<<<< HEAD
                  Local experts we train & equip to report on assignments in
                  their area.
=======
                  Local experts we train to report on their city.
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
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

<<<<<<< HEAD
        <SplitSection background="" className="section2 gy-3">
=======
        <SplitSection background="" className="gy-3">
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
          <Col md={6}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>Content Editors:</Heading>
<<<<<<< HEAD
                  Constituents helping us get verfiable information to
                  newsrooms.
=======
                  Creative people who help us get our content to communities &
                  newsrooms
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
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

<<<<<<< HEAD
        <SplitSection background="" className="section2 gy-3">
=======
        <SplitSection background="" className="gy-3">
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
          <Col md={{ span: 6, order: "last" }}>
            <Fade left>
              <div className="content p-md-5">
                <p className="sup">
                  <Heading>Community Organizer:</Heading>
<<<<<<< HEAD
                  Passionate folks helping communities & content creators better
                  connect with Vngle.
=======
                  Passionate people who help us better connect with local
                  communities.
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
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
<<<<<<< HEAD

        <div className="contact text-center">
          <h1>
            The Vngler network is made up of people from all walks of life
            working together to create a more equitable news ecosystem.
          </h1>
        </div>
      </Container>

      <HContainer>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="display-4">
              Want to join? <br /> Reach out below and share how you would like
              to take part in our growing network.
            </h1>
          </div>
          <StaticImage
            src="../images/involved/blake.stoner.jpg"
            className="background-img"
          />
        </div>
      </HContainer>
      <section id="Form">
        {" "}
        <Form />
      </section>
=======
      </HeroContainer>

      <HContainer>
        <div className="Contact text-center">
          <h1>
            Want to take part? Contact us and let us know how you would like to
            join our growing grassroots community.
          </h1>
        </div>
      </HContainer>
<<<<<<< HEAD
      <Form/>
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
=======
      <Form />
>>>>>>> 96c7b6c (formatting)
    </Layout>
  );
};

const HeroContainer = styled.div`
  position: relative;
  text-align: center;
<<<<<<< HEAD
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  h1 {
    font-size: clamp(4rem, 7vw, ${(props) => props.size || "2.6rem"});
=======

  h1 {
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
    text-aling: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
<<<<<<< HEAD
    color: black;
=======
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
  }

  .hero-img {
    object-fit: cover;
<<<<<<< HEAD
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
=======
    width: 50%;
    height: 100%;
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
  }

  .container {
    margin-top: 5rem;
    margin-bottom: 8rem;
    text-align: center;

    h1 {
<<<<<<< HEAD
      font-size: clamp(4rem, 7vw, ${(props) => props.size || "2.6rem"});
=======
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
      font-family: "Inter";
      font-style: normal;
      font-weight: bold;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
  
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
=======
>>>>>>> 96c7b6c (formatting)
`;

const SplitSection = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;
<<<<<<< HEAD
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  .content {
    background: ${(props) => props.background};
    border-radius: 10px;
    padding: 2rem;
=======

  .content {
    background: ${(props) => props.background};
    padding: 2rem;
    border-radius: 10px;
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
    height: 100%;
    transition: transform 1s;

    p.sup {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
<<<<<<< HEAD
      font-size: 4rem;
=======
      font-size: 2rem;
      font-weight: bold;
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .react-reveal {
    height: 100%;
  }
<<<<<<< HEAD

  @media (max-width: 47rem) {
    &.section2 {
      flex-direction: column-reverse;

      p.sup {
        text-align: left;
        font-weight: bold;
        font-size: 2rem;
        font-family: "Playfair Display", serif;
        font-style: normal;
        color: #000000;
      }
    }
  }
=======
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
`;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "bold"};
<<<<<<< HEAD
  font-size: clamp(3rem, 7vw, ${(props) => props.size || "2.6rem"});
=======
  font-size: clamp(1rem, 7vw, ${(props) => props.size || "2.6rem"});
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
  text-align: ${(props) => (props.center ? "center" : "left")};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

<<<<<<< HEAD
const Container = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: clamp(4rem, 7vw, ${(props) => props.size || "2.6rem"});

  h1 {
    text-align: center;
    font-family: "Inter";
=======
const HContainer = styled.div`
  h1 {
    margin-top: 9rem;
    margin-bottom: 9rem;
    font-family: "Inter";
    font-style: normal;
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
    font-weight: bold;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
<<<<<<< HEAD

  .title {
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;

    h1 {
      font-family: "Inter";
      font-style: italic;
      font-weight: bold;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h2 {
      font-family: "Inter";
      font-weight: bold;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .contact {
    h1 {
      margin-top: 6rem;
      margin-bottom: 6rem;
      font-family: "Inter";
      font-style: italic;
      font-weight: bold;
      color: #000000;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #dc33b7;
      // text-shadow: 0px 4px 4px rgba(220, 51, 183, 0.25);
    }
  }

  .gatsby-image-wrapper {
    height: 100%;

    img {
      border-radius: 10px;
    }
  }
`;

const HContainer = styled.div`
  position: relative;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  h1 {
    font-size: clamp(4rem, 7vw, ${(props) => props.size || "2.6rem"});
    margin-top: 6rem;
    margin-bottom: 6rem;
    font-family: "Inter";
    font-style: italic;
    font-weight: bold;
    color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

  .text-wrapper {
    z-index: 10;
    margin-top: 50%;
    padding-right: 3rem;
    margin-left: 1rem;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .background-img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export default Becomevngler;
=======
`;

export default becomevngler;
>>>>>>> 9d7b92e (Creative Content and Become a Vngler)
