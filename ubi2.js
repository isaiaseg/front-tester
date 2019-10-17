const prompts = require('prompts');
const run = require('./ubi2.0/index');
(async () => {
    const questions = [
        {
            type: 'select',
            name: 'Fleetr',
            message: 'Selecciona un escenario: ',
            choices: [
                { title: 'Login y lista de polizas', value: 'LOGIN_POLICIES' }
            ],
        }
    ];
    const onSubmit = (prompt, response) => run(response);
    await prompts(questions, { onSubmit });
})();