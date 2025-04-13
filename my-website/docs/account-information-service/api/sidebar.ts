import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "account-information-service/api/alpentor-bank-account-information-service-api",
    },
    {
      type: "category",
      label: "Accounts",
      items: [
        {
          type: "doc",
          id: "account-information-service/api/get-accounts",
          label: "Get Accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account-information-service/api/get-account-details",
          label: "Get Account Details",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
