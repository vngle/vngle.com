import React from "react"
import styled from "styled-components"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"
import InstaFeed from "../components/frontPage/instaFeed"
import NewsFeed from "../components/frontPage/newsFeed"

export default () => (
  <Layout>
    <SEO title="College Park Home" />
    <StyledJumbotron className="position-relative">
      <Image src="collegepark/cp.jpg" alt="Atlanta city view" bg />
      <h1 className="display-1 font-weight-bold">College Park</h1>
    </StyledJumbotron>
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
  background-color: transparent;
  color: ${props => props.theme.colors.light};
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 0) 0%,
    rgba(33, 37, 41, 0.3) 50%,
    rgba(33, 37, 41, 0.7) 100%
  );
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
