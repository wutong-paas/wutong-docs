// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '梧桐PaaS',
  tagline: '易于使用的云原生PaaS平台',
  url: 'https://wutong-pass.github.io',
  baseUrl: '/wutong-docs/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wutong-paas', // Usually your GitHub org/user name.
  projectName: 'wutong-docs',      // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          editUrl: 'https://github.com/wutong-paas/wutong-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/wutong-paas/wutong-docs/tree/master/',
          blogSidebarTitle: '最近技术博客',
          blogSidebarCount: 'ALL',
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
      navbar: {
        title: '梧桐PaaS',
        logo: {
          alt: 'wutong-pass Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '产品文档',
          },
          {
            to: '/blog', 
            label: '技术博客', 
            position: 'left'
          },
          {
            href: 'https://github.com/wutong-paas',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '产品文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '公众号',
                href: '...',
              },
              {
                label: '企业微信',
                href: '...',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '技术博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wutong-paas',
              },
            ],
          },
        ],
        copyright: `@${new Date().getFullYear()} 拓维信息系统股份有限公司`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  
  plugins: [
    [ 
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: ["en", "zh"],
      },
    ],
  ],
};

module.exports = config;
