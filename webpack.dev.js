const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const __DEVMODE__ = JSON.stringify('false');

module.exports = merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEVMODE__,
    }),
  ],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
});
