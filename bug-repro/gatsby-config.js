require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/plugin-options.md
      options: {
        url: `https://source.adamscheinermd.com/graphql`,
        schema: {
          previewRequestConcurrency: 50
        },
        html: {
          createStaticFiles: true,
          imageQuality: 70,
          placeholderType: 'blurred'
        },
        type: {
          // https://support.gatsbyjs.com/hc/en-us/articles/4522338898579-Configuring-Source-Plugins-for-Image-CDN
          MediaItem: {
            createFileNodes: false
          },
          __all: {
            limit: process.env.NODE_ENV === `development` ? 10 : null
          }
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`
  ]
};
