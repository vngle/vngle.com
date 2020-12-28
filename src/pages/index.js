import React from "react";
import { Link } from "gatsby";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Image,
  Badge,
} from "react-bootstrap";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import NewsSubCard from "../components/NewsSubCard";
import StorySlider from "../components/StorySlider";
import SimpleSubForm from "../components/landing/SimpleSubForm";
import ActionCard from "../components/landing/ActionCard";

import GaFlag from "../../static/images/landing/ga-flag.svg";
import World from "../../static/images/landing/world.svg";
import Culture from "../../static/images/landing/culture.svg";
import Transparent from "../../static/images/landing/transparent.svg";
import Search from "../../static/images/landing/search.svg";
import Request from "../../static/images/landing/request.svg";
import Capture from "../../static/images/landing/capture.svg";
import Distribute from "../../static/images/landing/distribute.svg";
import MozillaLogo from "../../static/images/landing/mozilla.png";
import ColumbiaLogo from "../../static/images/landing/columbia-tamer.png";
import GoodieNationLogo from "../../static/images/landing/goodie-nation.png";
import EnvisionLogo from "../../static/images/landing/envision.png";
import DivIncLogo from "../../static/images/landing/divinc.png";
import CollegeParkLogo from "../../static/images/landing/cp-logo.png";

