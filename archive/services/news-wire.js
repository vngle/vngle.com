import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import { StaticImage } from "gatsby-plugin-image";

const newsWire = () => {
  return (
    <Layout>
      <MainContainer>
        <Title>
          <div className="container">
            <h1 className="display-1">
              Got a Scoop but Don't Know Where to Start?{" "}
            </h1>
            <StaticImage
              src="../../images/services/newsWire/mainHeader.jpeg"
              className="backgroundImg"
            />
          </div>
        </Title>
        <h2 className="display-5">
          At Vngle, we help newsrooms expand their video coverage capabilities
          across underrepresented areas through grassroots content partnerships.
        </h2>
        <Animation>
          <div className="container">
            <div className="section">
              <h1 className="display-5">
                {" "}
                Through
                <br />
                Training
                <br />
                Constituencies
              </h1>
              <StaticImage
                src="../../images/services/newsWire/newsWireHeader-2.jpg"
                className="backgroundImg"
              />
            </div>
          </div>
        </Animation>
        <Animation>
          <div className="container">
            <div className="section">
              <h1 className="display-5">
                & With Our Patented Mobile Forensics Blockchain Technology
              </h1>
              <StaticImage
                src="../../images/services/newsWire/techHeader.jpeg"
                className="backgroundImg"
              />
            </div>
          </div>
        </Animation>
        <Animation>
          <div className="container">
            <div className="section">
              <h1 className="display-5">
                We Curate More Verified Local Insights for Newsrooms
              </h1>
            </div>
          </div>
        </Animation>
        <NewsWire>
          <h2 className="display-5">
            Equipping Them With Access to a Transparent Record of Exactly <br />
            Where, When, & How <br />
            Digital Content Originates in Order to Better Combat New Deserts and
            Traces of Misinformation
          </h2>
          <div className="container">
            <h1 className="display-2">Newswire</h1>
          </div>
        </NewsWire>
        <div className="container text-left">
          <h2 className="display-6">
            Our Newswire Accelerates Your Ability to Engage & Learn from
            Audiences through
          </h2>
        </div>
        <div className="container">
          <h2 className="display-5">
            Trusted and Truly Representative Original Local Content
          </h2>
        </div>
        <div className="container text-right">
          <h2 className="display-6">
            We Deploy Trained Local Experts & Patented Verification Technology
            to Confidently Grow Noir Media Strategy with Authentic Ground-level
            Perspectives
          </h2>
        </div>
        <Title>
          <h1 className="display-1 text-capitalize">
            Are you a media organization?
          </h1>
          <h1 className="display-3 text-capitalize">
            Need to engage diverse audiences? <br />
            need a reliable hyper-local insights? <br />
            need to monitor your community? <br />
          </h1>
        </Title>
        <div className="container text-capitalize">
          <h2 className="display-4">
            we can support you with our <br />
            Media Services
          </h2>
        </div>
        <Cards>
          <div className="container">
            <div className="cards">
              <div className="text-cards"></div>
              <div className="text-cards"></div>
            </div>
          </div>
        </Cards>
      </MainContainer>
    </Layout>
  );
};

const Title = styled.h1`
  background: linear-gradient(
    to right,
    rgba(248, 200, 65, 1),
    rgba(248, 200, 65, 0.5)
  );

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
  }

  .container > div {
    flex-basis: 90%;
  }

  .backgroundImg {
    max-width: 40%;
    z-index: 0;
    margin: 3rem auto;
  }

  h1 {
    font-family: Inter, sans-serif;
    z-index: 10;
    padding-left: 2rem;
  }
`;
const Animation = styled.div`
  background: #ffcc35;
  .container > .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .backgroundImg {
    max-width: 50%;
    z-index: 0;
    margin: 1rem 0;
    flex-basis: 50%;
  }

  .section > h1 {
    font-family: Inter, sans-serif;
  }
`;

const NewsWire = styled.h1`
  .container {
    display: flex;
    justify-content: center;
  }
  h1 {
    font-family: Inter, sans-serif;
    background: #e3e3e3;
    border-radius: 20px;
    padding: 3rem 18rem;
    color: #e512d0;
  }
`;
const MainContainer = styled.div`
  h2 {
    font-family: Inter, sans-serif;
    margin: 0 auto;
    text-align: center;
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
`;

const Cards = styled.div`
  .cards {
    display: flex;
  }
  .cards .text-card {
    background: #4f5c6c;
    margin: 1.25rem;
    padding: 1.25rem;
  }
  @media (max-width: 46.25rem) {
    h2 {
      font-size: 5rem;
    }

    .cards {
      flex-direction: column;
    }
  }
`;

export default newsWire;
