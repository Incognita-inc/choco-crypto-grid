const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    grid: "./src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader", options: { rootMode: "upward" } },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", "js"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: `choco-crypto-[name].bundle.${!isDev && "min"}.js`,
    publicPath: "/",
    clean: true,
  },
};
