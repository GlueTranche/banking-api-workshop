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
  docs: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "doc",
      id: "sandbox",
    },
    {
      type: "category",
      label: "Account Information Service",
      items: [
        {
          type: "doc",
          id: "account-information-service/overview",
        },
        {
          type: "doc",
          id: "account-information-service/api-reference",
        },
        {
          type: "category",
          label: "API Endpoints",
          link: {
            type: "doc",
            id: "account-information-service/api/accounts"
          },
          items: [
            {
              type: "doc",
              id: "account-information-service/api/get-accounts",
              label: "Get Accounts"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-details",
              label: "Get Account Details"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-balance",
              label: "Get Account Balance"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-transactions",
              label: "Get Account Transactions"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-transaction-details",
              label: "Get Transaction Details"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-standing-orders",
              label: "Get Account Standing Orders"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-direct-debits",
              label: "Get Account Direct Debits"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-scheduled-payments",
              label: "Get Account Scheduled Payments"
            },
            {
              type: "doc",
              id: "account-information-service/api/get-account-beneficiaries",
              label: "Get Account Beneficiaries"
            }
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