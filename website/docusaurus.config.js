// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Obsidiosaurus',
  tagline: 'Obsidian.md + Docusaurus = ❤ ',
  favicon: 'img/favicon.ico',


  url: 'https://obsidiosaurus.com',
  baseUrl: '/',

  organizationName: 'CIMSTA', 
  projectName: 'obsidiosaurus', 
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //sidebarCollapsed: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/obsidiosaurus-social-card.jpg',
      navbar: {
        title: 'Obsidiosaurus',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'main',
            position: 'left',
            label: 'Main',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebar2',
            position: 'left',
            label: 'Sidebar 2*',
          },
          {to: '/blog', label: 'Blog*', position: 'left'},
          {to: '/release_notes', label: 'Release Notes', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/CIMSTA/obsidiosaurus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/SSGK5tuqJh',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord Community',
          },
          {
            href: 'https://cimsta.com',
            position: 'right',
            className: 'header-cimsta-link',
            'aria-label': 'CIMSTA.com',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} CIMSTA. CC-BY / MIT`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'release_notes',
          routeBasePath: 'release_notes',
          path: './release_notes',
        },
        
      ],
    ],
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};



module.exports = config;
