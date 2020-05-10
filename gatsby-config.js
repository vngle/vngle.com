module.exports = {
  siteMetadata: {
    title: `Vngle`,
    description: `Decentralized grassroots news network for news deserts.`,
    author: `@efeichen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
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
        icon: `${__dirname}/src/static/images/logo-box.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
