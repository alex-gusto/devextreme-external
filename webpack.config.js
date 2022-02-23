const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.css$/, use: [{ loader: "style-loader" }, "css-loader"] },
    ],
  },
  devServer: {
    static: ["./dist", "./public"],
  },
  externals: ["vue", /devextreme-vue/, /devextreme/],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "./template.ejs",
      title: "Development",
    }),
  ],
};
