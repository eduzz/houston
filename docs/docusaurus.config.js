/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Houston Design System',
  tagline: 'O Houston é um conjunto de diretrizes, componentes e padrões para acelerar o design e o desenvolvimento de produto.',
  url: 'https://eduzz.github.io',
  baseUrl: '/houston/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eduzz',
  projectName: 'houston',
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark')
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchParameters: {}
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Houston - Design System',
<<<<<<< HEAD
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg'
=======
        src: 'img/logo.svg'
>>>>>>> develop
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Design',
          position: 'right'
        },
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Conteúdo',
          position: 'right'
        },
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Componentes',
          position: 'right'
        },
        {
<<<<<<< HEAD
=======
          href: 'https://github.com/eduzz/houston/releases',
          label: 'Versões',
          position: 'right'
        },
        {
>>>>>>> develop
          href: 'https://github.com/eduzz/houston',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      links: [
        {
          title: 'Documentação',
          items: [
            {
<<<<<<< HEAD
              label: 'Instalação',
              to: 'docs/',
            },
            {
              label: 'Guia de estilo',
              to: 'docs/',
            }
          ],
=======
              label: 'Style Guide',
              to: 'docs/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus'
            }
          ]
>>>>>>> develop
        },
        {
          title: 'Comunidade',
          items: [
            {
<<<<<<< HEAD
              label: 'GitHub',
              href: 'https://github.com/eduzz/houston',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/EeCnYRsCkX',
            }
          ],
        }
      ],
      copyright: `
        © ${new Date().getFullYear()} Houston. Todos os direitos reservados. 
          <div class='footer__made'>Feito com 
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11.3557C6 11.3557 1.88519 7.44265 1.13009 6.46434C0.375 5.48603 0 4.35353 0 3.37602C0 1.5115 1.47746 0 3.3 0C4.4161 0 5.40278 0.566833 6 1.43445C6.59722 0.566833 7.5839 0 8.7 0C10.5225 0 12 1.5115 12 3.37602C12 4.35353 11.625 5.48603 10.8699 6.46434C10.1148 7.44265 6 11.3557 6 11.3557Z"/>
            </svg>
          na <span>Eduzz<span></div>
        `,
    },
=======
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Houston by Eduzz.`
    }
>>>>>>> develop
  },
  presets: [
    [
      '@docusaurus/preset-bootstrap',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/eduzz/houston/tree/master/docs'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/eduzz/houston/tree/master/docs'
        }
      }
    ]
  ]
};
