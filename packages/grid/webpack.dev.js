const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      reconnect: 3,
    },
    hot: true,
    open: false,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
