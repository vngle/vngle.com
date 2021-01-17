/**
 * Run during site build process to control site's data in GraphQL data layer.
 * Generate pages for front pages, hot topics, and stories.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require(`axios`);

/**
 * Async function to create Vngle story pages from @VngleStories Instagram posts.
 *
 * @param {function} createPage Function to create a page. Destructured from Gatsby's built-in actions object
 */
const createInsta = async ({ createPage }) => {
  /**
   * Variables needed to make HTTP GET requests to fetch IG posts
   *
   * NOT official Instagram API! This method of fetching needs to be deprecated soon
   */
  const endpoint = "https://www.instagram.com/graphql/query/";
  const queryHash = "003056d32c2554def87228bc3fd9668a";
  const userId = "4046633900";
  const maxNodePerRequest = 12; // Max # of post data per request

  let allFeed = [];
  let feedMetadata = {
    has_next_page: true,
  };

  // fetch all posts from instagram & store in allFeed
  while (feedMetadata.has_next_page) {
    variables = {
      id: userId,
      first: maxNodePerRequest,
    };

    // if no end_cursor in metadata then don't include in request
    if (feedMetadata.hasOwnProperty("end_cursor")) {
      variables.after = feedMetadata.end_cursor;
    }

    try {
      const response = await axios.get(endpoint, {
        params: {
          query_hash: queryHash,
          variables,
        },
      });
      const data = response.data.data.user.edge_owner_to_timeline_media;

      allFeed = [...allFeed, ...data.edges];
      feedMetadata = data.page_info;
    } catch (error) {
      console.error(error);
    }
  }

  // For each post in IG feed, extract necessary fields & create a page w/ them
  allFeed.forEach(
    ({
      node: {
        id,
        edge_media_to_caption,
        is_video,
        display_url,
        video_url,
        shortcode,
      },
    }) => {
      createPage({
        path: `/stories/${shortcode}`,
        component: require.resolve(`./src/templates/story`),
        context: {
          title: `${edge_media_to_caption.edges[0].node.text.substring(
            0,
            15
          )}...`,
          author: "@VngleStories",
          id,
          caption: edge_media_to_caption.edges[0].node.text,
          mediaContent: [
            {
              id,
              file: {
                contentType: is_video ? "video/mp4" : "image/jpeg",
                url: video_url,
              },
              fixed: { src: display_url },
            },
          ],
        },
      });
    }
  );
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
  await Promise.all([createInsta(actions), createContentful(graphql, actions)]);
};
