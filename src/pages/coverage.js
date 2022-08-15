import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import StorySlider from "../components/Sliders/StoryCarousel";


import NewsSubCard from "../components/Cards/NewsSubCard";
import Grid from "../components/Grids/Grid";
import List from "../components/Grids/List";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

window.addEventListener("scroll", reveal);

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

const GeorgiaPage = ({
  data: {storiesGeorgia, storiesNational },
}) => {
  return (
    <Layout>
      <Header>
            <div className="content-wrapper">
            <div className="text-wrap container">
              <h1>Our Coverage</h1>
            </div>
            <StaticImage src="../images/camera.jpg" class="background-img"/>
            </div>
      </Header>
      {/* --------------------Based In Georgia--------------------*/}
      <Header className="background-black">
        <Container>
            <h2>We're Based in Georgia, but Our Work Reaches Nationally</h2>
        </Container>
      </Header>
      {/* --------------------Navbar--------------------*/}
      <Navbar>
      <nav className="navbar navbar-expand-lg navbar-light" id="Top">
        <li className="nav-item">
          <a className="display-3 fw-bolder"href="#Georgia">Georgia</a>
          </li>
          <li className="nav-item">
          <a className="display-3 fw-bolder" href="#National">National</a>
          </li>
      </nav>
      </Navbar>
      

      {/* --------------------Slider--------------------*/}
      <Container style={{marginTop:'2rem'}}>
        <div className="mb-5">
          <StorySlider fetchNum={50} interval={10000} hashTags={["Georgia"]} />
        </div>
      </Container>

       {/* --------------------Stay Updated--------------------*/}
      <Container style={{background:'#FFCC35'}}>
        <NewsSubCard
          title="Stay Updated And Follow Our Movement."
          subtitle="Sign up for balanced coverage on everything from local campaigns, state politics, to COVID-19 updates."
        />
      </Container>

        {/* --------------------Georgia Title--------------------*/}

       <Seo title={`Georgia`} />

      <StyledJumbotron className="mb-5" id="Georgia">
        <CoverImage src="https://source.unsplash.com/tjdu7p_PaEM" alt="Georgia" />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">Georgia Stories</h1>
          </Col>
        </Row>
      </StyledJumbotron>


      <Navbar className="sticky-top">
        <div className="sticky">
        <a className="btn btn-primary fw-bolder reveal active" href="#Top">Back to Top</a>
        </div>
      </Navbar>
       {/* --------------------Georgia Stories--------------------*/}
      <Container>
        <div className="mb-5">
          <Grid items={storiesGeorgia.byType.items} />
          <div className="text-center">
            <Button as={Link} to="/georgia" size="lg" className="">
              See more
            </Button>
          </div>
        </div>
   </Container>
      {/* --------------------National Title--------------------*/}
      <StyledJumbotron className="mb-5" id="National">
        <CoverImage src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">National Stories</h1>
          </Col>
        </Row>
      </StyledJumbotron>

<Container>
        {/* --------------------National Stories--------------------*/}
        <div>
          <List items={storiesNational.byType.items} />
        </div>

      <Header>
        <Container>
          <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf80FHwD9CVDZK954uUQ_-_0nkMvBGYT1vZ6nHvXsD12H7fDg/viewform"
                target="blank"
                className="display-3 text-black"
              >Work With Us Today!</a>
        </Container>
      </Header>
  </Container>
    </Layout>
  );
};

const StyledJumbotron = styled.div`
  margin-top:2rem;
  position: relative;
  background-color: transparent;
  color: var(--bs-light);
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 0) 0%,
    rgba(33, 37, 41, 0.3) 50%,
    rgba(33, 37, 41, 0.9) 100%
  );
  padding-top: 9rem;
  padding-bottom: 2rem;

  h1 {
    font-weight: 800;
    text-align: center;
    margin-bottom:4rem;
  }

  h4 {
    font-family: Inter, sans-serif;
  }

  .row {
    align-items: center;
  }
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Header = styled.div`
    position: relative;
    background: #FFCC35;
  h1{
    color:white;
    font-family: Inter, sans-serif;
    font-size: 6rem;
    margin-bottom:15rem;
    margin-top:6rem;
    z-index: 10;
    margin-left:2rem;
  }

  h2{
    font-family: Inter, sans-serif;
    display:flex;
    justify-content: center;
    color:white;
    font-weight: 500;
    font-size: 3rem;
    padding-top: 2rem;
  }

  .background-img{
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

  .text-wrap{
    z-index: 10;
    display: flex;
    align-items: center;
  }

  a{
    text-align:center;
    text-decoration:none;
    font-weight: 500;
    display:flex;
    justify-content:center;
  }

  &.background-black{
    background:black;
  }
  @media (max-width: 36.25rem){
    h2{ 
      font-size: 1rem;
      padding-top:1rem;
    }
    h1{ 
      font-size:2rem;
      margin-bottom:7rem;
      margin-left:0.75rem;
    }
  }
`

const Navbar = styled.nav`
margin-top:2rem;

  nav{
    display:flex;
    justify-content: space-around;
  }

  li{
    list-style-type:none;
  }
 a{
  color:black;
  background: #E8D52CF7;
  padding: 0 4rem;
  text-decoration:none;
  z-index:15;
 }

 .reveal{
  opacity: 0;
 }
 .reveal.active{
  opacity: 1;
 }

 @media(max-width: 28rem){
  a {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
  .sticky > a{
    font-size:1rem;
  }

}
`

export const query = graphql`
  {
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
    storiesNational: allStory {
      byType(
        type: "Story"
        limit: 20
        sortDirection: DESC
        filter: { tags: { contains: "usa" } }
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

export default GeorgiaPage;
