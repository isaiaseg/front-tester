
const Promise = require('bluebird')
const fields = require('./selectors.controller')
const status = require('./status')

const timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)) }

const INIT_PROCESS = async (page, options) => {
    try {
        if ( !options.startAt ) return
        
        if ( options.stopAt && (options.startAt === options.stopAt) )
            return console.log('Succesfully stopped at '+options.stopAt)
        
        
        await timeout(2000)
        await Promise.each(fields[options.startAt], async (params) => {
            await timeout(1000)
            await page.waitForSelector(params.selector)
            if (params.input === 'text') {
                await timeout(1000)
                await page.type(params.selector, params.value)
            } else {
                await timeout(1000)
                await page.evaluate((params) => document.querySelector(params.selector).click() , params)
            } 
            if (params.input === 'select') { 
                await timeout(1000)
                await page.evaluate((params) => document.querySelectorAll('mat-option')[params.option].click(), params)
            }
        })

        const newStart = stage => Object.assign({}, options, { startAt: stage })
        if ( options.startAt === 'L1' )
            INIT_PROCESS(page, newStart('Quote'))
        if ( options.startAt === 'Quote' )
            INIT_PROCESS(page, newStart('C1'))
        if ( options.startAt === 'C1' )
            INIT_PROCESS(page, newStart('C2'))
        if ( options.startAt === 'C2' )
            INIT_PROCESS(page, newStart('C3'))

    } catch (error) {
        console.log('An error has occured', error)
    }
}

module.exports = {
    INIT_PROCESS
}