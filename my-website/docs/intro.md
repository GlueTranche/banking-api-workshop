---
sidebar_position: 1
---

# Introduction to Alpentor Bank APIs

Welcome to the Alpentor Bank API documentation. Our APIs are designed to enable developers to build innovative financial applications with access to banking capabilities.

## Available APIs

Alpentor Bank offers the following key API services:

### Account Information Service (AIS)
Access account details, balances, and transaction history.

### Payment Initiation Service (PIS)
Initiate domestic and international payments, check payment status.

### Mortgage API
Access mortgage products, calculate rates, and track application status.

### OpenWealth Custody Services
Manage portfolio information, asset details, and custody accounts.

### OpenWealth Order Placement
Create, monitor, and track orders with full history.

## Getting Started

To begin using our APIs, you'll need to:

1. **Get your API Key** - Sign up for a developer account to receive your API key
2. **Explore the documentation** - Read through the API specifications
3. **Test in the sandbox** - Use our sandbox environment to test your integration
4. **Go live** - Move to production when you're ready

## Authentication

All Alpentor Bank APIs use API Key authentication. Include your API key in the header of each request:

```
X-API-Key: your_api_key_here
```

For sandbox testing, you can use the following test API key:

```
test_alpentor_2025_key
```

## Base URLs

### Sandbox
```
https://api-sandbox.alpentor.ch/v1
```

### Production
```
https://api.alpentor.ch/v1
```

## Next Steps

Check out the specific documentation for each API:

- [Account Information Service](/docs/account-information-service/api-reference)