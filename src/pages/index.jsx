import React from "react"
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Image,
  Badge,
} from "react-bootstrap"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsSubCard from "../components/landing/newsSubCard"
import StorySlider from "../components/landing/storySlider"
import SimpleSubForm from "../components/landing/simpleSubForm"
import ActionCard from "../components/landing/actionCard"

import World from "../../static/images/landing/world.svg"
import Culture from "../../static/images/landing/culture.svg"
import Transparent from "../../static/images/landing/transparent.svg"
import Search from "../../static/images/landing/search.svg"
import Request from "../../static/images/landing/request.svg"
import Capture from "../../static/images/landing/capture.svg"
import Distribute from "../../static/images/landing/distribute.svg"
import MozillaLogo from "../../static/images/landing/mozilla.png"
import ColumbiaLogo from "../../static/images/landing/columbia-tamer.png"
import GoodieNationLogo from "../../static/images/landing/goodie-nation.png"

const IndexPage = () => {
  const heroBtnText = ["Request Coverage", "Report a Story"]
  const mainFeatureData = [
    {
      imgSrc: Culture,
      title: "Cross-Cultural Authenticity",
      description:
        "Reporting on stories from all sides of cities to ensure holistic representation.",
    },
    {
      imgSrc: Transparent,
      title: "Credible Transparency",
      description:
        "There’s no agenda, just real stories from real people on the communities they love.",
      offset: 1,
    },
    {
      imgSrc: Search,
      title: "Vetted + Verifiable ",
      description:
        "Our reality reporters are vetted and their stories are verified by communities.",
      offset: 1,
    },
  ]
  const processData = [
    {
      title: "Local coverage requested",
      description:
        "Know something that’s under reported? Whether it’s a protest, a local election, or just a high school game, Vngle’s got you covered.",
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
  ]
  const actionCardData = [
    {
      title: "I need coverage",
      text: (
        <>
          Know a topic that's underreported near you? <br /> Text "COVERAGE" to{" "}
          <b>(678) 995-5121</b> OR
        </>
      ),
      btn: {
        href:
          "https://docs.google.com/forms/d/e/1FAIpQLSdn0-K37ukwXDy-A5KjNrvuGKAsGgbO-Aqk6i0uVllwf5SNNg/viewform",
        text: "Request Coverage",
      },
    },
    {
      title: "I have a story",
      text: (
        <>
          Have a community story or experience to share? <br />
          We'd love to feature it.
        </>
      ),
      btn: {
        href:
          "https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true",
        text: "Report a Story",
      },
    },
  ]

  return (
    <Layout>
      <SEO title="Various angles on local news driven by you" />

      <HeroContainer>
        <Row>
          <Col className="first text-md-left text-center" md={6} sm={12}>
            <h1 className="display-4 font-weight-bolder mb-4">
              Local Reality News
              <br />
              <span className="highlight">For the People</span>
              <br />
              <span className="highlight">By the People</span>
            </h1>
            <Row>
              {heroBtnText.map((text, i) => (
                <Col className="mb-4" xl={6} lg={12} key={i}>
                  <Button>{text}</Button>
                </Col>
              ))}
            </Row>
            <Subtitle className="mb-4">
              Watch raw stories from those in the midst of what’s happening. We
              cover “various angles”, giving you all the viewpoints you don’t
              hear and coverage you don’t get.{" "}
              <Badge variant="primary">Sign up today</Badge>
            </Subtitle>
          </Col>
          <Col>
            {/* Consider hiding form in small screen sizes */}
            <NewsSubCard />
          </Col>
        </Row>
      </HeroContainer>

      {/* <Jumbotron className="bg-primary py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={2}>
              <Image src={CityLogo} alt="City logo" width="100%" />
            </Col>
            <Col>
              <h1>
                <i>Greatest Artist On the Southside</i>
              </h1>
            </Col>
            <Col md={2}>
              <Button variant="outline-dark">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron> */}

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
          <Col lg sm={12}>
            <a href="https://www.mozilla.org">
              <img alt="Mozilla logo" src={MozillaLogo} width={200} />
            </a>
          </Col>
          <Col lg sm={12}>
            <a href="https://www8.gsb.columbia.edu/socialenterprise/">
              <img
                alt="Columbia Tamer Center logo"
                src={ColumbiaLogo}
                width={200}
              />
            </a>
          </Col>
          <Col lg sm={12}>
            <a href="https://goodienation.org/">
              <img
                alt="Goodie Nation logo"
                src={GoodieNationLogo}
                width={200}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

const HeroContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 7rem;

  h1 {
    line-height: 1.4em;
  }

  .row {
    justify-content: center;
  }

  .first {
    .btn {
      font-size: 1.3rem;
      padding: 0.5rem 2rem;
      border-radius: 50px;
      font-weight: bold;
    }
  }
`

const TopFeatureContainer = styled(Container)`
  text-align: center;
  margin-bottom: 7rem;

  & > img {
    width: 100%;
    margin-top: -15vw;
  }
`

const MainFeatureContainer = styled(Container)`
  text-align: center;

  h2 {
    font-weight: 800;
  }

  .row {
    justify-content: center;
  }
`

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
`

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
`

const Subtitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5em;
`

export default IndexPage
