const { withDokz } = require('dokz/dist/plugin');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@mui/material']);
const withLess = require("next-with-less");

module.exports = withPlugins(
  [[withLess, { lessLoaderOptions: { lessOptions: { javascriptEnabled: true } } }], withTM, withDokz],
  {
    swcMinify: true,
    debug: true,
    basePath: '/houston',
    poweredByHeader: false,
    reactStrictMode: true,
    distDir: 'build',
    pageExtensions: ['page.js', 'page.jsx', 'md', 'mdx', 'page.ts', 'page.tsx'],
    eslint: {
      ignoreDuringBuilds: true
    },
    typescript: {
      ignoreBuildErrors: true
    }
  }
);
