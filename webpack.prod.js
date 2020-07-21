const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(),
    // new CompressionPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  // externals: {
  //   'chart.js': {
  //     commonjs: 'Chart',
  //     commonjs2: 'Chart',
  //     amd: 'Chart',
  //     root: 'Chart',
  //   },
  // },
  output: {
    chunkFilename: '[name].bundle.js',
    publicPath: `/${process.env.ODOO_MODULE_NAME}/static/js/lib/`,
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          extractComments: 'all',
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
