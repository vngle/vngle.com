import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import awsvideo from "../aws-video-exports";
import { FcApproval } from "react-icons/fc";

const List = ({ items }) => {
  return (
    <>
      <Row xs={1}>
        {items.map(({ title, video, id, createdAt }) => {
          return (
            <Col key={id} className="mb-5" lg={8}>
              <Post className="rounded">
                <div className="post-content">
                  <h1>{title}</h1>

                  <div className="post-content__meta">
                    <p>
                      VngleVerified <FcApproval />
                    </p>
                  </div>
                </div>
                <div className="thumbnail-wrapper">
                  <img
                    alt="thumbnail"
                    src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                    width="100%"
                  />
                  <Link to={`/stories/${id}`} className="stretched-link" />
                </div>
              </Post>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

const Post = styled.div`
  display: flex;
  overflow: hidden;

  .post-content {
    flex-grow: 1;
    padding: 1.5rem;
    border: 2px solid var(--bs-primary);
    border-right: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      color: var(--bs-dark);
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      font-weight: bold;
    }

    &__meta {
      text-align: right;

      p {
        font-size: clamp(11px, 1vw, 1rem);
        margin-bottom: 0;
      }
    }
  }

  .thumbnail-wrapper {
    position: relative;
    max-width: 50%;
    flex: 0 0 50%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: 425px) {
      max-width: 30%;
    }
  }
`;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
