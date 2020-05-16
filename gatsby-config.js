module.exports = {
  siteMetadata: {
    title: `—, you had a problem`,
    description: `A design duo based in the Moon. Well, at least getting there. → say hey@youhadaproblem.com`,
    keywords: `you had a problem, design, graphic, creative code, development, frontend, rafael ferreira, miguel cruz`,
    url: "https://www.youhadaproblem.com",
    image: "/images/og.png",
    twitterUsername: "@youhadaproblem"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `babel-plugin-styled-components`,
    'gatsby-plugin-netlify-cache',
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/yhap-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
