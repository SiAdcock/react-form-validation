const config = {
  entry: './client.js',
  output: {
    path: __dirname + '/build/assets',
    filename: 'client.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=react'
    }]
  }
};

module.exports = config;
