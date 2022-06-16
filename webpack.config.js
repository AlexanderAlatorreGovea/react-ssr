const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./server.js",
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
    rules: [
      {
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                target: { browsers: ["last 2 versions"] },
              },
            ],
          ],
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "build"),
    publicPath: "/build",
  },
  externals: [webpackNodeExternals()],
};
