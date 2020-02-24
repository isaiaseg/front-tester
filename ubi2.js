const prompts = require('prompts');
const run = require('./ubi2.0/index');
(async () => {
    const questions = [
        {
            type: 'select',
            name: 'Fleetr',
            message: 'Selecciona un escenario: ',
            choices: [
                {
                    title: 'Login y lista de polizas',
                    value: {
                        scenario: 'LOGIN_POLICIES'
                    }
                },
                {
                    title: 'Buscar poliza por nombre',
                    value: {
                        scenario: 'FILTER_POLICIES',
                        filter: {
                            name: 'JAIME'
                        }
                    }
                },
                {
                    title: 'Buscar poliza por RUT',
                    value: {
                        scenario: 'FILTER_POLICIES',
                        filter: {
                            rut: '7183307'
                        }
                    }
                },
                // { title: 'Muestra de estatus de poliza', value: 'POLICY_STATUS' }
            ],
        }
    ];
    const onSubmit = (prompt, response) => run(response);
    await prompts(questions, { onSubmit });
})();