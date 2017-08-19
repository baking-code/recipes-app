/* eslint-disable no-var, vars-on-top */
var webpack = require("webpack");
var path = require("path");
global.Promise = require("bluebird");

var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var sassLoaders = [
  "css-loader?sourceMap",
  "postcss-loader",
  "sass-loader?sourceMap&includePaths[]=" + path.resolve(__dirname, "./client")
];

module.exports = {
  context: path.join(__dirname, "./client"),
  entry: {
    jsx: "./index.js",
    html: "./index.html",
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
      "react-router"
    ]
  },
  output: {
    path: path.join(__dirname, "./dist/client"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /fontawesome.+\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /fontawesome.+\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css?modules",
        include: /flexboxgrid/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: [path.resolve(__dirname), path.resolve(__dirname, "node_modules")]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
    }),
    new ExtractTextPlugin("style.css")
  ],
  postcss: [
    autoprefixer({
      browsers: ["last 2 versions"]
    })
  ],
  devServer: {
    contentBase: "./client"
  }
};

if (process.env.NODE_ENV === "production") {
  module.exports.output.publicPath = "/";
}
