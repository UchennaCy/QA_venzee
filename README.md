# Introduction

API test automation using CodeceptJS with REST helper.

*<https://codecept.io/> - CodeceptJS

*<https://6151ﬀ8e4a5f22001701d590.mockapi.io/transactions/> - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
cd QA_Venzee
npm i
```

### How to trigger API tests

To run all the API tests, type in your terminal:

```sh
npm test
```

Example output

```sh
CodeceptJS v3.1.2
Using test root "/Users/uchenna/Desktop/Project/QA_Venzee"

DELETE test --
  ✔ Verify deleting a transaction in 921ms
GET tests --
  ✔ Verify a successful call to list all transactions in 929ms
  ✔ Verify a successful call to get a particular transaction in 697ms
  ✔ Verify a call to a transaction that does not exist in 688ms
POST test --
  ✔ Verify creating a new transaction in 705ms
PUT  test --
  ✔ Verify an update to a transaction in 1291ms

  OK  | 6 passed   // 5s
```

### How to use the reporting system

To generate a test report, type this in your terminal:

```sh
npm run generate-report
```

### How to trigger API load tests

To perform API load tests, type this in your terminal:

```sh
npm run api-load-test
```
