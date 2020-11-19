/* eslint-disable @typescript-eslint/no-require-imports */
process.env.NODE_ENV = 'production';
let webpack = require('webpack');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfigProd = require('react-scripts-ts/config/webpack.config.prod');

webpackConfigProd.plugins.push(
  new webpack.optimize.ModuleConcatenationPlugin(),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'report.html'
  })
);

require('react-scripts-ts/scripts/build');
