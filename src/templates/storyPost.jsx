import React from "react"
import { Container } from "react-bootstrap"
import { Disqus } from "gatsby-plugin-disqus"

import Layout from "../components/layout"
import SEO from "../components/seo"

import useSiteMetadata from "../hooks/use-site-metadata"

export default ({ pageContext: { post }, location }) => {
  const { siteUrl } = useSiteMetadata()
  const disqusConfig = {
    url: `${siteUrl}${location.pathname}`,
    identifier: post.node.id,
  }
  const caption = post.node.edge_media_to_caption.edges[0].node.text

  return (
    <Layout>
      <SEO title="College Park Home" />
      <Container>
        {post.node.is_video ? (
          <div className="embed-responsive embed-responsive-16by9">
            <video
              controls
              className="embed-responsive-item"
              poster={post.node.display_url}
              autoPlay
              playsInline
            >
              <source src={post.node.video_url} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
              <track
                src=""
                kind="captions"
                srcLang="en"
                label="english_captions"
              />{" "}
            </video>
          </div>
        ) : (
          <img src={post.node.display_url} width="100%" alt={caption} />
        )}
        <p>{caption}</p>
        <Disqus config={disqusConfig} />
      </Container>
    </Layout>
  )
}
