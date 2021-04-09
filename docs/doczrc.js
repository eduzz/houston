export default {
  typescript: true,
  base: "/houston/",
  title: "",
  description: "Eduzz Houston Design System",
  files: ["./**/*.mdx", "../CONTRIBUTING.md", "../packages/**/*.mdx"],
  menu: [
    'Início',
    'Como Contribuir'
  ],
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
      width: 150,
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
    showDarkModeSwitch: false,
    colors: {
      header: {
        bg: '#F9FAFB',
        text: '37474F',
        button: {
          bg: 'red',
          color: 'green',
        }
      }
    }
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
