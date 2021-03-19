/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Houston',
  tagline: 'Eduzz Houston Design System',
  url: 'https://github.com/eduzz/houston',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eduzz',
  projectName: 'houston',
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchParameters: {},
    },
    navbar: {
      title: 'HOUSTON',
      style: 'dark',
      logo: {
        alt: 'Houston - Design System',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Design',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Conteúdo',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Componentes',
          position: 'right',
        },
        {
          href: 'https://github.com/eduzz/houston/releases',
          label: 'Versões',
          position: 'right',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Houston by Eduzz.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/eduzz/houston/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/eduzz/houston/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
