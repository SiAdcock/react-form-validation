const webpack = require('webpack');

const config = {
  entry: [
    './client.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
  ],
  output: {
    path: __dirname + '/build/assets',
    publicPath: 'http://localhost:8080/build/assets/',
    filename: 'client.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=react'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
