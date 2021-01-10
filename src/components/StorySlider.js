/**
 * Auto-play carousel of Instagram posts.
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Spinner } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

/**
 *
 * @param {number} fetchNum Number of posts to fetch from most recent
 * @param {number} interval How long each slide lasts
 * @param {array} hashTags Filter in posts that have caption containing these hashtags (must be together and space-separated)
 */
const StorySlider = ({ fetchNum, interval, hashTags }) => {
  const [instaFeed, setInstaFeed] = useState([]);
  const [caption, setCaption] = useState("");
  const hashTagString = hashTags.map(hashTag => `#${hashTag}`).join(" ");

  const sliderConfig = {
    bullets: false,
    play: true,
    interval: interval,
    onFirstMount: () =>
      setCaption(instaFeed[0].node.edge_media_to_caption.edges[0].node.text),
    onTransitionStart: ({ nextMedia }) =>
      setCaption(nextMedia.children.props.caption),
  };

  // fetch Instagram post data
  useEffect(() => {
    const fetchInstaFeed = async () => {
      const endpoint = "https://www.instagram.com/graphql/query/";
      const queryHash = "003056d32c2554def87228bc3fd9668a";

      try {
        const response = await axios.get(endpoint, {
          params: {
            query_hash: queryHash,
            variables: {
              id: "4046633900",
              first: fetchNum,
            },
          },
        });

        let data = response.data.data.user.edge_owner_to_timeline_media.edges;

        if (hashTagString) {
          data = data.filter(({ node }) => {
            const caption = node.edge_media_to_caption.edges[0].node.text;

            return caption.includes(hashTagString);
          });
        }

        setInstaFeed(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstaFeed();
  }, [fetchNum, hashTagString]);

  return instaFeed.length === 0 ? (
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
            {instaFeed
              .filter(post => post.node.is_video)
              .map(post => {
                const caption =
                  post.node.edge_media_to_caption.edges[0].node.text;

                return (
                  <div key={post.node.id}>
                    <SlideVideo
                      src={post.node.video_url}
                      autoPlay
                      muted
                      caption={caption}
                      playsInline
                      loop
                    />
                  </div>
                );
              })}
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

const SlideVideo = styled.video`
  width: 100%;
  height: 100%;
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
