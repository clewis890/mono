const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    TEMPLATE_ID: 'template_fiq8ay6',
    EMAILJS_USER_ID: 'user_52DVySDrVoAFY5uEbQliT',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `https://www.dablonyc.com/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `https://www.dablonyc.com/blog/:path*`,
      },
    ];
  },
});
