import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import awsvideo from "../aws-video-exports";
import { FcApproval } from "react-icons/fc";

const Grid = ({ items }) => {
  return (
    <>
      <Row xs={1} md={2} lg={3}>
        {items.map(({ title, video, id, createdAt }) => {
          return (
            <Col key={id} className="mb-4">
              <Post className="rounded">
                <div className="thumbnail-wrapper">
                  <img
                    alt="thumbnail"
                    src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                    width="100%"
                  />
                  <Link to={`/stories/${id}`} className="stretched-link" />
                </div>
                <div className="post-content">
                  <h1>{title}</h1>

                  <div className="post-content__meta">
                    <p>
                      VngleVerified <FcApproval />
                    </p>
                    {/* <p>{moment(createdAt).calendar()}</p> */}
                  </div>
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
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .thumbnail-wrapper {
    position: relative;
    flex: 1;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .post-content {
    min-height: 250px;
    padding: 1.5rem;
    border: solid 2px var(--primary);
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      color: var(--dark);
      font-size: 1.5rem;
      font-weight: bold;
    }

    &__meta {
      text-align: right;

      p {
        margin-bottom: 0;
      }
    }
  }
`;

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;
