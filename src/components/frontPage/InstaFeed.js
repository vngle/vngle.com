/**
 * Simple story feed on city front pages from IG data
 */

import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import styled from "styled-components";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import awsvideo from "../../aws-video-exports";

// TODO: rename to StoryFeed and refactor names
const InstaFeed = ({ filter }) => {
  const [instaFeed, setInstaFeed] = useState([]);
  const [instaInfo, setInstaInfo] = useState("init");
  const [loading, setLoading] = useState(true);

  // fetch more insta data when scroll to end
  // may want to switch to GraphQL
  const fetchNext = useCallback(async () => {
    const assets = await API.graphql({
      query: queries.listVodAssets,
      variables: { instaInfo },
      authMode: "API_KEY",
    });
    const newItems = instaFeed.concat(assets.data.listVodAssets.items);
    let newNextToken = assets.data.listVodAssets.nextToken;
    if (newNextToken === null) {
      newNextToken = "";
    }

    setInstaFeed(newItems);
    setInstaInfo(newNextToken);
    setLoading(false);
  }, [instaFeed, instaInfo]);

  // TOFIX: Memory leak when unmounted (moved to another page) and fetching in progress
  // fetch Instagram feed data at initial render
  useEffect(() => {
    const fetchVod = async () => {
      const assets = await API.graphql({
        query: queries.listVodAssets,
        authMode: "API_KEY",
      });
      let { nextToken } = assets.data.listVodAssets;
      if (nextToken === null) {
        nextToken = "";
      }

      const items = assets.data.listVodAssets.items;

      setInstaFeed(items);
      setInstaInfo(nextToken);
      setLoading(false);
    };

    fetchVod();
  }, []);

  // when insta feed & info is updated, check if feed is empty. If yes, try fetching next batch
  useEffect(() => {
    if (instaFeed.length === 0 && instaInfo !== "") {
      fetchNext();
    }
  }, [instaFeed, instaInfo, fetchNext]);

  return (
    <InfiniteScroll
      dataLength={instaFeed.length}
      next={fetchNext}
      hasMore={instaInfo !== ""}
      className="text-center"
      style={{ overflow: "visible" }}
      scrollThreshold={0.5}
    >
      <Row>
        {!loading &&
          instaFeed
            // TODO: this filter should be done at the GraphQL level?
            .filter(({ tags }) =>
              filter.every(tag =>
                Array.isArray(tags) ? tags.includes(tag) : false
              )
            )
            .map(({ id, title, video }) => {
              return (
                <PostContainer key={id} lg={3} md={4} sm={6} className="mb-4">
                  <div className="shade-overlay shadow rounded">
                    <p>{title}</p>
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
    </InfiniteScroll>
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
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(33, 37, 41, 0) 0%,
      rgba(33, 37, 41, 0.5) 70%,
      rgba(33, 37, 41, 0.9) 100%
    );
    overflow: hidden;
  }
`;

InstaFeed.propTypes = {
  postPerReq: PropTypes.number,
  filter: PropTypes.array,
  isPreview: PropTypes.bool,
};

InstaFeed.defaultProps = {
  postPerReq: 12,
  filter: [],
  isPreview: false,
};

export default InstaFeed;
