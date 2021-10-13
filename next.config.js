const WindiCSS = require("windicss-webpack-plugin").default;
const withImages = require("next-images");

module.exports = withImages({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,

  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
  },
});
