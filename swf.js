const prompts = require('prompts');
const run = require('./swf/index');
(async () => {
    const questions = [
        {
            type: 'select',
            name: 'SWF',
            message: 'Selecciona un escenario: ',
            choices: [
                { title: 'Iniciar cotización y llenar L1', value: 'INIT_L1' },
                { title: 'Validación de campos', value: 'FIELD_VALIDATION' }
            ],
        }
    ];
    const onSubmit = (prompt, response) => run(response);
    await prompts(questions, { onSubmit });
})();