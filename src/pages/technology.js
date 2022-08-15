import React from "react";
import Layout from "@components/Layouts/MainLayout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Seo from "../components/Seo";

window.addEventListener("scroll", reveal);

/* ------Reveals from the bottom when scrolling----- */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function technology() {
  return (
    <Layout>
      {/*---------------------Main Header----------------------- */}
      <Seo title={`Technology`} />
      <Title
        data-bs-spy="scroll"
        data-bs-target="#nav-sections"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        id="Top"
        className="main-header"
      >
        <div className="content-wrapper">
          <div className="text-wrapper container">
            <h1 className="main-text fw-bolder">Our Tech</h1>
          </div>
          <StaticImage
            src="../images/technology/headerTechPage.jpeg"
            className="backgroundImg"
          />
        </div>
      </Title>
      {/* -------------------Navigation Bar ---------------------- */}
      <Navbar
        id="nav-sections"
        className="navbar"
      >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#Top">
              Top
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-1">
              Mobile App
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-2">
              Blockchain
            </a>
          </li>
        </ul>
      </Navbar>
      {/* ----------------------------------------------------------------------------------- */}
      <Section className="white-background">
        <h1 className="container text-center reveal active text-color">
          We Bring Together Grassroots Insights & Web3 Digital Forensics To
          Verfiy Info At the Ground Level
        </h1>
      </Section>

      <Scroll
        data-bs-spy="scroll"
        data-bs-target="#nav-sections"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
      >
        {/* ------------------------- Moble App ----------------------- */}

        <Title id="section-1">
          <div className="content-wrapper">
            <div className="text-wrapper container">
              <h1 className="fw-bolder">
                The Vngle <br />
                Reporter App
              </h1>
            </div>
            <StaticImage
              src="../images/technology/Mobile.jpg"
              className="backgroundImg"
            />
          </div>
        </Title>
        <Title>
          <div className="content-wrapper">
            <div className="container text-wrapper container">
              <p className="mobile-text reveal active">
                The Reporter App equips trained grassroots reporters with our
                blockchain-based digital forensics technology to publically
                authenticate the origin of stories from the field
              </p>
            </div>
            <StaticImage
              src="../images/technology/Record-2.jpeg"
              className="backgroundImg"
            />
          </div>
        </Title>
        {/* -----------------------------VNGLE LOGO AND MOBILE APP------------------------------- */}
        {/*
        <VngleLogo>
        <div className="d-flex flex-wrap container-fluid">
        <div className="d-flex align-items-start ">
        <div className="container d-flex flex-column left-section">
          <div className="container title-wrapper">
            <h2 className="display-5 fw-bolder text-left">
              How We Capture<br/>
              &<br/>
              Fact Check Content<br/>
            </h2>
          </div>
            <div className="cards">
              <div className="d-flex flex-column">
                <div className="text-card yellow-border">
                  <h3 className="fw-bolder">Local Assignments</h3>
                  <p>
                  <br />
                      We work with trained members of the Vngle community to capture
                      stories near them
                  </p>
                </div>
                <div className="text-card pink-border">
                  <h3 className="fw-bolder">Blockchain Record</h3>
                  <p>
                    <br/>
                    The content is recorded using public ledger technology, making
                    its origin accessible to newswire subscribers & partners
                  </p>
                </div>
              </div>
              <div className="cards align-self-center">
                <div className="text-card cyan-border">
                  <h3 className="fw-bolder">Editorial Review</h3>
                  <p>
                    <br/>
                    We ensure all content undergoes review from our editorial team
                    & cross-referenced to ensure credibility
                  </p>
                </div>
              </div>
            </div>
          </div>
            <StaticImage src="../images/technology/iPhone-cover.jpeg" className="img-fluid align-self-center iphone-img"/>
            </div>
          </div>
        </VngleLogo>
        */}
        <VngleLogo>
        <div className="d-flex flex-wrap container-fluid background">
          <div className="height">
        <div className="d-flex align-items-start media">
          <Title>
            <div className="content-wrapper">
              <div className="text-wrapper container">
                <h2 className="display-6 text-center">
                    How We Capture<br/>
                    &<br/>
                    Fact Check Content<br/>
                </h2>
              </div>
              <StaticImage
                src="../images/technology/Iphone-Cover-2.jpeg"
                className="backgroundImg Iphone-img"
              />
            </div>
          </Title>
          <div className="cards container d-flex flex-column align-self-center">
              <div className="d-flex flex-column">
                <div className="text-card yellow-border">
                  <h3 className="fw-bolder">Local Assignments</h3>
                  <p>
                  <br />
                      We work with trained members of the Vngle community to capture
                      stories near them
                  </p>  
                </div>
                <div className="text-card pink-border">
                  <h3 className="fw-bolder">Blockchain Record</h3>
                  <p>
                    <br/>
                    The content is recorded using public ledger technology, making
                    its origin accessible to newswire subscribers & partners
                  </p>
                </div>
                <div className="text-card cyan-border">
                  <h3 className="fw-bolder">Editorial Review</h3>
                    <p>
                      <br/>
                      We ensure all content undergoes review from our editorial team
                      & cross-referenced to ensure credibility
                    </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </VngleLogo>
        {/* --------------------------------------------------------------------------------- */}
        <Section>
          <div className="content-wrapper">
            <div className="inner text-wrapper reveal active contactUs">
              <h1>
                Interested? <br />
                Let's Expand Coverage In To <br />
                Your City
              </h1>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScpXPlS3MOqr9-P5E4A_F2JFt4dfspI-OY2W-xlAPWUOT9yoA/viewform"
                target="blank"
              >
                <button className="btn btn-primary">Contact Us Today</button>
              </a>
            </div>
            <StaticImage
              src="../images/technology/Download-App.jpeg"
              className="backgroundImg"
            />
          </div>
        </Section>
        {/* ----------------------------Blockchain-----------------------------*/}

        <Title id="section-2">
          <div className="content-wrapper">
            <div className="text-wrapper text-reveal container">
              <h1 className="reveal active fw-bolder">
                How Blockchain Is Used
              </h1>
            </div>
            <StaticImage
              src="../images/technology/Blockchain-orange.jpeg"
              className="backgroundImg"
            />
          </div>
        </Title>
        <Section>
          <div className="blockchain-text">
            <div className="container">
              <h2 className="font-sans-serif">
                We use public ledger technology to craft transparent records of
                exactly where, when, and how digital content originates in order
                to better combat misinformation.
              </h2>
            </div>
          </div>
        </Section>
        <Cards>
          <div className="container">
            <h2 className="magenta fw-bolder">How That Works: </h2>
            <div className="cards">
              <div className="text-card gray">
                <h3>Proof of Origin Captured</h3>
                <p>
                  Story is documented and recorded containing a unique id with
                  location, timestamp, and forensic dats is sent to the
                  blockchain
                </p>
              </div>
              <div className="text-card gray">
                <h3>Public Record is Created</h3>
                <p>
                  This record is posted to the blockchain and a receipt is
                  generate showing the location of data and what is posted
                </p>
              </div>
              <div className="text-card gray">
                <h3>Forensic Trail Is Shared</h3>
                <p>
                  Content is verified using its blockchain receipt, enabling our
                  partners to check the forensics trail of stories via the
                  public ledger.
                </p>
              </div>
            </div>
          </div>
        </Cards>
      </Scroll>
      <Section  className="cyan-background">
        <div className="container">
          <h1 className="cyan fw-bolder">
            Get Access To More Verified Insights On Your Area:{" "}
          </h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScpXPlS3MOqr9-P5E4A_F2JFt4dfspI-OY2W-xlAPWUOT9yoA/viewform"
            target="blank"
          >
            <button className="btn cyanbtn">Contact Us Today</button>
          </a>
        </div>
      </Section>
    </Layout>
  );
}