const IndexPage = () => {
  const heroBtn = [
    {
      value: "Request a Story",
      href: "https://blake680703.typeform.com/to/zwc2R2og",
    },
    {
      value: "Report a Story",
      href:
        "https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true",
    },
  ];
  const mainFeatureData = [
    {
      imgSrc: Culture,
      title: "Cross-Cultural Authenticity",
      description:
        "Reporting on stories from all sides of cities to ensure holistic representation.",
    },
    {
      imgSrc: Transparent,
      title: "Credible & Verifiable Transparency",
      description:
        "There’s no agenda, just real stories from real people on the communities they love.",
    },
    {
      imgSrc: Search,
      title: "Aggregated Vetted Sources",
      description:
        "Our reality reporters are vetted and their stories are verified by communities.",
    },
  ];
  const processData = [
    {
      title: "Local coverage requested",
      description:
        "Know something that’s going under reported? Whether it’s a local election, a protest, or just a high school game, Vngle’s got you covered.",
      imgSrc: Request,
    },
    {
      title: "Reality reporters assigned",
      description:
        "After a request is accepted, we match it with a local reality reporter based on their location and area of expertise.",
      imgSrc: Capture,
    },
    {
      title: "Stories captured + circulated",
      description:
        "After a story is captured, it’s made public and distributed across its home community and any others that would benefit from the information.",
      imgSrc: Distribute,
    },
  ];
  const actionCardData = [
    {
      title: "I need coverage",
      text: (
        <>
          Know a topic that's underreported near you? <br /> Text "STORY" to{" "}
          <b>(678) 995-5121</b> OR
        </>
      ),
      btn: {
        to: "https://blake680703.typeform.com/to/zwc2R2og",
        text: "Request a Story",
      },
    },
    {
      title: "I want to report",
      text: (
        <>
          Want to be a reality reporter for your community?
          <br />
          Click the button below.
        </>
      ),
      btn: {
        to: "/report",
        text: "Report a story",
      },
    },
  ];
  const workedWithData = [
    {
      src: MozillaLogo,
      alt: "Mozilla logo",
      href: "https://builders.mozilla.community/",
    },
    {
      src: ColumbiaLogo,
      alt: "Columbia Tamer Center logo",
      href: "https://www8.gsb.columbia.edu/socialenterprise/",
    },
    {
      src: EnvisionLogo,
      alt: "Envision logo",
      href: "https://www.envisionaccelerator.com/",
    },
    {
      src: DivIncLogo,
      alt: "DivInc logo",
      href: "https://www.divinc.org/apply",
    },
    {
      src: GoodieNationLogo,
      alt: "Goodie Nation logo",
      href: "https://goodienation.org/",
    },
    {
      src: CollegeParkLogo,
      alt: "College Park (GA) logo",
      href: "https://www.collegeparkga.com/",
    },
  ];

  return (
    <Layout>
      <SEO title="Nonpartisan Grassroots Reality News" />

      <HeroContainer>
        <Row className="row-intro">
          <Col className="col-intro text-md-left text-center" md={6} sm={12}>
            <h1 className="display-5 font-weight-bolder mb-4">
              Various Angles of Nonpartisan Reality News
              <br />
              <span className="highlight">For the People</span>
              <br />
              <span className="highlight">By the People</span>
            </h1>
            <Row>
              {heroBtn.map(({ value, href }, i) => (
                <Col className="mb-4" xl={6} lg={12} key={i}>
                  <Button href={href}>{value}</Button>
                </Col>
              ))}
            </Row>
            <Subtitle className="mb-4">
              Watch authentic stories from real people in the midst of what’s
              happening. We bring you <b>various angles</b> of nonpartisan
              coverage to give you all the stories you don’t hear and the
              viewpoints you don’t get.{" "}
              <Badge variant="primary">
                <a
                  href="http://eepurl.com/g1cJk5"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: "black" }}
                >
                  Sign up today
                </a>
              </Badge>
            </Subtitle>
          </Col>
          <Col className="col-hook">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                src="https://www.youtube.com/embed/nRzsnAdlqOc?autoplay=1&modestbranding=1&mute=1"
                title="Vngle promo video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="embed-responsive-item"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Consider hiding form in small screen sizes */}
            <NewsSubCard
              title="Get the nonpartisan pulse on what's going on near you."
              subtitle="Sign up for balanced coverage on everything from local campaigns, state politics, to COVID-19 updates."
            />
          </Col>
        </Row>
      </HeroContainer>

      <Jumbotron className="bg-primary py-5 mb-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={1}>
              <img
                src={GaFlag}
                alt="flag of the state of Georgia"
                width="100%"
              />
            </Col>
            <Col xs="auto">
              <Subtitle className="mb-sm-0 mb-4 mx-auto">
                Check out our Georgia coverage!
              </Subtitle>
            </Col>
            <Col xs="auto">
              <Button variant="outline-dark" size="md" as={Link} to="/georgia">
                See Coverage Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <TopFeatureContainer>
        <Title className="display-3">
          The real scoop from real people, sharing their truth on what’s
          happening.
        </Title>
        <Subtitle className="mb-5">
          We bring you authentic on-the-ground perspectives that mainstream
          media won’t. Our cross-cultural coverage highlights the diverse
          experiences and realities people face. It puts you in the shoes of
          people from all walks of life.
        </Subtitle>
        <StorySlider />
        <Image src={World} alt="World map" />
      </TopFeatureContainer>

      <MainFeatureContainer className="my-5">
        <Title className="display-3 mb-5">
          Bringing you “various angles” of coverage through
        </Title>
        <Row>
          {mainFeatureData.map(({ imgSrc, title, description, offset }, i) => (
            <Col key={i} lg={{ offset }} md sm={8} className="mb-md-0 mb-5">
              <img src={imgSrc} alt="feature" width="80%" className="mb-3" />
              <h3 className="font-weight-bold">{title}</h3>
              <p>{description}</p>
            </Col>
          ))}
        </Row>
      </MainFeatureContainer>

      <ProcessContainer>
        <Jumbotron className="bg-primary shadow">
          <h1 className="display-4">How Your Community is Covered</h1>
          {processData.map(({ title, description, imgSrc }, i) => (
            <Row className="text-center text-md-left" key={i}>
              <Col md={{ offset: i % 2 !== 0 && 1 }}>
                <Image src={imgSrc} alt="Process image" width="100%" />
              </Col>
              <Col
                md={{
                  span: 6,
                  offset: i % 2 === 0 && 1,
                  order: i % 2 !== 0 && "first",
                }}
              >
                <h3 className="bg-secondary rounded-circle mx-lg-0 mx-auto">
                  {i + 1}
                </h3>
                <h2>{title}</h2>
                <p>{description}</p>
              </Col>
            </Row>
          ))}
        </Jumbotron>
      </ProcessContainer>

      <Container className="my-5 text-center">
        <Title className="display-3 mb-5">
          <i style={{ fontWeight: "100" }}>Your Community Needs You:</i>
          <br />
          Get Involved
        </Title>
        <SimpleSubForm />
        <Row className="card-row">
          {actionCardData.map((props, i) => (
            <Col lg={6} sm={12} key={i}>
              <ActionCard {...props}>{props.text}</ActionCard>
            </Col>
          ))}
        </Row>
      </Container>

      <Container as="section" className="my-4">
        <Row as={Col} className="justify-content-center">
          <h1 className="mb-4">Who We've Worked With</h1>
        </Row>
        <Row className="align-items-center text-center">
          {workedWithData.map(({ src, alt, href }, i) => {
            return (
              <Col md={4} sm={12} className="mb-5" key={i}>
                <a href={href}>
                  <img alt={alt} src={src} width={200} />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

const HeroContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 5rem;

  h1 {
    line-height: 1.4em;
  }

  .row {
    justify-content: center;
  }

  .row-intro {
    margin-bottom: 3rem;
  }

  .col-intro {
    .btn {
      font-size: 1.3rem;
      padding: 0.5rem 2rem;
      border-radius: 50px;
      font-weight: bold;
    }
  }

  .col-hook {
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    background-clip: content-box;
    border-radius: 40px;
    transition: all 0.2s;
  }

  .col-hook:hover {
    filter: drop-shadow(0 1rem 3rem rgba(0, 0, 0, 0.175));
    border-radius: 0px;
    transition: all 0.2s;
  }
`;

const TopFeatureContainer = styled(Container)`
  text-align: center;
  margin-bottom: 7rem;

  & > img {
    width: 100%;
    margin-top: -15vw;
  }
`;

const MainFeatureContainer = styled(Container)`
  text-align: center;

  h2 {
    font-weight: 800;
  }

  .row {
    justify-content: center;
  }
`;

const ProcessContainer = styled(Container)`
  margin-bottom: 7rem;

  .jumbotron {
    border-radius: 1.25rem;
    padding: 3rem;

    h1 {
      font-weight: 800;
      margin-bottom: 3rem;
    }

    .row {
      align-items: center;
      margin-bottom: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 1.25rem;

      h3 {
        margin-bottom: 1rem;
        width: 1.5em;
        height: 1.5em;
        text-align: center;
        color: white;
      }
    }
  }
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
`;

const Subtitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5em;
`;

export default IndexPage;
