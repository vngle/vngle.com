import React from "react";
import styled from "styled-components";
import "styled-components/macro";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FcConferenceCall } from "react-icons/fc";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "@components/Layouts/MainLayout";
import Seo from "@components/Seo";
import ClientLogoGrid from "@components/Grids/PartnerLogoGrid";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <Container>
        <MainPageContainer>

          <SplitSection background="var(--bs-primary)" className="gy-3">
          <Col md={6}>
          <Fade left>


            <div className="content p-md-5">
                <p className="sup">Grassroots Newswire</p>
                <Heading>
                  <u>Your city + our grassroots operations</u>: Expand your
                  coverage with our visual catalog of local nonpartisan
                  insights.
                </Heading>
                </div>
              </Fade>
            </Col>

            <Col className="image" md={6}>
                <Fade right>
                  <StaticImage
                    src="../../images/services/newswire.png"
                    alt="City with networks on top"
                  />
                </Fade>
            </Col>
        </SplitSection>

          <Section className="p-md-5">
            <Fade bottom>
              <Heading weight="500" lineHeight="1.3em">
                Our newswire accelerates your ability to engage & learn from
                audiences through trusted and truly representative original
                local content. We deploy trained local experts and patented
                verification technology to confidently grow your media strategy
                with authentic ground-level perspectives.
              </Heading>
            </Fade>
            <Fade bottom>
              <Heading weight="500" lineHeight="1.3em">
                <b>
                  If you’re are a media organization needing to engage diverse
                  audiences, a local government needing reliable hyper-local
                  insights, or an organization needing to monitor your
                  community, we can support you.
                </b>
              </Heading>
            </Fade>
          </Section>

            <Fade bottom>
              <Section background="#1ee592" className="p-md-5">
                <FcConferenceCall />
                <Heading>Interested in working with us?</Heading>
                <a href="https://forms.gle/e6y4Gkna5S9kymdE8">
                  <motion.button className="btn animated-button" whileHover={{ scale: 1.1 }}
                      size="lg"
                      variant="light"
                      >Find out more today!                    
                  </motion.button>
                </a>
              </Section>
            </Fade>

          <Fade bottom>
            <Section>
              <Heading center>Creative Content Services</Heading>
            </Section>
          </Fade>

          <SplitSection background="#3cf" className="gy-3">
            <Col md={6}>
                    <Fade right>
                      <div className="content p-md-5">
                        <p className="sup">SPECIAL INTEREST COVERAGE</p>
                        <Heading>
                          Create a curated custom content campaign that helps you
                          connect with local audiences in meaningful ways.
                        </Heading>
                        <p>
                          Maximize your audience reach with our on-demand tailored
                          content. Leverage our grassroots storytelling expertise to
                          capture a specific story you want covered. Our award-winning
                          approach combines community engagement, media creation and
                          grassroots strategy to make your desired stories resonate
                          across channels to engage the right audiences.
                        </p>
                        <a href="https://forms.gle/e6y4Gkna5S9kymdE8">
                        <motion.button className="btn animated-button" whileHover={{ scale: 1.1 }}
                            size="lg"
                            variant="light"
                            >Launch your campaign
                        </motion.button>
                      </a>
                      </div>
                    </Fade>
                  </Col>

            <Col className="image" md={6}>
              <Fade left>
                <StaticImage
                  src="../../images/services/sic.png"
                  alt="Hand holding mics"
                />
              </Fade>
            </Col>
          </SplitSection>

          <SplitSection background="#ff52db" className="gy-3">
            <Col md={{ span: 6, order: "last" }}>
              <Fade left>
                <div className="content p-md-5">
                  <p className="sup">COMMUNITY WORKSHOPS & EVENTS</p>
                  <Heading>
                    Equip your community with the media skills to properly
                    represent themselves.
                  </Heading>
                  <p>
                    Vngle empowers communities with our grassroots reporting
                    practices to ensure pressing stories are captured and
                    misinformation is detered from it’s origin. Our event hosts
                    & sponsors benefit from seeing their own community become a
                    ecosystem to support grassroots reporting. With endless
                    combinations available to infuse our reporting experinces
                    into your live events, Vngle serves as a unique avenue to
                    connect your brand with our impactful culture centered on
                    combatting misinformation & underrepresentation across local
                    communities.
                  </p>
                  <a href="https://forms.gle/e6y4Gkna5S9kymdE8">
                        <motion.button className="btn animated-button" whileHover={{ scale: 1.1 }}
                            size="lg"
                            variant="light"
                            >Host an event with us
                        </motion.button>
                      </a>
                </div>
              </Fade>
            </Col>
            <Col className="image" md={6}>
              <Fade right>
                <StaticImage
                  src="../../images/services/workshop.jpg"
                  alt="Workshop participants group photo"
                />
              </Fade>
            </Col>
          </SplitSection>

          <Fade bottom>
            <Section>
              <p>
                Our Creative Media Services are separate from the Vngle
                newsroom. Clients and brands working with Vngle’s Creative Media
                Services do not influence the editorial discretion of our news
                reporting in any form. Conversely, custom storytelling projects
                through our Creative Media Services do permit the collaborative
                input of the clients and brands we work with.
              </p>
            </Section>
          </Fade>

          {/* <SplitSection background="var(--bs-primary)" className="gy-3">
            <Col md={6}>
              <div className="content p-md-5">
                <p className="sup">INSIGHTS</p>
                <Heading>
                  Get research and consultation on how to address unique
                  concerns that matter most to your city.
                </Heading>
                <p>
                  With Vngle Insights, we listen carefully to your city to
                  ensure everyone’s voices are heard, to get you the data needed
                  to make the best decisions. Our insights make you aware of the
                  matters that are important to constituents. We offer you our
                  grassroots knowledge from working across 21+ cities to give
                  you an advantage in devising positive strategies to address
                  your current challenges.
                </p>
                <Button
                  size="lg"
                  variant="light"
                  href="https://forms.gle/e6y4Gkna5S9kymdE8"
                >
                  Let's work
                </Button>
              </div>
            </Col>
            <Col className="image" md={6}>
              <StaticImage
                src="https://source.unsplash.com/1K6IQsQbizI"
                alt="Neon light that writes 'Data has a better idea'"
              />
            </Col>
          </SplitSection> */}

          {/* <Section className="text-center">
            <Heading center>
              <FcDepartment />
            </Heading>
            <Heading center>
              Why do I need <u>Vngle for Cities</u>?
            </Heading>
            <Heading weight="normal" lineHeight="1.5em" size="2.3rem" center>
              True grassroots engagement by leaders is a necessity in the fast
              changing world we live in. In order to adapt to an ever-changing
              landscape, leaders must keep their finger on the pulse of whatever
              environment they may find themselves in. Our team can help you do
              that.
            </Heading>
            <Button size="lg" href="https://forms.gle/e6y4Gkna5S9kymdE8">
              Let's talk
            </Button>
          </Section> */}

          <Fade bottom>
            <Section>
              <Heading center>Our Georgia Case Studies</Heading>
            </Section>
          </Fade>

          <SplitSection className="gy-3">
            <Col md={6}>
              <Fade right>
                <div className="bg-primary content position-relative d-flex flex-column justify-content-center">
                  <Heading center>
                    Improving city communication in College Park during COVID-19
                  </Heading>
                  <div className="d-flex justify-content-center">
                    <StaticImage
                      src="../../images/services/cp-logo.png"
                      alt="College Park logo"
                      width={200}
                    />
                  </div>
                  <Link to="college-park" className="stretched-link" />
                </div>
              </Fade>
            </Col>
            <Col md={6}>
              <Fade left>
                <BgImageContainer className="position-relative">
                  <StaticImage
                    layout="fullWidth"
                    alt=""
                    src="https://source.unsplash.com/RfiBK6Y_upQ"
                  />
                  <div className="content">
                    <Heading center color="white">
                      Bringing trusted nonpartisan coverage to Georgia local
                      candidates
                    </Heading>
                  </div>
                  <Link to="georgia-election" className="stretched-link" />
                </BgImageContainer>
              </Fade>
            </Col>
          </SplitSection>

          <Section className="text-center">
            <Fade bottom>
              <Heading center>How our coverage works</Heading>
            </Fade>
            <Fade bottom>
              <p>
                We’re an equitable local reporting approach that brings
                nonpartisan coverage to underreported municipalities through
                verifying and training citizens with HD smartphones to serve as
                reporters and editors for the areas they live.
              </p>
            </Fade>
            <Fade>
              <StaticImage
                src="../../images/services/reporter-kit-1.jpg"
                alt="Blake Stoner with reporter kit"
                width={500}
                className="mb-3"
              />
            </Fade>

            <Fade bottom>
              <p className="lead">Interested in working with us?</p>
            </Fade>

            
            <Fade bottom>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button size="lg" href="https://forms.gle/e6y4Gkna5S9kymdE8">
                  Sign up and we'll reach out
                </Button>
              </motion.div>
            </Fade>
          </Section>

          <Fade bottom>
            <Section>
              <Heading center>Who We've Worked With</Heading>
              <ClientLogoGrid />
            </Section>
          </Fade>
        </MainPageContainer>
      </Container>{" "}
    </Layout>
  );
};

export default ServicesPage;

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "bold"};
  font-size: clamp(1rem, 7vw, ${(props) => props.size || "2.6rem"});
  text-align: ${(props) => (props.center ? "center" : "left")};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

const MainPageContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .gatsby-image-wrapper {
    height: 100%;

    img {
      border-radius: 10px;
    }
  }
`;

const SplitSection = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .content {
    background: ${(props) => props.background};
    padding: 2rem;
    border-radius: 10px;
    height: 100%;
    transition: transform 1s;

    p.sup {
      font-weight: bold;
      font-size: clamp(1rem, 2.5vw, 1.5rem);
    }
  }

  .react-reveal {
    height: 100%;
  }

  .animated-button {
    color: #000;
    background-color: #f7f7f7;
    border-color: #f7f7f7;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
    border-radius: 0.25rem;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

const Section = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  border-radius: 10px;

  svg {
    font-size: 5rem;
  }

  .animated-button {
    color: #000;
    background-color: #ffcc35;
    border-color: #ffcc35;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
    border-radius: 0.25rem;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

`;

const BgImageContainer = styled.div`
  display: grid;

  .gatsby-image-wrapper {
    grid-area: 1/1;
  }

  img {
    border-radius: 10px;
  }

  .content {
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
  }
`;
