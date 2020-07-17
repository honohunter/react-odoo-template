const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

require('dotenv').config();

const __DEVMODE__ = JSON.stringify('odoo');

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
    publicPath: `/${process.env.ODOO_MODULE_NAME}/static/js/lib/`,
    // watchContentBase: true,
    port: 8080,
    proxy: {
      [`!(/${process.env.ODOO_MODULE_NAME}/static/js/lib/**.*)`]: {
        target: `//${process.env.ODOO_HOST}:${process.env.ODOO_PORT}`,
      },
    },
  },
});
