import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import J from "@images/services/j.webp"
import { StaticImage } from "gatsby-plugin-image";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";


const creativeContent = () => {
  return (
    <Layout>
    <HeroContainer className="main-banner">
        <motion.div
          animate={{ y: [100, 0], scale: [3.5, 1] }}
          transition={{ duration: 2.3 }}
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
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.3, delay: 2.5 }}
        >
          <div className="center-content">
            <h1 className="logo-title">Services</h1>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [300, 0] }}
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <div className="centercontent">
            <h1 className="main-title">Creative Content Strategy</h1>
          </div>

          <div className="center-content">
          <Button className="animated-btn" href="https://forms.gle/e6y4Gkna5S9kymdE8">Launch Your Campain
            </Button>
          </div>
        </motion.div>

        <img src={J} alt="" className="hero-img" />
      </HeroContainer>
     
     
        <MaContainer>
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
        </MaContainer>
       

      <Mcontainer>
        {/* <Container> */}
        <h1 class="display-2">
          Leverage our grassroots storytelling expertise to capture a specific
          story you want covered.
        </h1>
        {/* </Container> */}
      </Mcontainer>

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
    </Layout>
  );
};

const HeroContainer = styled(Container)`
  position: relative;
  width: 100%;

  &.main-banner {
    min-height: 44rem;
    padding: 9rem;
  }

  h1 {
    font-family: Inter, sans-serif;
  }


   .centercontent {
   
     
    h1 {
      font-family: Inter, sans-serif;
      margin: 10px 0 0 10px;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      opacity: 0;
      animation: type 4s steps(60, end) forwards;
      animation-delay: 2s;
    
    }
    
    @keyframes type {
       0% {
      opacity: 1;
    }
    100% {
      width: 30em;
      opacity: 1;
    }
    }
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

  // @media(max-width: 46.25rem) {

  //   .centercontent {
         
  //     h1 {

     
  //   }
  // }
  // }
`;




const MaContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  .mb {
    display: flex;
    align-items: center;

    ,
    p {
      font-size: 3rem;
      font-weight: bold;
      float: left;
      padding-left: 1rem;
      font-family: Century Gothic;
      
    }
  }

  .gatsby-image-wrapper {
    height: 100%;
    bottom:0;
 

    img {
      border-radius: 4rem;
      width: 70%;
      margin-left: auto;
      padding-bottom: 2rem;
    }
  }

  // @media(max-width: 46.25rem) {
   
  //   img {
  //       border-radius: 4rem;
  //       width: 70%;
  //       margin-left: auto;
  //       padding-bottom: 2rem;
  //     }
  //   }

`;



const Mcontainer = styled.h1`
h1 {
  font-weight: bold;
  font-family: Century Gothic;
  
  text-align: center;
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
    font-family: Century Gothic;
    text-align: left;
    .f {
        color: var(--bs-primary);
      }
  }

  ,p {
    color: white;
    font-weight: bold;
    font-size: 3rem;
    font-family: Century Gothic;
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
