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

1. **Register for an API key** - Sign up for a developer account and request credentials
2. **Explore the documentation** - Read through the API specifications
3. **Test in the sandbox** - Use our sandbox environment to test your integration
4. **Go live** - Move to production when you're ready

## Authentication

All Alpentor Bank APIs use API keys for authentication. Include your API key in the header of each request:

```
Authorization: Bearer your_api_key_here
```

For sandbox testing, you can use the following test API key:

```
sk_test_alpentor_2025
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

## Response Formats

All API responses are in JSON format. Successful responses will have a 2xx status code, while errors will be in the 4xx or 5xx range.

## Next Steps

Check out the specific documentation for each API:

- [Account Information Service](/docs/account-information-service/overview)
- [Payment Initiation Service](/docs/payment-initiation-service/overview)
- [Mortgage API](/docs/mortgage-api/overview)
- [OpenWealth Custody Services](/docs/openwealth-custody/overview)
- [OpenWealth Order Placement](/docs/openwealth-order/overview)

Or, jump right into testing with our [API Sandbox](/sandbox).
