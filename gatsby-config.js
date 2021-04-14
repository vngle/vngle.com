/**
 * Site configuration options
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// specify what environmental variables to use (dev/prod)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Vngle`,
    description: `Vngle brings you grassroots reality coverage on pressing underrepresented stories happening across America from “various angles”. Join us and let’s bring “various angles” of raw local news coverage to your city next.`,
    siteUrl: `https://www.vngle.com`,
    image: `/images/logo.png`,
    author: `Kenneth Chen`,
    twitterUsername: `@vnglestories`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vngle`,
        short_name: `vngle`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#ffcc35`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96150653-1",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `vngle`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Story",
        fieldName: "allStory",
        url:
          "https://luz7nngkczcchiekqx5xinl3te.appsync-api.us-east-1.amazonaws.com/graphql",
        headers: {
          "x-api-key": "da2-kridzenngrcsrn55mau3sqv2ru",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
