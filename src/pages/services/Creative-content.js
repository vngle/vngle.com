import React from "react";
import styled from "styled-components";
import Layout from "@components/Layouts/MainLayout";
import Background from "@images/services/creative_content_background.jpeg";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Button } from "react-bootstrap";
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
              <Button className="animated-btn">Contact Us Today</Button>
            </div>
          </motion.div>
        </Container>
        <img src={Background} alt="" className="hero-img" />
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
      <br />
      <HeContainer>
        <div>
          <StaticImage
            className="img"
            src="../../images/services/k.jpg"
            alt="Hand holding camera"
          />
        </div>
      </HeContainer>

      <br />

      <RContainer>
        <div>
          <StaticImage
            className="img"
            src="../../images/services/g.jpg"
            alt="Drone Flying"
          />
        </div>
      </RContainer>

      <Mcontainer>
        <div className="container">
          <div className="text-wrap">
            <h2 class="display-2">
              Let’s grow your content strategy today.
              <Button
                className="btn"
                href="https://forms.gle/e6y4Gkna5S9kymdE8"
              >
                Contact Us Today
              </Button>
            </h2>
          </div>
        </div>
      </Mcontainer>
      <small class="lead text-center">𝐎𝐮𝐫 𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐞 𝐂𝐨𝐧𝐭𝐞𝐧𝐭 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐲 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐚𝐫𝐞 𝐬𝐞𝐩𝐚𝐫𝐚𝐭𝐞 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐕𝐧𝐠𝐥𝐞 𝐧𝐞𝐰𝐬𝐫𝐨𝐨𝐦. 𝐂𝐥𝐢𝐞𝐧𝐭𝐬 𝐚𝐧𝐝 𝐛𝐫𝐚𝐧𝐝𝐬 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐕𝐧𝐠𝐥𝐞’𝐬 𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐞 𝐂𝐨𝐧𝐭𝐞𝐧𝐭 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐲 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐝𝐨 𝐧𝐨𝐭 𝐢𝐧𝐟𝐥𝐮𝐞𝐧𝐜𝐞 𝐭𝐡𝐞 𝐞𝐝𝐢𝐭𝐨𝐫𝐢𝐚𝐥 𝐝𝐢𝐬𝐜𝐫𝐞𝐭𝐢𝐨𝐧 𝐨𝐟 𝐨𝐮𝐫 𝐧𝐞𝐰𝐬 𝐫𝐞𝐩𝐨𝐫𝐭𝐢𝐧𝐠 𝐢𝐧 𝐚𝐧𝐲 𝐟𝐨𝐫𝐦. 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐞𝐥𝐲, 𝐜𝐮𝐬𝐭𝐨𝐦 𝐬𝐭𝐨𝐫𝐲𝐭𝐞𝐥𝐥𝐢𝐧𝐠 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐨𝐮𝐫 𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐞 𝐌𝐞𝐝𝐢𝐚 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐝𝐨 𝐩𝐞𝐫𝐦𝐢𝐭 𝐭𝐡𝐞 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐯𝐞 𝐢𝐧𝐩𝐮𝐭 𝐨𝐟 𝐭𝐡𝐞 𝐜𝐥𝐢𝐞𝐧𝐭𝐬 𝐚𝐧𝐝 𝐛𝐫𝐚𝐧𝐝𝐬 𝐰𝐞 𝐰𝐨𝐫𝐤 𝐰𝐢𝐭𝐡.</small>
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
`;

const HeContainer = styled.div`
  img {
    posiiton: absolute;
    width: 100%;
    padding-left: 0.1rem;
  }
`;

const RContainer = styled.div`
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

  .mb {
    display: flex;
    align-items: center;

    ,
    p {
      font-size: 3rem;
      font-weight: bold;
      float: left;
      font-family: Century Gothic;
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

  // @media(max-width: 46.25rem) {

  //   img {
  //       border-radius: 4rem;
  //       width: 70%;
  //       margin-left: auto;
  //       padding-bottom: 2rem;
  //     }
  //   }
`;

const Mcontainer = styled.div`

.container {
  padding-left: 0rem;
  padding-right: 0rem;
  width: 100%;
}
  .text-wrap > h2 {
    padding-top: 10rem;
  }
  h1 {
    font-weight: bold;
    font-family: Century Gothic;
    // font-size: 5rem;
    text-align: center;
  }

  h2 {
    width: 100%;
    background: #1ee4f0;
    margin-top: 1rem;
    font-weight: bold;
    font-family: Century Gothic;
    padding-bottom: 9rem;
    text-align: center;
  }

  .btn {
    color: white;
    letter-spacing: 1.7px;
    background: #000000;
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
