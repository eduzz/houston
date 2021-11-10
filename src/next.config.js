const withPlugins = require('next-compose-plugins');
const { withDokz } = require('dokz/dist/plugin');
const withTM = require('next-transpile-modules')([
    "@mui/material"
])

module.exports = withPlugins([withTM, withDokz], {
    swcMinify: true,
    debug: true,
    basePath: '/houston',
    poweredByHeader: false,
    distDir: 'build',
    pageExtensions: ['page.js', 'page.jsx', 'md', 'mdx', 'page.ts', 'page.tsx'],
    eslint: {
        ignoreDuringBuilds: true,
    }
})

