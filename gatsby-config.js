module.exports = {
  siteMetadata: {
    title: `Vngle`,
    description: `"Various angles" on local news driven by you.`,
    author: `Kenneth Chen`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vngle`,
        short_name: `vngle`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#FF54AC`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/logo-box.jpg`, // This path is relative to the root of the site.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
