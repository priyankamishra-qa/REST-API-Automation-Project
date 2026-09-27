# REST API Testing & Automation Framework
A REST API testing and automation framework built using Playwright and JavaScript.

## Project Overview
This project demonstrates API automation using Playwright's APIRequest functionality. It covers CRUD operations, positive and negative scenarios, response validation, reusable API helpers, test data management, environment configuration, and GitHub Actions CI.

## Tech Stack
- JavaScript
- Playwright
- Node.js
- REST API
- JSON
- Git & GitHub
- GitHub Actions

## API Used
JSONPlaceholder
Base URL: https://jsonplaceholder.typicode.com

## Test Coverage
- GET - Fetch a single post
- GET - Validate posts response
- GET - Validate response headers
- POST - Create a new post
- PUT - Update an existing post
- PATCH - Update a specific field
- DELETE - Delete an existing post
- GET - Validate non-existent post
- POST - Validate invalid request data

## Framework Features
- Playwright API automation
- Reusable API request helpers
- Reusable status-code assertion
- Centralized test data
- Environment configuration using `.env`
- Positive and negative API testing
- Response body validation
- Response header validation
- HTML test reporting
- GitHub Actions CI
- Clean and maintainable project structure

## Project Structure
REST-API-Automation-Project
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── tests
│   ├── get-post.spec.js
│   ├── create-post.spec.js
│   ├── update-post.spec.js
│   ├── patch-post.spec.js
│   ├── delete-post.spec.js
│   ├── negative-api.spec.js
│   └── negative-post.spec.js
│
├── utils
│   ├── apiHelper.js
│   └── assertions.js
│
├── test-data
│   └── postData.js
│
├── .gitignore
├── playwright.config.js
├── package.json
└── package-lock.json