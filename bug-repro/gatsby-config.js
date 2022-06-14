module.exports = {
  siteMetadata: {
    title: `Dr. Adam Scheiner`,
    description: `Dr. Adam Scheiner is a world-renowned laser eyelid and facial cosmetic surgeon, and is the founder of RESET® Treatment for Festoons.`,
    author: `Dr. Adam Scheiner`,
    siteURL: `https://adamscheinermd.com`,
    siteSRC: `https://source.adamscheinermd.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, //
    `gatsby-plugin-image`, //
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`, //
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://source.adamscheinermd.com/graphql`,
        schema: {
          timeout: 900000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, //
    `gatsby-plugin-sharp`, //
    {
      resolve: `gatsby-plugin-manifest`, //
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-gatsby-cloud`, //
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1111111111111111",
      },
    },
  ],
}
