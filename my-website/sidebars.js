/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Account Information Service',
      link: {
        type: 'doc',
        id: 'account-information-service/overview',
      },
      items: [
        'account-information-service/overview',
        {
          type: 'category',
          label: 'API Reference',
          link: {
            type: 'generated-index',
            title: 'Account Information Service API Reference',
            description: 'Detailed API specifications for the Account Information Service',
          },
          items: [
            'account-information-service/api/get-accounts',
            'account-information-service/api/get-account-details',
            'account-information-service/api/get-account-balances',
            'account-information-service/api/get-transactions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Payment Initiation Service',
      link: {
        type: 'generated-index',
        title: 'Payment Initiation Service',
        description: 'Documentation for the Payment Initiation Service API',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Mortgage API',
      link: {
        type: 'generated-index',
        title: 'Mortgage API',
        description: 'Documentation for the Mortgage API',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'OpenWealth Custody Services',
      link: {
        type: 'generated-index',
        title: 'OpenWealth Custody Services',
        description: 'Documentation for the OpenWealth Custody Services API',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'OpenWealth Order Placement',
      link: {
        type: 'generated-index',
        title: 'OpenWealth Order Placement',
        description: 'Documentation for the OpenWealth Order Placement API',
      },
      items: [],
    },
  ],
};

module.exports = sidebars;