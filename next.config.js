const WindiCSS = require("windicss-webpack-plugin").default;

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "",
  },

  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
  },
};
