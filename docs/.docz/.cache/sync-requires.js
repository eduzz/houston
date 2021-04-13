const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/docs/.docz/.cache/dev-404-page.js"))),
  "component---contributing-md": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/CONTRIBUTING.md"))),
  "component---packages-ui-components-button-index-mdx": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/packages/ui-components/Button/index.mdx"))),
  "component---packages-ui-components-table-index-mdx": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/packages/ui-components/Table/index.mdx"))),
  "component---src-getting-started-mdx": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/docs/src/getting-started.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/docs/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/michele/Projects/Eduzz/houston/docs/.docz/src/pages/404.js")))
}

