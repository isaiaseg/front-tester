
const Promise = require('bluebird');
const { validations, runValidation } = require('./validation.controller');
const { L1, fill_L1 } = require('./fill_L1.controller');
timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)); }

const FIELD_VALIDATION = async (page) => {
    try {
        page.on('dialog', async dialog => dialog.accept('25.815.849-0'));
        await page.waitForSelector('input[ng-model="userToFind"]');
        await page.type('input[ng-model="userToFind"]', '14.540.270-0');
        await page.click('.find-presale');
        await page.waitForSelector('.use-presale');
        await page.click('.use-presale');

        await timeout(2000);
        Promise.each(validations, async (s) => await runValidation(s.input, s.selector, page, s.value, s.errorMsg))
            .then((a) => console.log('Validations finished'))

    } catch (error) {
        console.log('An error has occured', error);
    }
}

const INIT_L1 = async (page) => {
    try {
        await timeout(2000);
        page.on('dialog', async dialog => dialog.accept('25.815.849-0'));
        await page.waitForSelector('.newquote');
        await page.click('.newquote');
        await timeout(2000);
        await Promise.each(L1, async (s) => await fill_L1(s.input, s.selector, page, s.value))
        console.log('filled')
        const save = await page.waitForSelector(`button[ng-click="updatePresale('Quote', false)`);
        await page.click(save);
        await timeout(500);
        error = await page.evaluate(() => document.querySelector('#loading').style.display)
        if (error === 'none') console.log('Could not save L1 after filling fields');
        else console.log(`L1 filled and saved correctly`)
    } catch (error) {
        console.log('An error has occured', error);
    }
}

module.exports = {
    FIELD_VALIDATION,
    INIT_L1
}