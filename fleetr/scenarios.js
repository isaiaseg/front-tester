
const Promise = require('bluebird');
timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)); }

const OPEN_SEND_FEEDBACK = async (page, scenario) => {
    try {
        await page.waitForSelector('input.finder');
        await page.click('input.finder');
        await page.waitForSelector('.side-tool-bar');
        await page.hover('.side-tool-bar');
        await page.click('.side-tool-bar .buttons button:nth-child(6)');

        await page.waitForSelector('mat-dialog-container iframe');
        const elementHandle = await page.$('mat-dialog-container iframe');
        const frame = await elementHandle.contentFrame();
        await frame.waitForSelector('textarea');
        await frame.type('textarea', 'Test automatizado con puppeteer ✌️', { delay: 100 });
        await frame.click('form button');
        await frame.waitForSelector('mat-dialog-container button');
        await frame.click('mat-dialog-container button');
        const success = await frame.waitForSelector('.panel-success');
        if ( success )
            console.log(`Scenario ${scenario} finished succcesfully`);
    } catch (error) {
        console.log('An error has occured', error);
    }
}

module.exports = {
    OPEN_SEND_FEEDBACK
}