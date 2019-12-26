const withCSS = require("@zeit/next-css");

require("dotenv").config();

module.exports = withCSS({
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT: process.env.AUTH0_CLIENT
  }
});
