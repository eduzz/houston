const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Houston Design System',
  tagline: 'O Houston é um conjunto de diretrizes, componentes e padrões para acelerar o design e o desenvolvimento de produto.',
  url: 'https://eduzz.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eduzz',
  projectName: 'houston',
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'packages',
          exclude: [
            'experimental',
            'hooks',
            'ui-components'
          ],
          // Please change this to your repo.
          editUrl: 'https://github.com/eduzz/houston/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Eduzz Houston',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'INSTALLATION',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://github.com/eduzz/houston',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Instalação',
                to: '/docs/INSTALLATION',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/EeCnYRsCkX',
              },
              {
                label: 'Github',
                href: 'https://github.com/eduzz/houston',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/eduzz/houston',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eduzz Houston`,
      },
      prism: {
        theme: lightCodeTheme
      },
    }),
});
