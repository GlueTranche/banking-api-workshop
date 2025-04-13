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

## Use Cases

- **Personal Finance Management** - Aggregate financial data across accounts
- **Accounting Software Integration** - Automate transaction imports
- **Spend Analysis** - Track and categorize spending patterns

## Authentication

The AIS API requires API key authentication. For sandbox testing, you can use:

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