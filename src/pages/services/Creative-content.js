import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import Background from "@images/services/creative_content_background.jpeg";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Button } from "react-bootstrap";
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
              <Button className="animated-btn">Launch Your campaign</Button>
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
        <div className="mb display-6">
          <p>
            Maximize your audience reach with our on-demand tailored content!
          </p>
          <StaticImage
            className="img"
            src="../../images/services/sic.png"
            alt="Hand holding mics"
          />
        </div>
        <h1 class="display-2">
          Leverage our grassroots storytelling expertise to capture a specific
          story you want covered.
        </h1>
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

      <HeContainer>
        <h1 className="content display-4 fw-bold">
          {" "}
          Our content team will work with you to plan your story and document
          the story you want to capture.{" "}
        </h1>
        <div>
          <StaticImage
            className="img"
            src="../../images/services/k.jpg"
            alt="Hand holding camera"
          />
        </div>

        <h1 className="container display-4 fw-bold">
          {" "}
          No matter the if it’s on-the-ground or in-the-air, we have the tools
          to tell your story.{" "}
        </h1>
        <div>
          <StaticImage
            className="img"
            src="../../images/services/g.jpg"
            alt="Drone Flying"
          />
        </div>

        <h2 className="content display-4 fw-bold">
          {" "}
          We offer end-to-end fulfillment: Whether you need support on reaching
          your goals, increase distribution, or grow your audience, we got you
          covered.{" "}
        </h2>
        <div>
          <StaticImage
            className="img"
            src="../../images/services/stephen.jpeg"
            alt="Quality Score"
          />
        </div>
      </HeContainer>

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

  @media(max-width:47rem){
    margin-top:5rem;

     .hero-img {
    
      width: 100%;
    
      height: 80%;
    }

    &.main-banner {
      min-height: 5rem;
      padding: 14rem 0rem;
      display: flex;
    }
    h1 {
      font-family: "Playfair Display", serif;
      margin-bottom: 0rem;
      text-align: center;
  }
`;

const HeContainer = styled.div`
  .content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;

    h1 {
      font-size: 3rem;
      font-family: "Playfair Display", serif;
    }
  }

  img {
    posiiton: absolute;
    width: 100%;
    padding-left: 0.1rem;
  }

  .container {
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;

    h1 {
      font-size: 3rem;
      font-family: "Playfair Display", serif;
    }

    h2 {
      font-size: 3rem;
      font-family: "Playfair Display", serif;
    }
  }
  img {
    posiiton: absolute;
    width: 100%;
    padding-left: 0.1rem;
  }
`;

const MaContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  .mt {
    margin-bottom: 4rem;

    .r {
      color: #E612D0;
      
    }
  }

  .mb {
    display: flex;
    align-items: center;

    ,
    p {
      padding-left: 1rem;
      font-size: 3rem;
      font-weight: bold;
      float: left;
      font-family: "Playfair Display", serif;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;
    bottom: 0;

    img {
      border-radius: 4rem;
      width: 70%;
      margin-left: auto;
      padding-bottom: 2rem;
    }
  }

  h1 {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    text-align: center;
  }

  @media (max-width: 47rem) {
    margin-top: 0.5rem;

    .gatsby-image-wrapper {
      height: 80%;
      bottom: 0;

      img {
        width: 80%;
        margin: auto;
      }
    }
    .mb {
      display: flex;
      align-items: center;

      ,
      p {
        font-size: 2rem;
        font-weight: bold;
        float: left;
        font-family: "Playfair Display", serif;
      }
    }
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

  ,p {
    color: white;
    font-weight: bold;
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    text-align: left;
    .b {
        color: #1EE4F0;
        text-align: center;
      }   
  }


  .one {
    color: #1EE4F0;
    text-align: center;
    animation: flip 3s infinite;
    animation-delay: calc(.3s * var(--i)); 
    animation-iteration-count: 5;
  }

  .two {
    color: #1EE4F0;
    text-align: center;
    animation: flip 3s infinite;
    animation-delay: calc(.3s * var(--i));
    animation-iteration-count: 5;
  }

  .third {
    color: #1EE4F0;
    text-align: center;
    animation: flip 3s infinite;
    animation-delay: calc(.3s * var(--i));
    animation-iteration-count: 5;  
  }

  @keyframes flip {
    0%,80% {
      transform: rotateY(360deg) 
    }
`;

export default creativeContent;
