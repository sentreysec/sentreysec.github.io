// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sentreysec',
  tagline: 'cyber security knowledge base',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sentreysec.github.io', // Replace with your GitHub username
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // Replace with your repo name

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sentreysec', // Your GitHub username
  projectName: 'sentreysec.github.io', // Your repo name
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'defensive-security',
        path: 'defensive-security',
        routeBasePath: 'defensive-security',
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'offensive-security',
        path: 'offensive-security',
        routeBasePath: 'offensive-security',
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'writeups',
        path: 'writeups',
        routeBasePath: 'writeups',
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'research',
        path: './research',
        routeBasePath: 'research',
        blogTitle: 'Research & Development',
        blogDescription: 'Latest cybersecurity research and development insights',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Recent Research',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl: 'https://github.com/sentreysec/sentreysec.github.io/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      
      // Add this colorMode configuration
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false, // Set to true if you want to remove the theme toggle switch
        respectPrefersColorScheme: false, // Set to false to ignore system preference
      },



      navbar: {
        title: '*',
        logo: {
          src: 'img/img.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'defensiveSecuritySidebar',
            docsPluginId: 'defensive-security',
            position: 'left',
            label: 'Defensive Security',
            to: '/defensive-security'
          },
          {
            type: 'docSidebar',
            sidebarId: 'offensiveSecuritySidebar',
            docsPluginId: 'offensive-security',
            position: 'left',
            label: 'Offensive Security',
            to: '/offensive-security'
          },
          {
            type: 'docSidebar',
            sidebarId: 'writeupsSidebar',
            docsPluginId: 'writeups',
            position: 'left',
            label: 'Writeups',
            to: '/writeups'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialsSidebar',
            docsPluginId: 'tutorials',        
            position: 'left',
            label: 'Tutorials',
          },
          // Blog sections
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/research', label: 'Research & Dev', position: 'left'},
          // GitHub link
          {
            href: 'https://github.com/sentreysec/sentreysec.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
//              {
//                label: 'Getting Started',
//                to: '/docs/intro',
//              },
              {
                label: 'Defensive Security',
                to: '/defensive-security',
              },
              {
                label: 'Offensive Security',
                to: '/offensive-security',
              },
              {
                label: 'Writeups',
                to: '/writeups',
              },
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
            ],
          },
          
//        {
//            title: 'Community',
//            items: [
//              {
//                label: 'Stack Overflow',
//                href: 'https://stackoverflow.com/questions/tagged/cybersecurity',
//              },
//              {
//                label: 'Discord',
//                href: 'https://discord.gg/cybersecurity', // Replace with actual link
//              },
//              {
//                label: 'X',
//                href: 'https://x.com/yourusername', // Replace with your X handle
//              },
//            ],
//          },
//          
        {
           title: 'More',
            items: [
             // {
             //   label: 'Blog',
             //   to: '/blog',
             //  },
              {
                label: 'Research & Dev',
                to: '/research',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sentreysec',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sentreysec. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
