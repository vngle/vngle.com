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
            <div className="text-wrapper d-flex flex-column">
            <h1 className="display-1">
              News Wire
            </h1>
            <p>SERVICES</p>
            </div>
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
                src="../../images/services/newsWire/mobile-tech.jpg"
                className="backgroundImg"
              />
            </div>
          </div>
        </Animation>
        <Animation>
            <div className="section content-wrapper">
              <div className="text-wrapper">
              <h1 className="display-5">
                We Curate More Verified Local Insights for Newsrooms
              </h1>
              </div>
              <StaticImage 
              src="../../images/services/newsWire/journey.jpg"
              className="background-img-cover"
              />
            </div>
        </Animation>
        <NewsWire>
          <h2 className="display-5">
            Equipping Them With Access to a Transparent Record of Exactly <br />
            Where, When, & How <br />
            Digital Content Originates in Order to Better Combat New Deserts &
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
        <Animation>
          <div className="content-wrapper">
            <div className="text-wrapper">
              <h2 className="display-5 text-align-right text-white">
                Trusted and Truly Representative Original Local Content
              </h2>
            </div>
            <StaticImage src="../../images/services/newsWire/background.jpeg" className="background-img-cover"/>
          </div>
        </Animation>
        <div className="container text-right">
          <h2 className="display-6">
            We Deploy Trained Local Experts & Patented Verification Technology
            to Confidently Grow Noir Media Strategy with Authentic Ground-level
            Perspectives
          </h2>
        </div>
        <Title className="blue-background">
            <h1 className="display-1 text-capitalize">
              Are you a media organization?
            </h1>
            <h1 className="display-3 text-capitalize">
              Need to engage diverse audiences? <br />
              need a reliable hyper-local insights? <br />
              need to monitor your community? <br />
            </h1>
        </Title>
      </MainContainer>
    </Layout>
  );
};


const Title = styled.h1`
  &.blue-background{
    background: #1EE4F0;
  }
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
    border-radius: 1rem;
  }

  h1 , p{
    z-index: 10;
    padding-left: 2rem;
  }
  h1, h2{
    font-family:Inter, sans-serif;
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
    border-radius:1rem;
  }

  .background-img-cover{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .text-wrapper {
    z-index: 10;
    display: flex;
    align-items: center;
    margin: 5rem 0;
    padding: 0 1rem;
  }

  .text-wrapper > h1{
    display:flex;
    justify-content:center;
    text-align:center;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    color: black;
  }

  .section > h1 {
    font-family: Inter, sans-serif;
    margin: 5rem 1rem;
  }

  .conatiner{
    margin:0 3rem;
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

  .blue-text{ color: #1EE4F0;}
`;


export default newsWire;