const Title = styled.div`
  overflow: hidden;
  position: relative;

  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    color: white;
    height: 90vh;
  }

  .backgroundImg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .text-wrapper {
    z-index: 10;
    display: flex;
    align-items: center;
  }

  h1 {
    font-family: Inter, sans-serif;
    padding: 1rem;
    font-weight: 400;
    font-size: 4rem;
  }

  //---------------------REVEAL FROM BOTTOM --------------------------

  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 1.5s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }

  //-----------------------------------------------------------------

  #title {
    z-index: 11;
    letter-spacing: 4rem;
    font-size: 5rem;
    font-weight: lighter;
    display: flex;
    justify-content: center;
    vertical-align: top;
  }

  .main-text {
    font-size: 6rem;
    margin-bottom: 12rem;
    margin-top: 15rem;
  }

  .mobile-text {
    margin: 0 auto;
    font-style: italic;
    font-size: 2.25rem;
  }

  .text-wrapper > h2{
    margin-top:5rem;
    margin-right:1px;
    padding: 3rem;
  }

  .Iphone-img{
    border-radius:3rem;
  }
  //-------------------------------@MEDIA QUERIES------------------------------

  @media (max-width: 27rem) {
    .main-text {
      font-size: 3rem;
      margin-bottom: 2rem;
      margin-top: 3rem;
    }

    .content-wrapper {
      position: relative;
      height: 30vh;
    }

    h1 {
      font-size: 2.5rem;
    }
    .mobile-text {
      font-size: 1.25rem;
      padding: 0;
    }
  }
`;

