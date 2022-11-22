const { withDokz } = require('dokz/dist/plugin');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
  [withDokz],
  {
    swcMinify: true,
    basePath: '/houston',
    debug: true,
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
