/**
 * Template page for Vngle city front pages
 */

import React from "react";
// import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import { FcBookmark } from "react-icons/fc";
import moment from "moment";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ActionButtonGroup from "../components/frontPage/ActionBtnGroup";
import InstaFeed from "../components/frontPage/InstaFeed";
import NewsFeed from "../components/frontPage/NewsFeed";
import WeatherWidget from "../components/frontPage/WeatherWidget";

/**
 *
 * @param {object} pageContext Data about page passed from createPage() function
 * @param {object} data Data retrieved by GraphQL query to be used on this page
 */
const FrontPageTemplate = ({
  pageContext: { cityId, cityName, coverImage, state },
  // data: {
  //   allContentfulCampaign: { nodes: campaigns },
  // },
}) => (
  <Layout>
    <Seo
      title={`${cityName}, ${state} Local News`}
      description={`${cityName}, ${state}’s frontpage for local news and grassroots reality coverage.`}
    />

    <StyledJumbotron>
      <CoverImage src={coverImage.fluid.src} alt="" />
      <Row className="align-items-end">
        <Col>
          <h1 className="display-1">{cityName}</h1>
          <Row as={Col}>
            {moment().format("dddd, MMMM D, YYYY")}
            <WeatherWidget cityId={cityId} />
          </Row>
        </Col>
        <Col md="auto">
          <h4>
            <FcBookmark />
            Beta Ver.
          </h4>
        </Col>
      </Row>
    </StyledJumbotron>

    <ContentContainer fluid>
      {/* <Row>
        <Col>
          <div className="category-container">
            <h1 className="display-3">Popular</h1>
            <div className="ribbon" />
          </div>
          <Row className="align-items-center justify-content-center">
            {campaigns.map(campaign => {
              // if no cover image specified, a div with primary background color is used as fallback
              const bgSrc = campaign.cover && campaign.cover.fixed.src;

              return (
                <CampaignCol
                  key={campaign.slug}
                  className="mb-4"
                  sm={6}
                  md={4}
                  lg
                  xl={3}
                  hascover={bgSrc}
                >
                  <h1>{campaign.title}</h1>
                  <div className="shade-overlay shadow rounded">
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
                    to={`/campaigns/${campaign.slug}`}
                    className="stretched-link"
                  />
                </CampaignCol>
              );
            })}
          </Row>
        </Col>
      </Row> */}
      <Row>
        <Col lg={8} md={7} xs={12}>
          <div className="category-container">
            <h1 className="display-3">Stories</h1>
            <div className="ribbon" />
          </div>
          <InstaFeed filter={[cityName.replace(/\s+/g, "").toLowerCase()]} />
        </Col>
        <Col>
          <div className="category-container">
            <h1 className="display-3">News</h1>
            <div className="ribbon" />
          </div>
          <NewsFeed query={`${cityName} AND ${state}`} />
        </Col>
      </Row>
    </ContentContainer>

    <ActionButtonGroup />
  </Layout>
);

// export const query = graphql`
//   query Campaign($id: String) {
//     allContentfulCampaign(
//       filter: { frontPages: { elemMatch: { id: { eq: $id } } } }
//     ) {
//       nodes {
//         title
//         description {
//           description
//         }
//         cover {
//           fixed {
//             src
//           }
//         }
//         slug
//       }
//     }
//   }
// `;

const StyledJumbotron = styled(Jumbotron)`
  position: relative;
  background-color: transparent;
  color: var(--light);
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
      background: var(--primary);
      width: 100%;
      height: 10px;
      margin-left: 10px;
    }
  }
`;

// const CampaignCol = styled(Col)`
//   position: relative;
//   text-align: left;
//   color: white;

//   h1 {
//     position: absolute;
//     bottom: 55px;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     text-align: center;
//     max-width: 65%;
//     overflow: hidden;
//   }

//   .bg {
//     position: relative;
//     z-index: -1;
//     margin: 0 auto;
//     background: var(--primary);
//     width: ${({ hascover }) => hascover && "100%"};
//     height: ${({ hascover }) => (hascover ? "100%" : "250px")};
//   }

//   .shade-overlay {
//     background: linear-gradient(
//       180deg,
//       rgba(33, 37, 41, 0) 0%,
//       rgba(33, 37, 41, 0.5) 70%,
//       rgba(33, 37, 41, 0.9) 100%
//     );
//     overflow: hidden;
//   }
// `;

export default FrontPageTemplate;
