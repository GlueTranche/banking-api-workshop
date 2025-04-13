// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alpentor Bank API Portal',
  tagline: 'Open Finance Solutions for Modern Banking',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://gluetranche.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/banking-api-workshop/',
  // GitHub pages deployment config.
  organizationName: 'GlueTranche', // Usually your GitHub org/user name.
  projectName: 'banking-api-workshop', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/GlueTranche/banking-api-workshop/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/GlueTranche/banking-api-workshop/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  // Add the OpenAPI plugin configuration
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          ais: {
            specPath: 'static/openapi/ais.yaml',
            outputDir: 'docs/account-information-service/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          pis: {
            specPath: 'static/openapi/pis.yaml',
            outputDir: 'docs/payment-initiation-service/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          mortgage: {
            specPath: 'static/openapi/mortgage.yaml',
            outputDir: 'docs/mortgage-api/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          custody: {
            specPath: 'static/openapi/custody.yaml',
            outputDir: 'docs/openwealth-custody/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          order: {
            specPath: 'static/openapi/order.yaml',
            outputDir: 'docs/openwealth-order/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],
  
  // Add the OpenAPI theme
  themes: ['docusaurus-theme-openapi-docs'],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/alpentor-social-card.jpg',
      navbar: {
        title: 'Alpentor Bank API',
        logo: {
          alt: 'Alpentor Bank Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/sandbox',
            label: 'API Sandbox',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/GlueTranche/banking-api-workshop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'API Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Account Information',
                to: '/docs/account-information-service/overview',
              },
              {
                label: 'Payment Initiation',
                to: '/docs/payment-initiation-service/overview',
              },
            ],
          },
          {
            title: 'More APIs',
            items: [
              {
                label: 'Mortgage API',
                to: '/docs/mortgage-api/overview',
              },
              {
                label: 'OpenWealth Custody',
                to: '/docs/openwealth-custody/overview',
              },
              {
                label: 'OpenWealth Order',
                to: '/docs/openwealth-order/overview',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'API Sandbox',
                to: '/sandbox',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GlueTranche/banking-api-workshop',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alpentor Bank API Portal. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      // Swiss-themed styling
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
