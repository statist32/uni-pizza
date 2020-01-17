module.exports = {
  siteMetadata: {
    title: `Uni Pizza`,
    description: `Willkommen auf der Webseite der Uni Pizza. Hier finden Sie alle Informationen zu uns. Wir wünschen Ihnen einen guten Appetit und bis bald!`,
    author: `@gstatist32`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Uni Pizza`,
        short_name: `Uni Pizza`,
        start_url: `/`,
        icon: `src/images/Pizza_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
