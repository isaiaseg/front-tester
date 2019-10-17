const puppeteer = require('puppeteer');
require('dotenv').config();
const scenarios = require('./scenarios');
const fetch = require('node-fetch');

const run = async (scenario) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(process.env.UBI_2_0);
    await page.setViewport({ width: 1000, height: 700 });

    // Login
    const loginSelectors = {
        email: 'input[placeholder="Email"]',
        password: 'input[placeholder="Contraseña"]'
    };
    await page.type(loginSelectors.email, process.env.UBI_2_0_EMAIL);
    await page.type(loginSelectors.password, process.env.UBI_2_0_PASSWORD);
    await page.click('form button');
    scenarios[scenario](page, scenario);
}

module.exports = run;