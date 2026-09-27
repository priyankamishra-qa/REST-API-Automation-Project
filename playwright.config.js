const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
    testDir: './tests',

    reporter: 'html',

    use: {
        baseURL: process.env.API_BASE_URL,
    },
});