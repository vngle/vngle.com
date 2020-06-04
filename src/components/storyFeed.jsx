import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Row, Col, Spinner } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import Nanogram from "nanogram.js"
import axios from "axios"

const StoryFeed = () => {
  const [instaFeed, setInstaFeed] = useState([])
  const [instaInfo, setInstaInfo] = useState({
    has_next_page: true,
  })
  const [loading, setLoading] = useState(true)

  // fetch insta using nanogram.js during initial component mount
  // may later change to use axios for simplicity
  const fetchInstaFeed = async () => {
    const instaParser = new Nanogram()
    const response = await instaParser.getMediaByUsername("vnglestories")

    if (response.ok) {
      setInstaFeed(response.profile.edge_owner_to_timeline_media.edges)
      setInstaInfo(response.profile.edge_owner_to_timeline_media.page_info)
      setLoading(false)
    }
  }

  // fetch more insta data when scroll to end
  // may want to switch to GraphQL
  const fetchNext = async () => {
    const endpoint = "https://www.instagram.com/graphql/query/"
    const queryHash = "44efc15d3c13342d02df0b5a9fa3d33f" // is this permanent?

    try {
      const response = await axios.get(endpoint, {
        params: {
          query_hash: queryHash,
          variables: {
            id: "4046633900",
            first: 12,
            after: instaInfo.end_cursor,
          },
        },
      })

      const data = response.data.data.user.edge_owner_to_timeline_media

      setInstaFeed([...instaFeed, ...data.edges])
      setInstaInfo(data.page_info)
      console.log(data.page_info.has_next_page)
    } catch (error) {
      console.error(error)

      setInstaInfo({
        ...instaInfo,
        has_next_page: false,
      })
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchInstaFeed()
  }, [])

  return (
    <InfiniteScroll
      dataLength={instaFeed.length}
      next={fetchNext}
      hasMore={instaInfo.has_next_page}
      loader={
        <Spinner animation="border" variant="primary" className="m-auto">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }
      className="text-center"
      style={{ overflow: "visible" }}
    >
      <Row>
        {!loading &&
          instaFeed.map(post => {
            const caption = post.node.edge_media_to_caption.edges[0].node.text

            return (
              <PostContainer
                key={post.node.id}
                lg={3}
                md={4}
                sm={6}
                className="mb-4"
              >
                <p>{caption}</p>
                <div className="shade-overlay shadow rounded">
                  {/* use Gatsby Image on fetched images */}
                  <img
                    alt="post"
                    src={post.node.thumbnail_src}
                    width="100%"
                    className="shadow"
                  />
                </div>
                <Link
                  to={`/collegepark/${post.node.shortcode}`}
                  className="stretched-link"
                />
              </PostContainer>
            )
          })}
      </Row>
    </InfiniteScroll>
  )
}

const PostContainer = styled(Col)`
  position: relative;
  text-align: left;
  color: white;

  & {
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
        rgba(33, 37, 41, 0.3) 70%,
        rgba(33, 37, 41, 0.7) 100%
      );
      overflow: hidden;
    }
  }
`

export default StoryFeed
