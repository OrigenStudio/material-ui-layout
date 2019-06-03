/**
 * Original `gatsby-config.js`. Do not modify this file, as we are
 * using `@babel/register` to transpile ES6 files. Modify directly
 * the transpiled files. Ex: `./gatsby-config.mjs`
 *  
 * Pattern copied from: https://github.com/gatsbyjs/gatsby/issues/7810#issuecomment-449780130
 */
require('@babel/register');
require('@babel/polyfill');
module.exports = require('./gatsby-config.mjs');
