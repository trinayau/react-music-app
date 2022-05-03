const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true,
  contentBase: path.resolve('src'),
  port: 8080,
  hot: true,
  open: true, //open webpage
  watchContentBase: true //keep on updating
};

config.devtool = 'inline-source-map'; //gives better error messages

module.exports = config;
