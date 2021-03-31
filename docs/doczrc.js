export default {
  typescript: true,
  base: "/houston/",
  title: "Houston",
  description: "Eduzz Houston Design System",
  files: ["./**/*.mdx", "../packages/**/*.mdx"],
  themeConfig: {
    header: {
      bg: 'red'
    },
    showPlaygroundEditor: false,
    showDarkModeSwitch: false,
  },
  docgenConfig: {
    searchPatterns: [
      "./**/*.{ts,tsx}",
      "../packages/ui-components/**/*.{ts,tsx}",
      "!**/node_modules",
      "!**/doczrc.js",
    ]
  }
}
