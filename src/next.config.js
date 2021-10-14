const withPlugins = require('next-compose-plugins');
const { withDokz } = require('dokz/dist/plugin');
const withTM = require('next-transpile-modules')([
    '@eduzz/houston-ui',
])

module.exports = withPlugins([withTM, withDokz], {
    debug: true,
    pageExtensions: ['page.js', 'page.jsx', 'md', 'mdx', 'page.ts', 'page.tsx']
})

