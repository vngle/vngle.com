/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require(`axios`)

const createInsta = async ({ createPage }) => {
  const endpoint = "https://www.instagram.com/graphql/query/"
  const queryHash = "3913773caadd10357fba8b1ef4c89be3"
  const userId = "4046633900"
  const maxNodePerRequest = 50

  // because only have 1 front page now, allFeed = filtered CP feed
  let allFeed = []
  let feedMetadata = {
    has_next_page: true,
  }

  // fetch all posts from instagram
  while (feedMetadata.has_next_page) {
    variables = {
      id: userId,
      first: maxNodePerRequest,
    }

    // if no end_cursor in metadata then don't include in request
    if (feedMetadata.hasOwnProperty("end_cursor")) {
      variables.after = feedMetadata.end_cursor
    }

    try {
      const response = await axios.get(endpoint, {
        params: {
          query_hash: queryHash,
          variables,
        },
      })
      const data = response.data.data.user.edge_owner_to_timeline_media

      allFeed = [...allFeed, ...data.edges]
      feedMetadata = data.page_info
    } catch (error) {
      console.error(error)
    }
  }

  allFeed = allFeed.filter(({ node }) => {
    const caption = node.edge_media_to_caption.edges[0].node.text

    return caption.includes("#CollegePark")
  })

  allFeed.forEach(post => {
    const slug = post.node.shortcode

    createPage({
      // NO hard code city page in the future
      path: `/collegepark/${slug}/`,
      component: require.resolve(`./src/templates/storyPost.jsx`),
      context: { post },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createInsta(actions)

  const {
    data: {
      allContentfulCampaign: { edges: campaigns },
    },
  } = await graphql(`
    {
      allContentfulCampaign {
        edges {
          node {
            title
            id
            description {
              description
            }
            cover {
              file {
                details {
                  size
                }
              }
              fluid {
                src
              }
            }
            stories {
              title
              author
              email
              id
              mediaContent {
                fixed {
                  src
                }
                file {
                  contentType
                }
                id
              }
              caption {
                caption
              }
            }
          }
        }
      }
    }
  `)

  campaigns.forEach(({ node: campaign }) => {
    actions.createPage({
      path: `/collegepark/${campaign.id}`,
      component: require.resolve(`./src/templates/campaign.jsx`),
      context: { campaign },
    })

    campaign.stories !== null &&
      campaign.stories.forEach(story => {
        actions.createPage({
          path: `/collegepark/${campaign.id}/${story.id}`,
          component: require.resolve(`./src/templates/story.jsx`),
          context: { story },
        })
      })
  })
}
