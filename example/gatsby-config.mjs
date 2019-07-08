// @flow
const path = require('path');

const { fonts, theme } = require('./config/material-ui');

module.exports = {
  siteMetadata: {
    siteName: '',
    siteUrl: `https://material-ui-layout.origen.studio/`,
    title: `Material UI Layout by Origen Studio`,
    description: `Example using Material UI Layout`,
    author: `Origen Studio <hello@origen.studio>`,
    version: "4.0.0",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: fonts.google,
        },
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-flow',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Material UI Layout by Origen Studio`,
        short_name: 'MUI Layout',
        start_url: '/',
        background_color: theme.palette.background.default,
        theme_color: theme.palette.primary.main,
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
