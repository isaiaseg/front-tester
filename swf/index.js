const puppeteer = require('puppeteer');
require('dotenv').config();
const scenarios = require('./scenarios');
timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)); }

const run = async (scenario) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(process.env.SWF_URL);
    await page.setViewport({ width: 1000, height: 1200 });

    // Login
    await page.waitForSelector('#admin-login-top');
    await timeout(2000);
    await page.click('#admin-login-top');
    const loginSelectors = { email: '#email', password: '#password' };
    await page.type(loginSelectors.email, process.env.SWF_EMAIL);
    await page.type(loginSelectors.password, process.env.SWF_PASSWORD);
    await page.click('.btn-login');
    scenarios[scenario](page);
}

module.exports = run;