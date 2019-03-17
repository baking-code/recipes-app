/* eslint-disable no-var, vars-on-top */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var path = require("path");
global.Promise = require("bluebird");

module.exports = {
  context: path.join(__dirname, "./client"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(
        __dirname,
        "node_modules",
        "styled-components"
      ),
      "react": path.resolve(
        __dirname,
        "node_modules",
        "react"
      ),
      "react-dom": path.resolve(
        __dirname,
        "node_modules",
        "react-dom"
      )
    }
  }
};

if (process.env.NODE_ENV === "production") {
  module.exports.output.publicPath = "/";
  module.exports.devtool = "source-map";
} else {
  module.exports.devtool = "source-map";
}
