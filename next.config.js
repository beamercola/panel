const withCSS = require("@zeit/next-css");

require("dotenv").config();

module.exports = withCSS({
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT: process.env.AUTH0_CLIENT,
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    ROOT_URL: process.env.ROOT_URL
  },
  experimental: {
    documentMiddleware: true
  }
});
