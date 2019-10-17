
const Promise = require('bluebird');

const timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)); }

const LOGIN_POLICIES = async (page, scenario) => {
    try {
        const listSelector = '.mat-row';
        const list = await page.waitForSelector(listSelector);
        if (!list) return console.log('Ocurrio un error con la lista de polizas');
        const listLength = await page.evaluate((listSelector) => document.querySelectorAll(listSelector).length, listSelector)
        if (!listLength) return console.log('No encontramos polizas para este usuario');
        console.log(`Se encontraron ${listLength} polizas`);
    } catch (error) {
        console.log('An error has occured', error);
    }
}

module.exports = {
    LOGIN_POLICIES
}