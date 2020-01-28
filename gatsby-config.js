module.exports = {
  siteMetadata: {
    title: `Uni Pizza`,
    description: `Willkommen auf der Webseite der Uni Pizza. Hier finden Sie alle Informationen zu uns. Wir wünschen Ihnen einen guten Appetit und bis bald!`,
    author: `@statist32`,
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
        background_color: `#bf3737`,
        theme_color: `#bf3737`,
        display: `standalone`,
        icon: `src/images/uni-pizza_logo_ofen.png`,
      },
    },

    `gatsby-plugin-offline`,
  ],
}
