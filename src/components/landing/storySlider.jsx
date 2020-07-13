import React, { useState, useEffect } from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import styled from "styled-components"
import axios from "axios"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const StorySlider = () => {
  const [instaFeed, setInstaFeed] = useState([])
  const [caption, setCaption] = useState("")
  const fetchNum = 12

  const sliderConfig = {
    bullets: false,
    play: true,
    interval: 5000,
    onFirstMount: () =>
      setCaption(instaFeed[0].node.edge_media_to_caption.edges[0].node.text),
    onTransitionStart: ({ nextMedia }) =>
      setCaption(nextMedia.children.props.caption),
  }

  useEffect(() => {
    const fetchInstaFeed = async () => {
      const endpoint = "https://www.instagram.com/graphql/query/"
      const queryHash = "15bf78a4ad24e33cbd838fdb31353ac1" // is this permanent?

      try {
        const response = await axios.get(endpoint, {
          params: {
            query_hash: queryHash,
            variables: {
              id: "4046633900",
              first: fetchNum,
            },
          },
        })

        const data = response.data.data.user.edge_owner_to_timeline_media.edges
        setInstaFeed(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchInstaFeed()
  }, [])

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
            {instaFeed.map(post => {
              const caption = post.node.edge_media_to_caption.edges[0].node.text

              return (
                <div key={post.node.id}>
                  {post.node.is_video ? (
                    <SlideVideo
                      src={post.node.video_url}
                      autoPlay
                      muted
                      caption={caption}
                      playsInline
                    />
                  ) : (
                    <img
                      src={post.node.display_url}
                      alt={caption}
                      caption={caption}
                      width="100%"
                    />
                  )}
                </div>
              )
            })}
          </AutoplaySlider>
        </PhoneContainer>
      </Col>
    </Row>
  )
}

const CaptionCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

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
`

const SlideVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`

const LoadingWrapper = styled.div`
  height: 50vh;

  div {
    width: 100px;
    height: 100px;
  }
`

export default StorySlider
