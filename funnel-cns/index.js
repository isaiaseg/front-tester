const puppeteer = require('puppeteer')
require('dotenv').config()
const { INIT_PROCESS } = require('./scenarios')

const run = async (options) => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(`${process.env.FUNNEL_CNS_URL}`)
    INIT_PROCESS(page, options)
}

module.exports = run