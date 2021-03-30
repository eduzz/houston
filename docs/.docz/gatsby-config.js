const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {
          searchPatterns: [
            './**/*.{ts,tsx,js,jsx,mjs}',
            '../packages/ui-components/**/*.{ts,tsx,js,jsx,mjs}',
            '!**/node_modules',
            '!**/doczrc.js',
          ],
        },
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/danielprado/Projects/houston/docs/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: ['./**/*.mdx', '../packages/ui-components/**/*.mdx'],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/danielprado/Projects/houston/docs',
          templates:
            '/Users/danielprado/Projects/houston/node_modules/docz-core/dist/templates',
          docz: '/Users/danielprado/Projects/houston/docs/.docz',
          cache: '/Users/danielprado/Projects/houston/docs/.docz/.cache',
          app: '/Users/danielprado/Projects/houston/docs/.docz/app',
          appPackageJson:
            '/Users/danielprado/Projects/houston/docs/package.json',
          appTsConfig: '/Users/danielprado/Projects/houston/docs/tsconfig.json',
          gatsbyConfig:
            '/Users/danielprado/Projects/houston/docs/gatsby-config.js',
          gatsbyBrowser:
            '/Users/danielprado/Projects/houston/docs/gatsby-browser.js',
          gatsbyNode: '/Users/danielprado/Projects/houston/docs/gatsby-node.js',
          gatsbySSR: '/Users/danielprado/Projects/houston/docs/gatsby-ssr.js',
          importsJs:
            '/Users/danielprado/Projects/houston/docs/.docz/app/imports.js',
          rootJs: '/Users/danielprado/Projects/houston/docs/.docz/app/root.jsx',
          indexJs:
            '/Users/danielprado/Projects/houston/docs/.docz/app/index.jsx',
          indexHtml:
            '/Users/danielprado/Projects/houston/docs/.docz/app/index.html',
          db: '/Users/danielprado/Projects/houston/docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
