/* eslint-disable */
var { merge } = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    static: {
      directory: rootPath,
    },
    historyApiFallback: true,
  },
});
