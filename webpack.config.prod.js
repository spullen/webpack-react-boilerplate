var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: false,
  devtool: 'source-map',
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
      }
    ),
  ],    
  module: {
    loaders: [
      {
        test: /\.(html)$/,
        loader: "file?name=[path][name].[ext]&context=./src/"
      },
      {
        test: /\.scss$/,
        include: [
            path.resolve(__dirname, "src/styles")
        ],
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css', 'sass')
      },
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss']
  }
};