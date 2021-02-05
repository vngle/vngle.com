/**
 * Auto-play carousel of Instagram posts.
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Spinner } from "react-bootstrap";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import awsvideo from "../aws-video-exports";
import ReactPlayer from "react-player";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StorySlider = () => {
  const [items, setItems] = useState([]);
  const [caption, setCaption] = useState("");
  const [nextToken, setNextToken] = useState([]);
  const sliderConfig = {
    bullets: false,
    play: true,
    onFirstMount: () => setCaption(items[0].caption),
    onTransitionStart: ({ nextMedia }) =>
      setCaption(nextMedia.children.props.caption),
  };

  useEffect(() => {
    const fetchVod = async () => {
      const assets = await API.graphql(graphqlOperation(queries.listVodAssets));
      let { nextToken } = assets.data.listVodAssets;
      if (nextToken === null) {
        nextToken = "";
      }

      const items = assets.data.listVodAssets.items.map(item => {
        return {
          ...item,
          src: `https://${awsvideo.awsOutputVideo}/${item.video.id}/${item.video.id}.m3u8`,
          type: "application/x-mpegURL",
        };
      });

      setItems(items);
      setNextToken(nextToken);
    };

    fetchVod();
  }, []);

  return items.length === 0 ? (
    <LoadingWrapper className="d-flex flex-column justify-content-center">
      <Spinner animation="grow" variant="primary" className="m-auto">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </LoadingWrapper>
  ) : (
    <Row>
      <CaptionCol className="text-lg-left text-center">
        <p>{caption}</p>
      </CaptionCol>
      <Col lg={7}>
        <PhoneContainer className="shadow">
          <AutoplaySlider {...sliderConfig}>
            {items.map((source, i) => (
              <div key={i}>
                <SlideVideo
                  url={source.src}
                  playing
                  muted
                  loop
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </AutoplaySlider>
        </PhoneContainer>
      </Col>
    </Row>
  );
};

const CaptionCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PhoneContainer = styled.div`
  border-color: #333;
  padding: 0.4rem 1rem;
  border-radius: 1.25rem;
  border: solid 0.5px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(51, 51, 51, 1) 1%,
    rgba(51, 51, 51, 1) 99%,
    rgba(255, 255, 255, 1) 100%
  );

  div {
    border-radius: 1.25rem;
    overflow: hidden;
  }
`;

const SlideVideo = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const LoadingWrapper = styled.div`
  height: 50vh;

  div {
    width: 100px;
    height: 100px;
  }
`;

StorySlider.propTypes = {
  fetchNum: PropTypes.number,
  interval: PropTypes.number,
  hashTags: PropTypes.array,
};

StorySlider.defaultProps = {
  fetchNum: 12,
  interval: 5000,
  hashTags: [],
};

export default StorySlider;
