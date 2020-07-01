import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { FcBookmark } from "react-icons/fc"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ActionButtonGroup from "../components/frontPage/actionBtnGroup"
import InstaFeed from "../components/frontPage/instaFeed"
import NewsFeed from "../components/frontPage/newsFeed"
import WeatherWidget from "../components/frontPage/weatherWidget"

export default ({ data }) => (
  <Layout>
    <SEO title="College Park's News" />

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

    <ContentContainer fluid>
      <Row>
        <Col>
          <div className="category-container">
            <h1 className="display-3">Campaigns</h1>
            <div className="ribbon" />
          </div>
          <Row className="align-items-center justify-content-center">
            {data.allContentfulCampaign.edges.map(({ node: campaign }) => {
              // if no cover image specified, a div with primary background color is used as fallback
              const bgSrc = campaign.cover && campaign.cover.fixed.src

              return (
                <CampaignCol
                  key={campaign.id}
                  className="mb-4"
                  sm={6}
                  md={4}
                  lg
                  xl={3}
                  hasCover={bgSrc}
                >
                  <h1>{campaign.title}</h1>
                  <div className="shade-overlay shadow rounded">
                    {/* use Gatsby Image on fetched images? */}

                    {bgSrc === null ? (
                      <div className="bg" />
                    ) : (
                      <img
                        alt="Campaign background"
                        src={bgSrc}
                        className="bg"
                      />
                    )}
                  </div>
                  <Link
                    to={`/collegepark/${campaign.id}`}
                    className="stretched-link"
                  />
                </CampaignCol>
              )
            })}
          </Row>
        </Col>
      </Row>
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

    <ActionButtonGroup />
  </Layout>
)

export const query = graphql`
  {
    allContentfulCampaign {
      edges {
        node {
          title
          description {
            description
          }
          cover {
            fixed {
              src
            }
          }
          id
        }
      }
    }
  }
`

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

const CampaignCol = styled(Col)`
  position: relative;
  text-align: left;
  color: white;

  h1 {
    position: absolute;
    bottom: 55px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    max-width: 65%;
    overflow: hidden;
  }

  .bg {
    position: relative;
    z-index: -1;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.primary};
    width: ${({ hasCover }) => hasCover && "100%"};
    height: ${({ hasCover }) => (hasCover ? "100%" : "250px")};
  }

  .shade-overlay {
    background: linear-gradient(
      180deg,
      rgba(33, 37, 41, 0) 0%,
      rgba(33, 37, 41, 0.5) 70%,
      rgba(33, 37, 41, 0.9) 100%
    );
    overflow: hidden;
  }
`
