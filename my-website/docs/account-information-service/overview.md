---
sidebar_position: 1
---

# Account Information Service (AIS) Overview

The Account Information Service (AIS) API provides secure access to account data, enabling applications to retrieve account details, balances, and transaction history.

## Key Features

- **Account Listing** - Get a list of all accounts available to an authorized user
- **Account Details** - Retrieve detailed information about specific accounts
- **Balance Information** - Access current and available balances for accounts
- **Transaction History** - View detailed transaction data with filtering options
- **Real-time Data** - Access up-to-date account information

## Use Cases

- **Personal Finance Management** - Aggregate financial data across accounts
- **Accounting Software Integration** - Automate transaction imports
- **Spend Analysis** - Track and categorize spending patterns
- **Financial Planning** - Access data for budgeting and financial goals
- **Loan Applications** - Verify income and expenses

## Authentication

The AIS API requires OAuth 2.0 authentication. For sandbox testing, you can use the API key authentication method:

```
Authorization: Bearer sk_test_alpentor_2025
```

## Endpoints

### Account Access

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/accounts` | List all accessible accounts |
| GET | `/accounts/{accountId}` | Get details for a specific account |

### Balance Information

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/accounts/{accountId}/balances` | Get balances for a specific account |

### Transaction History

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/accounts/{accountId}/transactions` | Get transactions for a specific account |

## Testing in the Sandbox

The AIS API is available in the [Sandbox environment](/sandbox) with pre-configured test accounts and transaction data.

Test accounts available in the sandbox:

| Account ID | Account Type | Currency | Balance |
|------------|--------------|----------|---------|
| CH93-0000-0000-0000-0000-0 | Current | CHF | 5,250.00 |
| CH93-0000-0000-0000-0000-1 | Savings | CHF | 12,500.00 |
| CH93-0000-0000-0000-0000-2 | Investment | USD | 8,700.00 |

## Rate Limits

The AIS API has the following rate limits:

- 100 requests per minute per API key
- 1,000 requests per day per API key

## Next Steps

- [Try the API in the Sandbox](/sandbox)
- [View the API Reference](/docs/account-information-service/api)
- [Explore Account Details](/docs/account-information-service/account-details)
- [Access Balances](/docs/account-information-service/balances)
- [Retrieve Transactions](/docs/account-information-service/transactions)