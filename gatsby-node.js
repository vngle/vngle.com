/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require(`axios`)

exports.createPages = async ({ actions }) => {
  const endpoint = "https://www.instagram.com/graphql/query/"
  const queryHash = "44efc15d3c13342d02df0b5a9fa3d33f"
  const userId = "4046633900"

  let allFeed
  let count

  // initial requset to get total post count
  // this is total overfetching btw, do not recommend
  try {
    const response = await axios.get(endpoint, {
      params: {
        query_hash: queryHash,
        variables: {
          id: userId,
          first: 1,
        },
      },
    })

    count = response.data.data.user.edge_owner_to_timeline_media.count
  } catch (error) {
    console.error(error)
  }

  // fetching of actual data
  // instagram doesn't seem to have a small limit of posts to fetch
  try {
    const response = await axios.get(endpoint, {
      params: {
        query_hash: queryHash,
        variables: {
          id: userId,
          first: count,
        },
      },
    })

    allFeed = response.data.data.user.edge_owner_to_timeline_media.edges
  } catch (error) {
    console.error(error)
  }

  allFeed.forEach(post => {
    const slug = post.node.shortcode

    actions.createPage({
      path: `/collegepark/${slug}/`,
      component: require.resolve(`./src/templates/storyPost.jsx`),
      context: { post },
    })
  })
}
