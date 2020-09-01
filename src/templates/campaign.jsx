import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ pageContext: { campaign } }) => {
  return (
    <Layout>
      <SEO title={campaign.title} />
      <StyledJumbotron>
        <img src={campaign.cover.fluid.src} alt="Campaign banner" />
        <Row>
          <Col xs={12} md={8}>
            <h1 className="display-3">{campaign.title}</h1>
            <p>{campaign.description.description}</p>
          </Col>
        </Row>
      </StyledJumbotron>
      <Container fluid>
        {campaign.stories === null ? (
          <h1 className="text-muted text-center">
            No stories reported at the moment. Come back later!
          </h1>
        ) : (
          <StoryRow>
            {campaign.stories.map(story => {
              return (
                <StoryCol key={story.id} md={"auto"} className="mb-4">
                  <p>{story.caption.caption}</p>
                  <div className="shade-overlay shadow rounded">
                    <img
                      alt="story"
                      src={story.mediaContent[0].fixed.src}
                      className="shadow"
                    />
                  </div>
                  <Link
                    to={`/collegepark/${campaign.id}/${story.id}`}
                    className="stretched-link"
                  />
                </StoryCol>
              )
            })}
          </StoryRow>
        )}
      </Container>
    </Layout>
  )
}

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

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    object-position: center center;
  }

  h1 {
    font-weight: 800;
  }
`

const StoryRow = styled(Row)`
  align-items: center;
`

const StoryCol = styled(Col)`
  display: flex;
  align-items: flex-end;
  position: relative;
  text-align: left;
  color: white;

  p {
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  img {
    width: 100%;
    position: relative;
    z-index: -1;
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