const Section = styled.div`
  align-items: center;
  color: white;
  background-color: black;
  overflow: hidden;
  position: relative;
  .container {
    padding: 70px 0;
  }

  .inner {
    overflow: hidden;
    z-index: 10;
    margin: 0 auto;
  }

  .inner > h1 {
    text-align: center;
    font-size: 4rem;
  }

  .inner > button {
    border-radius: 4em;
    border: none;
  }

  .backgroundImg {
    position:absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &.white-background{ background: white }
  &.cyan-background { background: #1EE4F0;}

  .content-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .text-wrapper {
    z-index: 10;
    align-items: center;
    text-align: center;
  }

  .text-color{ color: black; }

  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 1.5s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }

  .cyan {
    color: black;
    font-size: 4rem;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  }

  .cyanbtn {
    borderradius: 10px;
    background: black;
    color: white;
    font-size: 2rem;
    margin-top: 8rem;
  }

  .contactUs {
    font-size: 3rem;
    margin: 9rem auto;
  }

  .blockchain-text {
    background: black;
    color: white;
    margin: 0 auto;
    padding: 2rem;
  }

  .container > a {
    display: flex;
    justify-content: center;
  }

  h1,
  a {
    font-family: Inter, sans-serif;
  }

  //-------------------------------@MEDIA QUERIES------------------------------

  @media (max-width: 27rem) {
    .inner > h1 {
      font-size: 2rem;
      margin-bottom: 4rem;
    }

    .inner > button {
      border-radius: 4em;
      border: none;
    }

    .contactUs {
      margin: 5rem auto;
    }

    .blockchainTxt {
      margin: 0 auto;
      font-size: 1rem;
    }

    .cyan {
      font-size: 2rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 2rem;
    }

    .cyanbtn {
      font-size: 1rem;
      margin: 0 auto;
      margin-top: 3rem;
    }
  }
`;

const Cards = styled.div`
  background:white;
  color: black;
  font-family: Inter, sans-serif;

  .container{
    padding-top:2rem;
    padding-bottom:2rem;
  }

  .cards {
    display: flex;
  }

  .cards .text-card {
    margin: 1.25rem;
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .magenta {
    color: #e512d0;
    font-size: 3rem;
    display: flex;
    justify-content: center;
  }

  .h2Section {
    font-size: 2.5rem;
    color: white;
    padding-top: 2rem;
    padding-left: 1.25rem;
  }

  p {
    font-weight: 500;
  }
  h3 {
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
  }

  h3,
  h2,
  p {
    font-family: Inter, sans-serif;
  }

  .gray{ background: #D9D9D9; }
  &.background{ background:#E512D0; }
  .text-background { background: white;}
  //---------------------------------MEDIA QUERIES---------------------------------

  @media (max-width: 46.25rem) {
    h2 {
      font-size: 5rem;
    }

    .cards {
      flex-direction: column;
    }
  }

  @media (max-width: 27rem) {
    .h2Section {
      font-size: 1.75rem;
      text-align: center;
      padding-top: 1rem;
      padding-left: 0;
    }

    .text-card > h3 {
      font-size: 1.25rem;
    }
    .text-card > p {
      margin-top: 1rem;
      font-weight: 300;
    }
    .magenta {
      font-size: 2.5rem;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

const Scroll = styled.div``;

const Navbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 15;
  background: #67646c;
  .nav-link {
    color: #e2ded8;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 27rem) {
    .nav-link {
      font-size: 0.75rem;
      font-weight: 300;
    }
  }
`;

const VngleLogo = styled.div`
h2, h3, p{
  font-family: Inter, sans-serif;
}
  .title-wrapper{
    display: flex;
    align-items: center;
  }

  .left-section{
    margin: 5rem 0;
  }

  //For Vngle Logo
  .background-img{
    max-width: 40%;
    z-index: 0;
    margin: 3rem 3rem;
  }

  .iphone-img{
    max-width: 30%;
    z-index: 0;
    border-radius:3rem;
  }

  .container > .div {
    flex-basis: 100%;
  }
 
  .cards {
    display:flex;
    align-items:center;
  }

  .cards .text-card {
    margin: 1.25rem;
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .text-card {
    background: #D9D9D9;
  }

  .yellow-border{ 
    border-style:solid;
    border-color: #FFCC35;
  }
  .pink-border { 
    border-style:solid;
    border-color: #E512D0; 
  }
  .cyan-border { 
    border-style:solid; 
    border-color: #1EE4F0; 
  }

  .background{
    background:#615e64;
  }

  .height{
    margin: 5rem 0;
  }

  //-------------------------------@MEDIA QUERIES------------------------------
  @media(max-width: 46.25rem){
    .media{
      flex-direction:column;
    }

  }

`
export default technology;
