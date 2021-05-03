export default {
  typescript: true,
  base: "/houston/",
  title: "Houston",
  description: "Eduzz Houston Design System",
  files: ["./**/*.mdx"],
  propsParser: false,
  debug: false,
  src: "./packages",
  repository: 'https://github.com/eduzz/houston',
  menuDisplayName: {
    'eduzz/houston-ui': '@eduzz/houston-ui',
    'eduzz/houston-forms': '@eduzz/houston-forms',
    'eduzz/houston-hooks': '@eduzz/houston-hooks'
  },
  menu: [
    { name: 'eduzz/houston-ui', menu: ['Início'] },
    { name: 'eduzz/houston-forms', menu: ['Início'] },
    { name: 'eduzz/houston-hooks', menu: ['Início'] }
  ],
  groups: {
    'Geral': ['Início', 'Instalação', 'Como Contribuir', 'Roadmap', 'ESLint'],
    'Packages': ['eduzz/houston-ui', 'eduzz/houston-forms', 'eduzz/houston-hooks']
  },
  themeConfig: {
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: true
    },
    footer: {
      navigation: false,
    },
    logo: {
      src: '/public/logo.svg',
      width: 170,
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
      "!**/node_modules",
      "!**/doczrc.js",
    ]
  }
}
