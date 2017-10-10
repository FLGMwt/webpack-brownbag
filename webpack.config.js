var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: '[hash].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Brownbag!'
    })
  ]
};
