/**
 * Run during site build process to control site's data in GraphQL data layer.
 * Generate pages for front pages, hot topics, and stories.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// taken manually from aws-video-exports. How to require this?
const awsOutputVideo =
  "storyvodstreams-prod-output-20awcmcv7zuz.s3.us-east-1.amazonaws.com";

const createStories = async (graphql, { createPage }) => {
  let items = [];
  let nextToken = "init";

  while (nextToken !== null) {
    const {
      data: {
        allStory: {
          listVodAssets: { nextToken: newNextToken, items: newItems },
        },
      },
    } = await graphql(`
      {
        allStory${nextToken !== "init" ? `(nextToken: ${nextToken})` : ""} {
          listVodAssets {
            nextToken
            items {
              author
              caption
              id
              tags
              title
              video {
                id
              }
            }
          }
        }
      }
    `);

    // update nextToken
    nextToken = newNextToken;
    items = [...items, ...newItems].map(item => {
      return {
        ...item,
        src: `https://${awsOutputVideo}/${item.video.id}/${item.video.id}.m3u8`,
        type: "application/x-mpegURL",
      };
    });
  }

  items.forEach(item => {
    createPage({
      path: `/stories/${item.id}`,
      component: require.resolve(`./src/templates/story`),
      context: item,
    });
  });
};

/**
 * Async function to create pages from Contentful content models (Front Page, Campaign, Story)
 *
 * @param {function} graphql Function to create a GraphQL query to fetch data from Gatsby data layer
 * @param {function} createPage Function to create a page. Destructured from Gatsby's built-in actions object
 */
const createContentful = async (graphql, { createPage }) => {
  /**
   * Fetch all necessary data to populate pages
   * Create 3 arrays of GraphQL data node objects
   */
  const {
    data: {
      allContentfulFrontPage: { nodes: frontPages },
      allContentfulCampaign: { nodes: campaigns },
      allContentfulStory: { nodes: stories },
    },
  } = await graphql(`
    {
      allContentfulFrontPage {
        nodes {
          cityId
          id
          slug
          cityName
          coverImage {
            fluid {
              src
            }
          }
          state
        }
      }
      allContentfulCampaign {
        nodes {
          title
          id
          slug
          cover {
            fluid {
              src
            }
          }
          description {
            description
          }
        }
      }
      allContentfulStory {
        nodes {
          title
          author
          id
          slug
          caption {
            caption
          }
          mediaContent {
            id
            file {
              url
              contentType
            }
            fixed {
              src
            }
          }
        }
      }
    }
  `);

  frontPages.forEach(({ cityId, cityName, coverImage, id, state, slug }) => {
    createPage({
      path: `${slug}`,
      component: require.resolve(`./src/templates/frontPage`),
      context: {
        cityId,
        cityName,
        coverImage,
        id,
        state,
      },
    });
  });

  campaigns.forEach(({ title, id, cover, description, slug }) => {
    createPage({
      path: `/campaigns/${slug}`,
      component: require.resolve(`./src/templates/campaign`),
      context: {
        title,
        id,
        cover,
        description,
      },
    });
  });

  stories.forEach(({ title, author, id, slug, caption, mediaContent }) => {
    createPage({
      path: `/stories/${slug}`,
      component: require.resolve(`./src/templates/story`),
      context: {
        title,
        author,
        id,
        caption: caption.caption,
        mediaContent,
      },
    });
  });
};

/**
 * Gatsby Node API to tell plugins to add pages
 * createPages() calls functions that asynchronously fetch data needed to create pages
 * and waits for all data to be fetched (Promise.all)
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info
 * @param {function} graphql Function to create a GraphQL query to fetch data from Gatsby data layer
 * @param {function} actions Gatsby built-in object containing functions to manipulate website state
 */
exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createStories(graphql, actions),
    createContentful(graphql, actions),
  ]);
};
