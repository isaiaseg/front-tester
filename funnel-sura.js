const prompts = require('prompts')
const run = require('./funnel-sura/')
const start = async () => {
    let response = await prompts({
        type: 'select',
        name: 'stopAt',
        message: 'Selecciona un escenario donde detenerse: ',
        choices: [
            {
                title: 'Flujo completo'
            },
            {
                title: 'L1',
                value: 'L1'
            },
            {
                title: 'Quote',
                value: 'Quote'
            },
            {
                title: 'C1',
                value: 'C1'
            },
            {
                title: 'C2',
                value: 'C2'
            },
            {
                title: 'C3',
                value: 'C3'
            }
        ],
    }) 

    response.startAt = 'L1'
    run(response)
}
start()