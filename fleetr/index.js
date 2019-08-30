const puppeteer = require('puppeteer');
require('dotenv').config();
const scenarios = require('./scenarios');

const run = async (scenario) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(process.env.FLEETR_URL);
    await page.setViewport({ width: 1000, height: 700 });

    // Login
    const loginSelectors = { email: 'input[placeholder="Email"]', password: 'input[placeholder="Contraseña"]' };
    await page.type(loginSelectors.email, process.env.FLEETR_EMAIL);
    await page.type(loginSelectors.password, process.env.FLEETR_PASSWORD);
    await page.click('button');
    scenarios[scenario](page, scenario);
}

module.exports = run;