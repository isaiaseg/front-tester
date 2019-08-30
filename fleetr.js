const prompts = require('prompts');
const run = require('./fleetr/index');
(async () => {
    const questions = [
        {
            type: 'select',
            name: 'Fleetr',
            message: 'Selecciona un escenario: ',
            choices: [
                { title: 'Abrir y enviar feedback', value: 'OPEN_SEND_FEEDBACK' }
            ],
        }
    ];
    const onSubmit = (prompt, response) => run(response);
    await prompts(questions, { onSubmit });
})();