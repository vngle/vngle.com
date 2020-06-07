import React, { useState, useEffect } from "react"
import {
  Jumbotron,
  Container,
  Card,
  Row,
  Col,
  Button,
  Image,
  Carousel,
  Spinner,
} from "react-bootstrap"
import styled from "styled-components"
import Nanogram from "nanogram.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsSubCard from "../components/newsSubCard"
import Typed from "../components/typed"

import HeroImg from "../../static/images/hero.svg"
import MozillaLogo from "../../static/images/mozilla.png"
import ColumbiaLogo from "../../static/images/columbia-tamer.png"
import GoodieNationLogo from "../../static/images/goodie-nation.png"

import CruisePromo from "../../static/images/cruise-promo.png"

const IndexPage = () => {
  const [instaFeed, setInstaFeed] = useState(null)
  const TypedJsOptions = {
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 3000,
    loop: true,
    showCursor: false,
  }

  // fetch insta data w/ Nanogram.js before
  // may componentize in future
  useEffect(() => {
    const fetchInstaFeed = async () => {
      const instaParser = new Nanogram()
      const response = await instaParser.getMediaByUsername("vnglestories")

      setInstaFeed(response)
    }

    fetchInstaFeed()
  }, [])

  return (
    <Layout>
      <SEO title="Various angles on local news driven by you" />

      <Jumbotron className="bg-dark text-light rounded-0 mb-0">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-start justify-content-center mb-5">
              <div>
                <h1 className="display-4">
                  <i>Cruise For a Cause</i>
                </h1>
                <p>
                  A driving demonstration to show <b>#BlackLivesMatter</b>. 100%
                  peaceful. 100% socially distant.
                </p>
              </div>
              <Button
                size="lg"
                variant="primary"
                href="https://forms.gle/N4XctTHnGx3yQUmaA"
              >
                Share your experience!
              </Button>
            </Col>
            <Col md={4} sm={12}>
              <Image src={CruisePromo} width="100%" rounded />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron className="py-5 bg-primary rounded-0">
        <HeroContainer>
          <Row>
            <Col
              className="d-flex flex-column justify-content-center text-center"
              lg
              md
              sm
            >
              <Image
                alt="Man reading newspaper"
                src={HeroImg}
                className="hero-img"
              />
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <NewsSubCard />
            </Col>
          </Row>
        </HeroContainer>
      </Jumbotron>

      <HeroContainer className="py-5">
        <h1 className="text-center display-4 font-weight-bolder mb-5">
          Connecting{" "}
          <span className="highlight">
            <Typed
              strings={["community activists", "residents", "organizations"]}
              config={TypedJsOptions}
            />
          </span>{" "}
          <br />
          to local grassroots affairs and beyond
        </h1>
        <Row className="card-row">
          <Col lg={6} sm={12}>
            <Card>
              <Card.Body>
                <Card.Title>I need coverage</Card.Title>
                <Card.Text>
                  Know a topic that's underreported near you? <br /> Text
                  "COVERAGE" to <b>(678) 995-5121</b> OR
                </Card.Text>
                <Button
                  size="lg"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdn0-K37ukwXDy-A5KjNrvuGKAsGgbO-Aqk6i0uVllwf5SNNg/viewform"
                >
                  Request Coverage
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} sm={12}>
            <Card>
              <Card.Body>
                <Card.Title>I have a story</Card.Title>
                <Card.Text>
                  Have a community story or experience to share? <br />
                  We'd love to feature it
                </Card.Text>
                <Button
                  size="lg"
                  href="https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true"
                >
                  Share a Story
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </HeroContainer>

      {instaFeed === null ? (
        <LoadingWrapper className="d-flex flex-column justify-content-center">
          <SEO title="Various angles on local news driven by you" />
          <Spinner animation="grow" variant="primary" className="m-auto">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </LoadingWrapper>
      ) : (
        <Container as="section">
          <Row className="align-items-center mb-4">
            <Col lg="auto" md="auto" sm="auto" xs="auto">
              <img
                alt="Instagram post"
                src={instaFeed.profile.profile_pic_url}
                width="70px"
              />
            </Col>
            <Col>
              <h2>@vnglestories</h2>
            </Col>
          </Row>
          <Row>
            {instaFeed.profile.edge_owner_to_timeline_media.edges.map(post => (
              <Col key={post.node.id} lg={3} md={4} sm={6} className="mb-4">
                <a href={`https://www.instagram.com/p/${post.node.shortcode}`}>
                  {/* use Gatsby Image */}
                  <img alt="post" src={post.node.thumbnail_src} width="100%" />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      )}

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
  .highlight {
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primary}
    );
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
  }

  .hero-img {
    width: calc(100px + 25vw);
    margin: 0 auto;
  }

  h1 {
    line-height: 1.5em;
  }

  .card {
    .card-title {
      font-family: "Inter", sans-serif;
      font-weight: bold;
      font-size: 2rem;
    }

    .card-subtitle {
      font-family: "Inter", sans-serif;
    }
  }

  .card-row {
    .card {
      text-align: center;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      border: none;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      margin-bottom: 1rem;

      .card-body > * {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }
  }
`

const LoadingWrapper = styled.div`
  height: 100vh;

  & div {
    width: 100px;
    height: 100px;
  }
`

export default IndexPage
