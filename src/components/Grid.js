import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import awsvideo from "../aws-video-exports";

const Grid = ({ items }) => {
  return (
    <>
      <Row>
        {items.map(({ title, video, id }) => {
          return (
            <PostContainer key={id} lg={3} md={4} sm={6} className="mb-4">
              <p>{title}</p>
              <div className="shade-overlay shadow rounded">
                {/* use Gatsby Image on fetched images */}
                <img
                  alt="post"
                  src={`https://${awsvideo.awsOutputVideo}/${video.id}/${video.id}-thumb.0000000.jpg`}
                  width="100%"
                  className="shadow"
                />
              </div>
              <Link to={`/stories/${id}`} className="stretched-link" />
            </PostContainer>
          );
        })}
      </Row>
    </>
  );
};

const PostContainer = styled(Col)`
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
`;

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;
