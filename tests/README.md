# Playwright & TypeScript Automation Framework - Rahul Shetty Academy Client Portal
 This repository contains an end-to-end (E2E) automation testing project designed for the Rahul Shetty Academy Client Portal. The framework leverages a hybrid approach, combining a robust Page Object Model (POM) for UI interactions with API Client classes for efficient data setup and validation.

## Tech Stack
 - Language: TypeScript
 - Testing Tool: Playwright
 - Environment: Node.js

## Design Patterns

- Page Object Model (POM)
- API Client Layer
- Base Classes for reuse
- Separation of concerns (UI vs API vs Tests)

## API Layer Usage

The API layer is used to:
- Create test data
- Authenticate users
- Reduce UI dependency
- Speed up test execution

## Project Architecture
 The project is structured to separate business logic, page interactions, and network requests for high maintainability.

```text
 project-root
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── ...
│
├── api
│   ├── BaseApiClient.ts
│   ├── AuthApi.ts
│   ├── CartApi.ts
│   └── ProductApi.ts
│
├── tests
│   ├── login.spec.ts
│   ├── dashboard.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── playwright.config.ts
└── package.json 

```
## Test coverage

### Login
- Valid login
- Succesful logout
- Invalid credentials
- Empty credentials

### Dashboard
- Valid dashboard
- Add product to cart from Dashboard

### Add items to cart
- Add product to cart 
- Validate success messages
- Shopping cart updated after adding product/s

### Shopping cart
- Succesfull checkout 
- Validate success messages
- Shopping cart updated after checkout

## Prerequisites
- Ensure Node.js is installed on your local machine.
- Use Visual Studio Code for the best development experience.
## Installation
 - Clone the repository.
 - Install dependencies:
     npm install 
 - Initialize the Playwright configuration:
    npx playwright install
 - (Optional) Generate the TypeScript configuration if not present:
    npx tsc --init


## Run Tests

Run all tests:

npx playwright test

Run specific test:

npx playwright test tests/login.spec.ts

Run headed:

npx playwright test --headed

Generate and open reports:

npx playwright show-report



## Future Improvements
- Addition of tags
- Mobile testing
- Data-driven framework
