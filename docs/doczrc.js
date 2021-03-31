export default {
  typescript: true,
  base: "/houston/",
  title: "Houston",
  description: "Eduzz Houston Design System",
  files: ["./**/*.mdx", "../packages/**/*.mdx"],
  groups: {
    '': [],
    API: ['Components', 'UI'],
  },
  themeConfig: {
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: false,
    },
    logo: {
      src: '/public/logo.svg',
      width: 45,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
    showPlaygroundEditor: false,
    showDarkModeSwitch: false
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
