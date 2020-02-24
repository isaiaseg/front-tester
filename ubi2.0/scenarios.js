
const Promise = require('bluebird')

const timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)) }

const LOGIN_POLICIES = async (page, params) => {
    try {
        const listSelector = '.mat-row'
        const list = await page.waitForSelector(listSelector)
        if (!list) return console.log('Ocurrio un error con la lista de polizas')
        const listLength = await page.evaluate((listSelector) => document.querySelectorAll(listSelector).length, listSelector)
        if (!listLength) return console.log('No encontramos polizas para este usuario')
        console.log(`Se encontraron ${listLength} polizas`)
    } catch (error) {
        console.log('An error has occured', error)
    }
}

const FILTER_POLICIES = async (page, params) => {
    try {
        await LOGIN_POLICIES(page, params)
        const filterSelector = (number) => `thead tr th:nth-child(${number}) mat-form-field .mat-form-field-infix`

        if ( params.filter.name || params.filter.rut  )
            await page.waitForSelector(filterSelector(2))

        await timeout(2000)
        await page.click(filterSelector(2))


        const inputSelector = '.search-select'
        await page.waitForSelector(inputSelector)
        await page.click(inputSelector)
        await page.type(inputSelector, params.filter.name || params.filter.rut)
        console.log('Polizas filtradas')
        
        await page.waitForSelector('.cdk-overlay-pane .mat-select-panel mat-option')
        await timeout(1000)
        await page.evaluate(() => document.querySelectorAll('.cdk-overlay-pane .mat-select-panel mat-option')[1].click() )

        await timeout(1000)
        const policySelector = 'td button'
        await page.waitForSelector(policySelector)
        await page.evaluate(policySelector => document.querySelectorAll(policySelector)[0].click(), policySelector )
        console.log('Poliza elegida')

    } catch (error) {
        console.log('An error has occured', error)
    }
}

const POLICY_STATUS = async (page, params) => {
    try {
        await LOGIN_POLICIES(page, params)
        await FILTER_POLICIES(page, params)

    } catch (error) {
        console.log('An error has occured', error)
    }
}

module.exports = {
    LOGIN_POLICIES,
    FILTER_POLICIES,
    POLICY_STATUS
}