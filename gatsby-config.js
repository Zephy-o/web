/* eslint-disable no-undef */

module.exports = {
  siteMetadata: {

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/commands`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Miki: the Discord bot!",
        short_name: "Miki",
        theme_color: "#f23084",
        background_color: "#2196f3",
        display: "standalone",
        orientation: "portrait",
        icon: "static/miki_avatar.png"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // eslint-disable-next-line no-undef
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // Disable dev debug mode, enabled by default
        debug: false,
      },
    },
  ]
}
