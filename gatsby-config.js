// Load environment variables
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * To set environment variables, create .env.development
 *
 * E.g:
 *
 * API_URL=https://example.com/api
 *
 * Then:
 *
 * process.env.API_URL=https://example.com/api
 *
 * See .env.example as an example
 */

module.exports = {
  siteMetadata: {
    name: 'Eagle & Crane Coffee Co.',
    title: 'Eagle & Crane Coffee Co.',
    meta: {
      keywords: 'Eagle, Crane, Coffee, Free',
      description: 'Eagle & Crane Coffee Co. – Eagle & Crane Coffee Co.',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
