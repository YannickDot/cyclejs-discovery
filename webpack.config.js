var webpack = require('webpack');

module.exports = {
  entry : {
    app : ['./src/main.js']
  },
  output: {
    path: require("path").resolve("dist"),
    filename: 'bundle.js',
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
