/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require(`axios`);

const createInsta = async ({ createPage }) => {
  const endpoint = "https://www.instagram.com/graphql/query/";
  const queryHash = "15bf78a4ad24e33cbd838fdb31353ac1";
  const userId = "4046633900";
  const maxNodePerRequest = 50;

  // because only have 1 front page now, allFeed = filtered CP feed
  let allFeed = [];
  let feedMetadata = {
    has_next_page: true,
  };

  // fetch all posts from instagram
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

const createContentful = async (graphql, { createPage }) => {
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

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([createInsta(actions), createContentful(graphql, actions)]);
};
