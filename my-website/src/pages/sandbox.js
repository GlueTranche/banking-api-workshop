import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './sandbox.module.css';

const endpoints = [
  {
    id: 'accounts',
    name: 'Get Accounts',
    path: '/accounts',
    method: 'GET',
    description: 'Retrieve a list of all available accounts.',
    parameters: [],
    auth: true,
    response: `{
  "accounts": [
    {
      "accountId": "CH93-0000-0000-0000-0000-0",
      "accountType": "Current",
      "currency": "CHF",
      "description": "Personal Account",
      "status": "active"
    },
    {
      "accountId": "CH93-0000-0000-0000-0000-1",
      "accountType": "Savings",
      "currency": "CHF",
      "description": "Savings Account",
      "status": "active"
    },
    {
      "accountId": "CH93-0000-0000-0000-0000-2",
      "accountType": "Investment",
      "currency": "USD",
      "description": "Investment Portfolio",
      "status": "active"
    }
  ]
}`
  },
  {
    id: 'account-details',
    name: 'Get Account Details',
    path: '/accounts/:accountId',
    method: 'GET',
    description: 'Retrieve detailed information for a specific account.',
    parameters: [
      {
        name: 'accountId',
        type: 'path',
        description: 'The unique identifier for the account',
        required: true,
        defaultValue: 'CH93-0000-0000-0000-0000-0'
      }
    ],
    auth: true,
    response: `{
  "accountId": "CH93-0000-0000-0000-0000-0",
  "accountType": "Current",
  "currency": "CHF",
  "description": "Personal Account",
  "status": "active",
  "openingDate": "2020-01-15",
  "ownerName": "Max Mustermann",
  "ownerType": "personal",
  "balances": {
    "current": {
      "amount": "5250.00",
      "currency": "CHF"
    },
    "available": {
      "amount": "5250.00",
      "currency": "CHF"
    }
  },
  "flags": {
    "blocked": false,
    "overdraftAllowed": true
  }
}`
  },
  {
    id: '
