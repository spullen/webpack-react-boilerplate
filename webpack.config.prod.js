var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var plugins = [
  new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }
  ),
];

webpackConfig.debug = false;
webpackConfig.devtool = 'source-map';
webpackConfig.plugins = webpackConfig.plugins.concat(plugins)

module.exports = webpackConfig;