import React from "react"
import styled from "styled-components"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { FcBookmark } from "react-icons/fc"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import InstaFeed from "../components/frontPage/instaFeed"
import NewsFeed from "../components/frontPage/newsFeed"
import WeatherWidget from "../components/frontPage/weatherWidget"

export default () => (
  <Layout>
    <SEO title="College Park Home" />
    <StyledJumbotron>
      <Image src="collegepark/cp.jpg" alt="Atlanta city view" bg />
      <Row className="align-items-end">
        <Col>
          <h1 className="display-1">College Park</h1>
          <Row as={Col}>
            {moment().format("dddd, MMMM D, YYYY")}
            <WeatherWidget cityId={4188815} />
          </Row>
        </Col>
        <Col md="auto">
          <h4>
            <FcBookmark />
            Bookmark Me!
          </h4>
        </Col>
      </Row>
    </StyledJumbotron>

    <Container fluid></Container>

    <ContentContainer fluid>
      <Row>
        <Col lg={8} md={7} xs={12}>
          <div className="category-container">
            <h1 className="display-3">Featured</h1>
            <div className="ribbon" />
          </div>
          <InstaFeed />
        </Col>
        <Col>
          <div className="category-container">
            <h1 className="display-3">News</h1>
            <div className="ribbon" />
          </div>
          <NewsFeed />
        </Col>
      </Row>
    </ContentContainer>
  </Layout>
)

const StyledJumbotron = styled(Jumbotron)`
  position: relative;
  background-color: transparent;
  color: ${props => props.theme.colors.light};
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
  }

  h4 {
    font-family: Inter, sans-serif;
  }

  .row {
    align-items: center;
  }
`

const ContentContainer = styled(Container)`
  .category-container {
    display: flex;
    align-items: center;

    h1 {
      display: inline-block;
      font-family: "Inter", sans-serif;
      font-weight: bold;
      font-style: italic;
    }

    .ribbon {
      background: ${props => props.theme.colors.primary};
      width: 100%;
      height: 10px;
      margin-left: 10px;
    }
  }
`
