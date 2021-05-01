const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages]], {
  env: {
    EMAILJS_TEMPLATE_ID: 'template_fiq8ay6',
    EMAILJS_USER_ID: 'user_52DVySDrVoAFY5uEbQliT',
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  async redirects() {
    return [
      // {
      //   source: '/:path*',
      //   destination: `/:path*`,
      // },
      {
        // source: `${BLOG_URL}/blog`,
        // destination: `/blog`,
        source: '/blog',
        destination: 'https://blog.dablonyc.com/',
        permanent: true,
      },
    ];
  },
});
