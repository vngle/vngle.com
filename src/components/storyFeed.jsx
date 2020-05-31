import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Col, Spinner } from "react-bootstrap"
import { Link } from "gatsby"
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
      endMessage={<p>That's it my guy</p>}
      className="text-center"
    >
      {!loading &&
        instaFeed.map(post => (
          <Col key={post.node.id} lg md sm className="mb-4 p-0">
            {/* use Gatsby Image on fetched images */}
            <Link to={`/collegepark/${post.node.shortcode}`}>
              <img
                alt="post"
                src={post.node.thumbnail_src}
                width="100%"
                className="shadow rounded"
              />
            </Link>
          </Col>
        ))}
    </InfiniteScroll>
  )
}

export default StoryFeed
